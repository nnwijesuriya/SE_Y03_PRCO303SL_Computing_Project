import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { IonContent } from '@ionic/angular';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ChatService, Message } from '../chat.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.page.html',
  styleUrls: ['./managers.page.scss'],
})
export class ManagersPage implements OnInit {

  
  constructor(private chat: ChatService, private auth: AngularFireAuth) { }
  @ViewChild(IonContent) content: IonContent;

  public messages :  Observable<Message[]>;
  
  id;
  email;
  newMsg = '';
  date;
  department = "Managers";

  ngOnInit() {
    this.auth.authState.subscribe(data=> {
      if(data.uid && data.email)
        {
          this.id = data.uid;
          this.email = data.email
        }
  })
    
    this.date = firebase.default.firestore.FieldValue.serverTimestamp()
    this.getmessage();
  }

  sendMessage() {
    this.chat.addChatMessage(this.newMsg, this.email, this.date, this.department).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
      console.log(this.email)
    });
  }

  getmessage()
  {
    this.messages = this.chat.getChatMessages(this.department);
  }
}