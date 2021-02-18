import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import jsQR from 'jsqr';
import { Observable } from 'rxjs';
import { AttendanceService, employee } from '../attendance.service';
import { VerifyFormComponent } from './verify-form/verify-form.component';
import { DatePipe } from '@angular/common';
import { VerifyFormDepartureComponent } from './verify-form-departure/verify-form-departure.component';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.page.html',
  styleUrls: ['./mark-attendance.page.scss'],
})
export class MarkAttendancePage implements OnInit {

  public user : Observable<employee[]>;

  form: employee = {
    userid: '',
    date: '',
    qrcode: ''
  }

  scanActive  = false;
  scanresult = null;

  scanActived  = false;
  scanresultd = null;

  @ViewChild('video', {static: false}) video: ElementRef;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;

  @ViewChild('videod', {static: false}) videod: ElementRef;
  @ViewChild('canvasd', {static: false}) canvasd: ElementRef;

  videoElement: any;
  canvasElement: any;
  canvasContext: any;

  videoElementd: any;
  canvasElementd: any;
  canvasContextd: any;
  date;
  now

  load: HTMLIonLoadingElement =  null;

  loadd: HTMLIonLoadingElement =  null;

  pipe = new DatePipe('en-US'); 
  constructor(private toast: ToastController, private loading: LoadingController, private modal: ModalController, private attendance: AttendanceService ) 
  {
    //this is used to get the current time
    setInterval(() => {
      const time = Date.now()
      this.now = this.pipe.transform(time, 'mediumTime');
    }, 1);
  }

  ngOnInit() {
    //this gets the todays date
    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'fullDate');
    this.date= myFormattedDate;
  }

  ngAfterViewInit()
  {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');

    this.videoElementd = this.videod.nativeElement;
    this.canvasElementd = this.canvasd.nativeElement;
    this.canvasContextd = this.canvasElementd.getContext('2d');
  } 

  // this code is for the arrival scan
  async scancode()
  {
   const stream = await navigator.mediaDevices.getUserMedia({
     video: {facingMode: 'environment' }
   });
   this.videoElement.srcObject = stream;
   this.videoElement.setAttribute('playsinline', true);
   this.videoElement.play();

   this.load = await this.loading.create({});
   await this.load.present();

   requestAnimationFrame(this.scan.bind(this));
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.load) {
        await this.load.dismiss();
        this.load = null;
        this.scanActive = true;
      }
   
      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;
   
      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
   
      if (code) {
        this.scanActive = false;
        this.scanresult = code.data;
        this.success();
        console.log(this.scanresult);
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }
 
  async success()
  {
  const toast = await this.toast.create({
    message: 'Please Mark Your Attendance',
    position: 'middle',
    buttons: [
      {
        text: 'Mark Attendance',
        handler: () => {
          // check here to add code 
          this.qrcodescan();
        }
      }  
    ]
  })
  toast.present();
  }

  qrcodescan()
  {
    this.attendance.getform(this.scanresult).subscribe(data => {
      this.form = data
      if(this.form == undefined)
      {
        window.alert("Your QR Code is incorrect please try again with the correct QR Code");
      }
      if(this.scanresult == this.form.qrcode)
      {
       this.verifymodal();
      }
      else 
      {
        window.alert("Your QR Code is incorrect please try again with the correct QR Code"); 
      }
    })
  }
 
  async verifymodal()
  {
    const modal = await this.modal.create({
      component: VerifyFormComponent
    });
   await modal.present();
  }

  reset()
  {
  this.scanresult = null;
  }

  stopScan(){
    this.scanActive =false;
  }



  // this code is for the departuer scan
  async scandepature()
  {
   const stream = await navigator.mediaDevices.getUserMedia({
     video: {facingMode: 'environment' }
   });
   this.videoElementd.srcObject = stream;
   this.videoElementd.setAttribute('playsinline', true);
   this.videoElementd.play();

   this.loadd = await this.loading.create({});
   await this.loadd.present();

   requestAnimationFrame(this.scand.bind(this));
  }

  async scand() {
    if (this.videoElementd.readyState === this.videoElementd.HAVE_ENOUGH_DATA) {
      if (this.loadd) {
        await this.loadd.dismiss();
        this.loadd = null;
        this.scanActived = true;
      }
   
      this.canvasElementd.height = this.videoElementd.videoHeight;
      this.canvasElementd.width = this.videoElementd.videoWidth;
   
      this.canvasContextd.drawImage(
        this.videoElementd,
        0,
        0,
        this.canvasElementd.width,
        this.canvasElementd.height
      );
      const imageData = this.canvasContextd.getImageData(
        0,
        0,
        this.canvasElementd.width,
        this.canvasElementd.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
   
      if (code) {
        this.scanActived = false;
        this.scanresultd = code.data;
        this.successd();
        console.log(this.scanresultd);
      } else {
        if (this.scanActived) {
          requestAnimationFrame(this.scand.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scand.bind(this));
    }
  }
 
  async successd()
  {
  const toast = await this.toast.create({
    message: 'Please Mark Your Attendance',
    position: 'middle',
    buttons: [
      {
        text: 'Mark Attendance',
        handler: () => {
          // check here to add code 
          console.log("xd");
          this.qrcodescand();
        }
      }  
    ]
  })
  toast.present();
  }

  qrcodescand()
  {
    this.attendance.getform(this.scanresultd).subscribe(data => {
      this.form = data
      if(this.form == undefined)
      {
        window.alert("Your QR Code is incorrect please try again with the correct QR Code");
      }
      if(this.scanresultd == this.form.qrcode)
      {
       this.verifymodalD();
      }
      else 
      {
        window.alert("Your QR Code is incorrect please try again with the correct QR Code"); 
      }
    })
  }

  async verifymodalD()
  {
    const modal = await this.modal.create({
      component: VerifyFormDepartureComponent
    });
   await modal.present();
  }

  resetd()
  {
  this.scanresultd = null;
  }

  stopScand(){
    this.scanActived =false;
  }
}
 