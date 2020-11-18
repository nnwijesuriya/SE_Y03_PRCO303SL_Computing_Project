import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
 
export interface accidentForm {
  id?: string,
  userId: any;
  formtype: string;
  EFname: string,
  ELname: string;
  Eemail: string;
  MFname: string,
  MLname: string;
  department: string;
  Idate: any;
  Wemail: string;
  Eexplain: string;
  location: string;
  Idetails: string;
  status: string;
  sdate: any;
}
 
@Injectable({
  providedIn: 'root'
})
export class AccidentService {

  private leave: Observable<accidentForm[]>;
  private leaveCollection: AngularFirestoreCollection<accidentForm>;

  constructor(private afs : AngularFirestore){
    this.leaveCollection = this.afs.collection<accidentForm>('documents/managers/forms');
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

  addform(accid : accidentForm): Promise<DocumentReference> { 
      return this.leaveCollection.add(accid);
    }

//to get the form data with each id
  getform(id: string): Observable<accidentForm> {
      return this.leaveCollection.doc<accidentForm>(id).valueChanges().pipe(
        take(1),
        map(lform => {
          lform.id = id;
          return lform
        })
      );
    }

    deleteIdea(id: string): Promise<void> {
      return this.leaveCollection.doc(id).delete();
  }
  
  updateIdea(doc: accidentForm): Promise<void> {
    return this.leaveCollection.doc(doc.id).update({ status: doc.status});
  }
}