import { Injectable } from '@angular/core';
import { map, switchMap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { users } from '../add-person/users.service';


export interface Message {  
    id?: string;
    from: string;
    msg: string;
    createdAt: any;
  }
 
@Injectable({
  providedIn: 'root'
})
export class GroupChatService {

  private user: Observable<Message[]>;
  private userCollection: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.userCollection = this.afs.collection<Message>('messages');
    this.user = this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }


  addChatMessage(msg,email, time) {
    return this.afs.collection('messages').add({
      msg: msg,
      from: email,
      createdAt: time
    });
  }

  getChatMessages(): Observable<Message[]> {
    return this.afs.collection<Message>('messages', ref => 
        ref.orderBy(
            'createdAt', 'asc'
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
        })))
    return this.user;
  }
}