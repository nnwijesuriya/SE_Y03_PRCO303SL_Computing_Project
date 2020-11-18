import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
 
export interface medicalForm {
  id?: string,
  userId: any;
  formtype: string;
  EFname: string,
  ELname: string;
  Eemail: string;
  department: string;
  address: string;
  HCName: string;
  HCNumber: any;
  recovery: any;
  limits: string;
  status: string;
  sdate: any;
}
 
@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  private leave: Observable<medicalForm[]>;
  private leaveCollection: AngularFirestoreCollection<medicalForm>;

  constructor(private afs : AngularFirestore){
    this.leaveCollection = this.afs.collection<medicalForm>('documents/managers/forms');
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

  addform(review : medicalForm): Promise<DocumentReference> { 
      return this.leaveCollection.add(review);
    }

//to get the form data with each id
  getform(id: string): Observable<medicalForm> {
      return this.leaveCollection.doc<medicalForm>(id).valueChanges().pipe(
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
  
  updateIdea(doc: medicalForm): Promise<void> {
    return this.leaveCollection.doc(doc.id).update({ status: doc.status});
  }

}