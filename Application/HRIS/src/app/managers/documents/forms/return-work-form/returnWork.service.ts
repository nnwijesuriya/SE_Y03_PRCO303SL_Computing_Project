import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
 
export interface returnWorkForm {
  id?: string,
  userId: any;
  formtype: string;
  Fname: string,
  Lname: string;
  Eemail: string;
  phone: any;
  department: string;
  Iabsence: string
  Esituation: string
  position: string;
  status: string;
  sdate: any;
}
 
@Injectable({
  providedIn: 'root'
})
export class returnWorkService {

  private leave: Observable<returnWorkForm[]>;
  private leaveCollection: AngularFirestoreCollection<returnWorkForm>;

  private leaveE: Observable<returnWorkForm[]>;
  private leaveCollectionE: AngularFirestoreCollection<returnWorkForm>;

  constructor(private afs : AngularFirestore){
    this.leaveCollection = this.afs.collection<returnWorkForm>('documents/managers/forms');
    this.leave = this.leaveCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.leaveCollectionE = this.afs.collection<returnWorkForm>('documents/employees/forms');
    this.leaveE = this.leaveCollectionE.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  addform(work : returnWorkForm): Promise<DocumentReference> { 
      return this.leaveCollection.add(work);
    }

  addformEmployee(work : returnWorkForm): Promise<DocumentReference> { 
    return this.leaveCollectionE.add(work);
  }

//to get the form data with each id
  getform(id: string): Observable<returnWorkForm> {
      return this.leaveCollection.doc<returnWorkForm>(id).valueChanges().pipe(
        take(1),
        map(lform => {
          lform.id = id;
          return lform
        })
      );
    }

    getformEmployee(id: string): Observable<returnWorkForm> {
      return this.leaveCollectionE.doc<returnWorkForm>(id).valueChanges().pipe(
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

  deleteIdeaEmployee(id: string): Promise<void> {
    return this.leaveCollectionE.doc(id).delete();
}
  
  updateIdea(doc: returnWorkForm): Promise<void> {
    return this.leaveCollection.doc(doc.id).update({ status: doc.status});
  }

}