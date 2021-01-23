import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
export interface users {
  id?: string,
  Fname: string,
  Mname: string,
  Lname: string,
  Pemail: string,
  Eemail: string,
  phone : string,
  Hphone : string,
  DOB ,
  addressH: string,
  department : string,
  Rdepartment: string,
  role : string,
  sdate: string,
  Econtact: string,
  Otherinformation: string
}
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Ausers: Observable<users[]>;
  private usersCollection: AngularFirestoreCollection<users>;

  constructor(private afs: AngularFirestore) {

    this.usersCollection = this.afs.collection<users>('users');
    this.Ausers = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getCollection(value) {
    return this.afs.collection<users>('users', ref => 
        ref.where(
            'role', '==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
  }
  
  addnotice(use: users): Promise<DocumentReference> {
      return this.usersCollection.add(use);   
}

}