import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
 
export interface diciplinaryForm {
  id?: string,
  userId: any;
  formtype: string;
  Fname: string,
  Lname: string;
  Eemail: string;
  Department: string;
  position: string;
  MFname: string;
  MLname: string;
  Idetails: string;
  infraction: string;
  Idate: any;
  Ainfration: string;
  saction: string;
  comments: string;
  sdate: any;
}
 
@Injectable({
  providedIn: 'root'
})
export class disService {

  private leave: Observable<diciplinaryForm[]>;
  private leaveCollection: AngularFirestoreCollection<diciplinaryForm>;

  constructor(private afs : AngularFirestore){
    this.leaveCollection = this.afs.collection<diciplinaryForm>('documents/managers/forms');
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

  addform(dis : diciplinaryForm): Promise<DocumentReference> { 
      return this.leaveCollection.add(dis);
    }

//to get the form data with each id
  getform(id: string): Observable<diciplinaryForm> {
      return this.leaveCollection.doc<diciplinaryForm>(id).valueChanges().pipe(
        take(1),
        map(lform => {
          lform.id = id;
          return lform
        })
      );
    }
 
}