import { Injectable } from '@angular/core';
import { map, switchMap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';



export interface Message {  
    id?: string;
    from: string;
    msg: string;
    createdAt: any;
    department : string;
  }
 
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private Muser: Observable<Message[]>;
  private MuserCollection: AngularFirestoreCollection<Message>;

  private Puser: Observable<Message[]>;
  private PuserCollection: AngularFirestoreCollection<Message>;

  private Ruser: Observable<Message[]>;
  private RuserCollection: AngularFirestoreCollection<Message>;

  private Auser: Observable<Message[]>;
  private AuserCollection: AngularFirestoreCollection<Message>;

  private Cuser: Observable<Message[]>;
  private CuserCollection: AngularFirestoreCollection<Message>;

  private Huser: Observable<Message[]>;
  private HuserCollection: AngularFirestoreCollection<Message>;

  private MAuser: Observable<Message[]>;
  private MAuserCollection: AngularFirestoreCollection<Message>;


  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.MuserCollection = this.afs.collection<Message>('chat/messages/marketing');
    this.Muser = this.MuserCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.PuserCollection = this.afs.collection<Message>('chat/messages/production');
    this.Puser = this.PuserCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.RuserCollection = this.afs.collection<Message>('chat/messages/research');
    this.Ruser = this.RuserCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.AuserCollection = this.afs.collection<Message>('chat/messages/accounting');
    this.Auser = this.AuserCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.CuserCollection = this.afs.collection<Message>('chat/messages/purchasing');
    this.Cuser = this.CuserCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.MAuserCollection = this.afs.collection<Message>('chat/messages/managers');
    this.MAuser = this.MAuserCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    this.HuserCollection = this.afs.collection<Message>('chat/messages/HRmanagers');
    this.Huser = this.HuserCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }


  addChatMessage(msg,email, time, department) {
    if(department == 'Marketing')
    {
        return this.afs.collection('chat/messages/marketing').add({
            msg: msg,
            from: email,
            createdAt: time
          });
    } else if(department == "Production")
    {
        return this.afs.collection('chat/messages/production').add({
            msg: msg,
            from: email,
            createdAt: time
          });
    }else if(department== "Research")
    {
        return this.afs.collection('chat/messages/research').add({
            msg: msg,
            from: email,
            createdAt: time
          });
    } else if(department == "Accounting")
    {
        return this.afs.collection('chat/messages/accounting').add({
            msg: msg,
            from: email,
            createdAt: time
          });
    }else if(department== "Purchasing")
    {
        return this.afs.collection('chat/messages/purchasing').add({
            msg: msg,
            from: email,
            createdAt: time
          });
    } else if(department == "Managers")
    {
        return this.afs.collection('chat/messages/managers').add({
            msg: msg,
            from: email,
            createdAt: time
          });
    }
    else if(department == "HR Managers")
    {
        return this.afs.collection('chat/messages/HRmanagers').add({
            msg: msg,
            from: email,
            createdAt: time
          });
    }
  
  }

  getChatMessages(department): Observable<Message[]> {
    if(department == 'Marketing')
    {
        return this.afs.collection<Message>('chat/messages/marketing', ref => 
        ref.orderBy(
            'createdAt', 'asc'
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
    }else if(department == "Production")
    {
        return this.afs.collection<Message>('chat/messages/production', ref => 
        ref.orderBy(
            'createdAt', 'asc'
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
    }else if(department== "Research")
    {
        return this.afs.collection<Message>('chat/messages/research', ref => 
        ref.orderBy(
            'createdAt', 'asc'
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
    } else if(department == "Accounting")
    {
        return this.afs.collection<Message>('chat/messages/accounting', ref => 
        ref.orderBy(
            'createdAt', 'asc'
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
    }else if(department== "Purchasing")
    {
        return this.afs.collection<Message>('chat/messages/purchasing', ref => 
        ref.orderBy(
            'createdAt', 'asc'
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        }))) 
    } else if(department == "Managers")
    {
        return this.afs.collection<Message>('chat/messages/managers', ref => 
        ref.orderBy(
            'createdAt', 'asc'
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
    }
    else if(department == "HR Managers")
    {
        return this.afs.collection<Message>('chat/messages/HRmanagers', ref => 
        ref.orderBy(
            'createdAt', 'asc'
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
    }
  }
}