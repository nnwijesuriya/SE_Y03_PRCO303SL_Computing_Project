import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { notice, noticesService } from '../tabs1/notices/notices.service';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AvailabilityService, notes } from './availability.service';
import {NotepadComponent} from '../dashboard/notepad/notepad.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(private route: Router, private activatedRoute: ActivatedRoute,
     private noticeservice: noticesService, private menuctrl: MenuController,private navctrl: NavController,
      private modal: ModalController, private auth: AngularFireAuth, private avalability: AvailabilityService ) 
      {

      } 
      public notices:  Observable<notice[]>;

      public notes:  Observable<notes[]>;

      public Cnotes:  Observable<notes[]>;
     

      typen = "";
       id;
       visability = false;

       task : notes = {
        title: '',
        description: ''
       }
      
  
  ngOnInit() {
  this.auth.authState.subscribe(data=> {
    if(data.uid && data.email)
      {
        this.id = data.uid;
        this.avalability.presense(this.id)
      } else
      {
         this.navctrl.navigateRoot('login');
      }
})
  this.getnotice(this.typen);
  this.shownotes();
  this.completednotes();
}
  getnotice(types)
  {
    this.notices = this.noticeservice.getnotice(types);
    this.navctrl.navigateRoot('managers/dashboard');
  }

  async addnotes()
  {
    const modals = await this.modal.create({
      component: NotepadComponent
    });
    await modals.present();
  }

  shownotes()
  {
    this.notes = this.avalability.shownotes();
    if(this.notes != null)
    {
      this.visability = false;
    }else
    {
      this.visability =true;
    }
  }

  completednotes()
  {
    this.Cnotes = this.avalability.addcompletednotes();
   if(this.Cnotes == null)
    {
      this.visability = false;
    }else
    {
      this.visability = true;
    }
  }

  backtodo(id : string, Ctitle : string, Cdescription : string)
  {
   this.avalability.deletenoteWithIDsComp(id);
   this.task.title = Ctitle;
   this.task.description = Cdescription;
   this.avalability.addnotes(this.task);
  }

  noteCompleted(id : string, title: string, description: string)
  {
   this.avalability.deletenoteWithIDs(id);
   this.task.title = title;
   this.task.description = description;
   this.avalability.addnotesC(this.task);
  }

  removenotes(id: string)
  {
   this.avalability.deletenoteWithIDsComp(id);
  }
}
