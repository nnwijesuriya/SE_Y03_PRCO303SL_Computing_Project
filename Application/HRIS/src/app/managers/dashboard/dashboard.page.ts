import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { notice, noticesService } from '../tabs1/notices/notices.service';
import {NoticesPage} from '../tabs1/notices/notices.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  constructor(private route: Router, private noticeservice: noticesService) { }

  public notices:  Observable<notice[]>;

  typen = "";


  ngOnInit() {
  this.getnotice(this.typen);
  }

  getnotice(types)
  {
    this.notices = this.noticeservice.getnotices(types);
    this.route.navigateByUrl('dashboard')
    console.log(types)
  }
}
