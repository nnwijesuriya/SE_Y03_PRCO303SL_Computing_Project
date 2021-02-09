import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from '../../add-person/users.service';
import { AttendanceService, employee } from '../attendance.service';
import { mark, MarkingService } from '../mark-attendance/verify-form/marking.service';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';

@Component({
  selector: 'app-attendance-info',
  templateUrl: './attendance-info.page.html',
  styleUrls: ['./attendance-info.page.scss'],
})
export class AttendanceInfoPage implements OnInit {

  public user:  Observable<employee[]>;

  public users:  Observable<mark[]>;

  profile: mark = {
    userid: '',
    name: '',
    department: '',
    email: '',
    date: ''
  }

  form : employee = {
    userid: '',
    date: '',
    qrcode: ''
  }
  qrdata= "managers";
  elementType = 'url';
  temp;

  constructor(private barcodescanner: BarcodeScanner, private modal: ModalController, private attendance: AttendanceService, private userservice: UserService, private mark: MarkingService) { }

  ngOnInit() {
    this.getprofile();
  }

  getcode(id)
  {
    this.attendance.getform(id).subscribe(data => {
      this.form = data;
      console.log(this.form.qrcode);
    });
  }

  getprofile()
  {
   this.users = this.mark.getusers();
  }

  async codemodal()
  {
    const modal = await this.modal.create({
      component: CodeGeneratorComponent
    });
   await modal.present();

   modal.onDidDismiss()
   .then((data) => {
     const user = data['data']; 
     this.temp = user;
     this.getcode(this.temp);
     this.qrdata = this.temp;
 });
}
}
