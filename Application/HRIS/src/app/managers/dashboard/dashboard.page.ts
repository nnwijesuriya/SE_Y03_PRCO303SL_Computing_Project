import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { notice, noticesService } from '../tabs1/notices/notices.service';
import {NoticesPage} from '../tabs1/notices/notices.page';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  constructor(private route: Router, private activatedRoute: ActivatedRoute, private noticeservice: noticesService, private menuctrl: MenuController, private modals: ModalController) { }

  public notices:  Observable<notice[]>;

  typen = "";
 
  ngOnInit() {
  this.getnotice(this.typen);
  }

  getnotice(types)
  {
    this.notices = this.noticeservice.getnotice(types);
    this.route.navigateByUrl('dashboard')
    console.log(types)
  }
}
