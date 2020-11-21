import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { GroupChatService, Message} from './groupchat.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chatgroup',
  templateUrl: './chatgroup.page.html',
  styleUrls: ['./chatgroup.page.scss'],
})
export class ChatgroupPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  constructor(private chat: GroupChatService, private auth: AngularFireAuth) { }

  public messages:  Observable<Message[]>;
  
  id;
  email;
  newMsg = '';
  date;

  pipe = new DatePipe('en-US'); 
  ngOnInit() {
    this.auth.authState.subscribe(data=> {
      if(data.uid && data.email)
        {
          this.id = data.uid;
          this.email = data.email
        }
  })

  const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.date= myFormattedDate;

    this.getmessage();
  }

  sendMessage() {
    this.chat.addChatMessage(this.newMsg, this.email, this.date).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
      console.log(this.email)
    });
  }

  getmessage()
  {
    this.messages = this.chat.getChatMessages();
  }
}
