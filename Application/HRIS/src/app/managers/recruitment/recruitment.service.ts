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

  private Approvedusers: Observable<recruitment[]>;
  private ApprovedusersCollection: AngularFirestoreCollection<recruitment>;

  private Jusers: Observable<jobs[]>;
  private JusersCollection: AngularFirestoreCollection<jobs>;

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

    this.ApprovedusersCollection = this.afs.collection<recruitment>('recruitment/employees/approved candidates');
    this.Approvedusers = this.ApprovedusersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.JusersCollection = this.afs.collection<jobs>('recruitment/employees/jobs available');
    this.Jusers = this.JusersCollection.snapshotChanges().pipe(
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

  getApprovedUsers()
  {
    return this.Approvedusers;
  } 

  getJobs()
  {
    return this.Jusers;
  } 

  addformA(form : recruitment){ 
    return this.AusersCollection.doc(form.email).set(form);
  }

  addformS(form : recruitment){ 
    return this.SusersCollection.doc(form.email).set(form);
  }

  addformD(form : recruitment){ 
    return this.DusersCollection.doc(form.email).set(form);
  }

  addformApproved(form : recruitment){ 
    return this.ApprovedusersCollection.doc(form.email).set(form);
  }

  addformJ(form : jobs){ 
    return this.JusersCollection.doc(form.position).set(form);
  }

  removeCandidate(id)
  {
    return this.AusersCollection.doc(id).delete();
  }

  removeCandidateDecline(id)
  {
    return this.DusersCollection.doc(id).delete();
  }

  removeCandidateShortListed(id)
  {
    return this.SusersCollection.doc(id).delete();
  }

  removeCandidateApproved(id)
  {
    return this.ApprovedusersCollection.doc(id).delete();
  }

  removejob(id)
  {
    return this.JusersCollection.doc(id).delete();
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

  getDateCollectionDeclined(value) {
    return this.afs.collection<recruitment>('recruitment/employees/declined candidates', ref => 
        ref.where(
            'addedDate','==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
  }

  getDateCollectionShortListed(value) {
    return this.afs.collection<recruitment>('recruitment/employees/shortListed candidates', ref => 
        ref.where(
            'addedDate','==', value
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
  }

  getDateCollectionApproved(value) {
    return this.afs.collection<recruitment>('recruitment/employees/approved candidates', ref => 
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

  getformDecline(email: string){
    return this.DusersCollection.doc<recruitment>(email).valueChanges().pipe(
      take(1),
      map(lform => {
        lform.email = email;
        return lform;
      })
    );
  }

  getformShortListed(email: string){
    return this.SusersCollection.doc<recruitment>(email).valueChanges().pipe(
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