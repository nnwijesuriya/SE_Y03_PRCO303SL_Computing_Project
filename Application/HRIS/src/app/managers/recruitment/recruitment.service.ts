import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

 
@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {

  private Ausers: Observable<recruitment[]>;
  private AusersCollection: AngularFirestoreCollection<recruitment>;

  private Susers: Observable<recruitment[]>;
  private SusersCollection: AngularFirestoreCollection<recruitment>;

  private Dusers: Observable<recruitment[]>;
  private DusersCollection: AngularFirestoreCollection<recruitment>;

  constructor(private afs: AngularFirestore, private httpclient: HttpClient) {

    this.AusersCollection = this.afs.collection<recruitment>('recruitment/employees/all candidates');
    this.Ausers = this.AusersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.SusersCollection = this.afs.collection<recruitment>('recruitment/employees/shortListed candidates');
    this.Susers = this.SusersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.DusersCollection = this.afs.collection<recruitment>('recruitment/employees/declined candidates');
    this.Dusers = this.DusersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getAllUsers()
  {
    return this.Ausers;
  }

  getShortListedUsers()
  {
    return this.Susers;
  }

  getDeclinedUsers()
  {
    return this.Dusers;
  } 

  addformA(form : recruitment){ 
    return this.AusersCollection.doc(form.email).set(form);
  }

  removeCandidate(id)
  {
    return this.AusersCollection.doc(id).delete();
  }

  getDateCollection(value) {
    return this.afs.collection<recruitment>('recruitment/employees/all candidates', ref => 
        ref.where(
            'addedDate','==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
  }

  getform(email: string){
    return this.AusersCollection.doc<recruitment>(email).valueChanges().pipe(
      take(1),
      map(lform => {
        lform.email = email;
        return lform;
      })
    );
  }

updateuser(value: recruitment)
{
  return this.AusersCollection.doc(value.email).update(value);
}
}