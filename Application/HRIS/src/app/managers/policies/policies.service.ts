import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface policies {
    id?: string,
    PName: string,
    Cdate: any,
    Pstart: string,
    purpose: string,
    Intro: string,
    Pstatements: string,
    Pdetails: string,
    Pstatus: string
  }
 
@Injectable({
  providedIn: 'root'
})
export class policiesService {

    private policies: Observable<policies[]>;
    private policiesCollection: AngularFirestoreCollection<policies>;

    constructor(private afs: AngularFirestore)
    {
        this.policiesCollection = this.afs.collection<policies>('policies');
        this.policies = this.policiesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    }

    addform(pol : policies): Promise<DocumentReference> { 
        return this.policiesCollection.add(pol);
      }
    
      getCollectionWithIDs(value) {
        return this.afs.collection<policies>('policies', ref => 
            ref.where(
                'Pstatus', '==', value
            )).snapshotChanges().pipe(
                map(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            })))
    }

    getform(id: string): Observable<policies> {
      return this.policiesCollection.doc<policies>(id).valueChanges().pipe(
        take(1),
        map(lform => {
          lform.id = id;
          return lform;
        })
      );
    }

updatepolicy(value: policies)
{
  return this.policiesCollection.doc(value.id).update(value);
}
    
    deletepolicy(id: string): Promise<void> {
      return this.policiesCollection.doc(id).delete();
    }
 }
