import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
export interface users {
  id?: string,
  userid: string,
  Fname: string,
  Mname: string,
  Lname: string,
  Pemail: string,
  Eemail: string,
  phone : string,
  Hphone : string,
  DOB : any,
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
  
  //this adds a document with a particular user id i want
  addnotice(use: users){
      return this.usersCollection.doc(use.userid).set(use);   
}

//to get the value with id
getform(id: string): Observable<users> {
  return this.usersCollection.doc<users>(id).valueChanges().pipe(
    take(1),
    map(lform => {
      lform.userid = id;
      return lform;
    })
  );
}

updateuser(value: users)
{
  return this.usersCollection.doc(value.userid).update(value);
}
}