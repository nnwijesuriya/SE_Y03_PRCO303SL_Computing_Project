import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
 
export interface reviewForm {
  id?: string,
  userId: any;
  formtype: string;
  EFname: string,
  ELname: string;
  Eemail: string;
  MFname: string,
  MLname: string;
  department: string;
  position: string;
  job: string;
  quality: string;
  attendanceP: string;
  productivity: string;
  communicationL: string;
  dependability: string;
  Orating: string;
  comments: string;
  status: string;
  sdate: any;
}
 
@Injectable({
  providedIn: 'root'
})
export class employeeReviewService {

  private leave: Observable<reviewForm[]>;
  private leaveCollection: AngularFirestoreCollection<reviewForm>;

  constructor(private afs : AngularFirestore){
    this.leaveCollection = this.afs.collection<reviewForm>('documents/managers/forms');
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

  addform(review : reviewForm): Promise<DocumentReference> { 
      return this.leaveCollection.add(review);
    }

//to get the form data with each id
  getform(id: string): Observable<reviewForm> {
      return this.leaveCollection.doc<reviewForm>(id).valueChanges().pipe(
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
  
  updateIdea(doc: reviewForm): Promise<void> {
    return this.leaveCollection.doc(doc.id).update({ status: doc.status});
  }
}