import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AttendanceService, employee } from '../../attendance.service';

@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.scss'],
})
export class CodeGeneratorComponent implements OnInit {

  code : employee = {
    userid: '',
    date: '',
    qrcode: ''
  }

  public user : Observable<employee[]>;

  constructor(private modal: ModalController, private attendance: AttendanceService, private auth: AngularFireAuth) { }

  valueid;

  pipe = new DatePipe('en-US'); 
  ngOnInit() {
    this.auth.authState.subscribe(data=> {
      this.code.userid = data.uid;
   })


   const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.code.date= myFormattedDate;

    this.getcode();
  }

  closemodal()
  {
    this.modal.dismiss(this.valueid);
  }

  addcode()
  {
    this.valueid = this.code.qrcode;
    this.attendance.addcode(this.code);
    this.closemodal();
  }

  getcode()
  {
   this.user = this.attendance.getcode();
  }

  deletecode(id)
  {
   this.attendance.deletecode(id);
  }
}
