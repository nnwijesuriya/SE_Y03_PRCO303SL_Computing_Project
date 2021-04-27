import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { mark } from '../attendance-tab/mark-attendance/verify-form/marking.service';
import { user } from '../salaries/salaries.service';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  
constructor(private afs: AngularFirestore) {}

getCollection(value) {
    return this.afs.collection<user>('salaries/approved/users', ref => 
        ref.where(
            'department', '==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
  }

  getAtttendance(value) {
    return this.afs.collection<mark>('attendance/employees/present employees', ref => 
        ref.where(
            'department', '==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
  }

  getEmployees(value) {
    return this.afs.collection<mark>('users', ref => 
        ref.where(
            'department', '==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
  }

  getUsers(value) {
    return this.afs.collection<mark>('users', ref => 
        ref.where(
            'role', '==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
  }

}
