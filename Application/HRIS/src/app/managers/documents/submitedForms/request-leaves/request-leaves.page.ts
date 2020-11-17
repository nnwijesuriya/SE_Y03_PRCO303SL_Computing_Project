import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { leaveForm, LeaveService } from '../../forms/leave-request/leave.service';

@Component({
  selector: 'app-request-leaves',
  templateUrl: './request-leaves.page.html',
  styleUrls: ['./request-leaves.page.scss'],
})
export class RequestLeavesPage implements OnInit {

  leave : leaveForm = {
    userId: '',
    formtype: '',
    Fname: '',
    Lname: '',
    Eemail: '',
    phone: '',
    position: '',
    Ldate: '',
    Edate: '',
    Ltype: '',
    comments: '',
    sdate: ''
  }

  constructor(private leaveservice: LeaveService, private activatedroute : ActivatedRoute, private nav: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.leaveservice.getform(id).subscribe(leave => {
        this.leave = leave;   
      });
    }
  }

  close(){
   this.leave.userId = '',
   this.leave.formtype = '',
   this.leave.Fname = '',
   this.leave.Lname = '',
   this.leave.Eemail = '',
   this.leave.phone = '',
   this.leave.position = '',
   this.leave.Ldate = '',
   this.leave.Edate = '',
   this.leave.Ltype = '',
   this.leave.comments = '',
   this.leave.sdate = ''
   this.nav.navigateRoot('documents');
  }
}

