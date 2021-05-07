import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
 
 
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
  status: string;
  sdate: any;
}
 
@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private leave: Observable<leaveForm[]>;
  private leaveCollection: AngularFirestoreCollection<leaveForm>;

  private leaveE: Observable<leaveForm[]>;
  private leaveCollectionE: AngularFirestoreCollection<leaveForm>;

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

    this.leaveCollectionE = this.afs.collection<leaveForm>('documents/employees/forms');
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

  addform(leav : leaveForm): Promise<DocumentReference> { 
      return this.leaveCollection.add(leav);
    }

  addformEmployee(leav : leaveForm): Promise<DocumentReference> { 
    return this.leaveCollectionE.add(leav);
  }

//to get the form data with each id
  getform(id: string): Observable<leaveForm> {
      return this.leaveCollection.doc<leaveForm>(id).valueChanges().pipe(
        take(1),
        map(lform => {
          lform.id = id;
          return lform
        })
      );
    }

    getformEmployee(id: string): Observable<leaveForm> {
      return this.leaveCollectionE.doc<leaveForm>(id).valueChanges().pipe(
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

updateIdea(leave: leaveForm): Promise<void> {
  return this.leaveCollection.doc(leave.id).update({ status: leave.status});
}
}