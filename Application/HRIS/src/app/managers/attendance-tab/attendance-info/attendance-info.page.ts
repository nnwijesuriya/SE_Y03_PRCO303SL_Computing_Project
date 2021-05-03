import { HttpClient } from '@angular/common/http';
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
    date: '',
    ddate: '',
    hoursw: '',
    totalhours: '',
    minw: '',
    worktype: '',
    status: ''
  }

  form : employee = {
    userid: '',
    date: '',
    qrcode: ''
  }
  qrdata= "managers";
  elementType = 'canvas';
  temp;

  constructor(private barcodescanner: BarcodeScanner, private httpclient: HttpClient, private modal: ModalController, private attendance: AttendanceService, private userservice: UserService, private mark: MarkingService) { }

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

  // to get all the attendance information
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

removedata()
{
  let path = "attendance/employees/present employees";
  const data = {path: path, message : "working"}
  this.httpclient.post<{message: string}>('http://localhost:3000/tab/attendance-info', data).subscribe((responsestatus) => {
    let response = responsestatus.message; 
    console.log(response);
  });   
}

download()
{
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  const imageData = canvas.toDataURL('image/jpeg').toString();

  let blobData = this.convertBase64ToBlob(imageData);
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blobData, 'Qrcode');
  } else {
    const blob = new Blob([blobData], { type: "image/png" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Qrcode';
    link.click();
  }
}
 convertBase64ToBlob(Base64Image: any) {
  const parts = Base64Image.split(',');
  let link = parts[1]
  const imageType = parts[0].split(':')[1];
  const decodedData = window.atob(parts[1]);
  const uInt8Array = new Uint8Array(decodedData.length);
  for (let i = 0; i < decodedData.length; ++i) {
    uInt8Array[i] = decodedData.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: imageType });
}
}
