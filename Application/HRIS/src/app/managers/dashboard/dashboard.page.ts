import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { notice, noticesService } from '../tabs1/notices/notices.service';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(private route: Router, private activatedRoute: ActivatedRoute,
     private noticeservice: noticesService, private menuctrl: MenuController,private navctrl: NavController, private modals: ModalController, private auth: AngularFireAuth) { }

  public notices:  Observable<notice[]>;

  typen = "";
  id;

  ngOnInit() {
  this.auth.authState.subscribe(data=> {
    if(data.uid && data.email)
      {
        this.id = data.uid;
        console.log(this.id)
      } else
      {
         this.navctrl.navigateRoot('login');
      }
})
  this.getnotice(this.typen);
}

  getnotice(types)
  {
    this.notices = this.noticeservice.getnotice(types);
    this.navctrl.navigateRoot('dashboard');
  }
}
