import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
 
export interface ptoForm {
//////
  id?: string,
  userId: any;
  formtype: string;
  Fname: string,
  Lname: string;
  email: string;
  phone: any;
  Sname: string,
  department: string,
  PTstart: any,
  PTend: any,
  comments: any,
  sdate: any;
}
 
@Injectable({
  providedIn: 'root'
})
export class PTOService {

  private leave: Observable<ptoForm[]>;
  private leaveCollection: AngularFirestoreCollection<ptoForm>;

  constructor(private afs : AngularFirestore){
    this.leaveCollection = this.afs.collection<ptoForm>('documents/managers/forms');
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

  addform(pt : ptoForm): Promise<DocumentReference> { 
      return this.leaveCollection.add(pt);
    }

//to get the form data with each id
  getform(id: string): Observable<ptoForm> {
      return this.leaveCollection.doc<ptoForm>(id).valueChanges().pipe(
        take(1),
        map(lform => {
          lform.id = id;
          return lform
        })
      );
    }
}