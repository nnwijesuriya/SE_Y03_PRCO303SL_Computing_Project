import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
 
export interface user {
  id?: string,
  Fname: string,
  Mname: string,
  Lname: string,
  rating: any,
  userId: any,
  Eemail: string,
  sdate: any,
  department: string,
  role: string,
  bank: string,
  accountNo : string,
  hoursw: string,
  salary: any,
  bonus: any,
  paymentDate: string,
  status: string,
  approvedDate: string,
  picture: any,
}
 
@Injectable({
  providedIn: 'root'
})
export class SalariesService {

  private approved: Observable<user[]>;
  private approvedCollection: AngularFirestoreCollection<user>;

  private notapproved: Observable<user[]>;
  private notapprovedCollection: AngularFirestoreCollection<user>;

  constructor(private afs : AngularFirestore){
    this.approvedCollection = this.afs.collection<user>('salaries/approved/users');
    this.approved = this.approvedCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.notapprovedCollection = this.afs.collection<user>('salaries/not approved/users');
    this.notapproved = this.notapprovedCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getApprovedUsers()
  {
    return this.approved;
  }

  getNotApprovedUser()
  {
    return this.notapproved;
  }

  addapproveduser(user: user)
  {
    let value: string = user.userId;
    return this.approvedCollection.doc(value).set(user); 
  }

  addNotApprovedUser(user: user)
  {
    let value: string = user.userId;
    return this.notapprovedCollection.doc(value).set(user); 
  }

  removeNotApprovedUser(id : string)
  {
    return this.notapprovedCollection.doc(id).delete();
  }

  removeApprovedUser(id : string)
  {
    return this.approvedCollection.doc(id).delete();
  }

  updateValueApprovedUser(value :user)
  {
    return this.approvedCollection.doc(value.userId).update({
        "hoursw" : value.hoursw
      });
  }

  updatereview(value,id)
{
  return this.approvedCollection.doc(id).update({
    "rating" : value
  });
}

  updateApprovedUser(user:user)
  {
    return this.approvedCollection.doc(user.userId).update(user);
  }

  getUser(id: string): Observable<user> {
    return this.notapprovedCollection.doc<user>(id).valueChanges().pipe(
      take(1),
      map(lform => {
        lform.userId = id;
        return lform;
      })
    );
  }

  getApprovedUser(id: string): Observable<user> {
    return this.approvedCollection.doc<user>(id).valueChanges().pipe(
      take(1),
      map(lform => {
        lform.userId = id;
        return lform;
      })
    );
  }

  getDepartmentCollection(value) {
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

  //doesnt work have to figure out
  getDateCollection(value) {
    return this.afs.collection<user>('salaries/approved/users', ref => 
        ref.where(
            'approvedDate','==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
  }
}