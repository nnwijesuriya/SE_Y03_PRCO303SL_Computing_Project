import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
 
export interface leaveForm {
  id?: string,
  userId: any;
  formtype: string;
  Fname: string,
  Lname: string;
  Eemail: string;
  phone: string;
  position: string;
  Ldate: any;
  Edate: any;
  Ltype: string;
  comments: string;
  sdate:any;
}
 
@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private leave: Observable<leaveForm[]>;
  private leaveCollection: AngularFirestoreCollection<leaveForm>;

  constructor(private afs : AngularFirestore){
    this.leaveCollection = this.afs.collection<leaveForm>('documents/managers/forms');
    this.leave = this.leaveCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  addform(leav : leaveForm): Promise<DocumentReference> { 
      return this.leaveCollection.add(leav);
    }
 
}