import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
export interface notice {
  id?: string,
  heading: string,
  description: string;
  priority: string;
  date: any;
}
 
@Injectable({
  providedIn: 'root'
})
export class noticesService {

  private noticesU: Observable<notice[]>;
  private noticeCollectionU: AngularFirestoreCollection<notice>;

  private noticesH: Observable<notice[]>;
  private noticeCollectionH: AngularFirestoreCollection<notice>;

  private noticesN: Observable<notice[]>;
  private noticeCollectionN: AngularFirestoreCollection<notice>;

  constructor(private afs: AngularFirestore) {

    this.noticeCollectionU = this.afs.collection<notice>('notices/priority/high priority');
    this.noticesU = this.noticeCollectionU.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.noticeCollectionH = this.afs.collection<notice>('notices/priority/important');
    this.noticesH = this.noticeCollectionH.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.noticeCollectionN = this.afs.collection<notice>('notices/priority/formal notice');
    this.noticesN = this.noticeCollectionN.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  addnotice(notices: notice, prio: string): Promise<DocumentReference> {
    if(prio=="Urgent Notice"){
      return this.noticeCollectionU.add(notices);
    } else if(prio=="Important Notice"){
      return this.noticeCollectionH.add(notices);
    }else
    {
      return this.noticeCollectionN.add(notices);
    }
  }

  getnotices(type: string): Observable<notice[]> {
    if(type=="Urgent Notice"){
      return this.noticesU;
    } else if(type=="Important Notice"){
      return this.noticesH;
    }else
    {
      return this.noticesN;
    }
  }
}