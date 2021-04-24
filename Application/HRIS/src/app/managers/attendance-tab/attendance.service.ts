import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface employee {
    id?: string,
    userid: string,
    date: any,
    qrcode: any
  }

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

    private Ausers: Observable<employee[]>;
    private usersCollection: AngularFirestoreCollection<employee>;
  
    constructor(private afs: AngularFirestore) {
  
      this.usersCollection = this.afs.collection<employee>('attendance/code/QRCode');
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

    getcode()
    {
      return this.Ausers;
    }

    getform(id: string): Observable<employee>{
      return this.usersCollection.doc<employee>(id).valueChanges().pipe(
        take(1),
        map(lform => {
          return lform;
        })
      );
    }

    getCodeDateOrder(value) {
      return this.afs.collection<employee>('attendance/code/QRCode', ref => 
          ref.orderBy('date').limit(1)).snapshotChanges().pipe(
              map(actions => actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
          })))
    }

    addcode(code : employee){ 
        return this.usersCollection.doc(code.qrcode).set(code);
    }

    deletecode(id: string): Promise<void> {
      return this.usersCollection.doc(id).delete();
    }

}
