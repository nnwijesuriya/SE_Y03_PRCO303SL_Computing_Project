import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface mark {
    id?: string,
    userid: string,
    name: string,
    department: string,
    email: any,
    date: any,
    ddate: any,
    hoursw: any,
    minw: any,
    worktype: string,
    status: string
  }

@Injectable({
  providedIn: 'root'
})
export class MarkingService {

    private Rusers: Observable<mark[]>;
    private RusersCollection: AngularFirestoreCollection<mark>;

    private Ausers: Observable<mark[]>;
    private usersCollection: AngularFirestoreCollection<mark>;
  
    constructor(private afs: AngularFirestore) {
      this.usersCollection = this.afs.collection<mark>('attendance/employees/present employees');
      this.Ausers = this.usersCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );

      
      this.RusersCollection = this.afs.collection<mark>('attendance/employees/all records');
      this.Rusers = this.RusersCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
    }

markattendance(value: mark)
{
  return this.usersCollection.doc(value.userid).set(value);
}

markattendanced(value: mark)
{
  return this.usersCollection.doc(value.userid).update(value);
}

getusers()
{
  return this.Ausers;
}

getusersdepartureindividually(id)
{
  return this.usersCollection.doc<mark>(id).valueChanges().pipe(
    take(1),
    map(lform => {
      lform.userid = id;
      return lform;
    })
  );
}

addrecord(value: mark)
{
  return this.RusersCollection.add(value);
}

getrecord()
{
  return this.Rusers;
}
}