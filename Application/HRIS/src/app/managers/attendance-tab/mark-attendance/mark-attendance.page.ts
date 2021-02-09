import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import jsQR from 'jsqr';
import { Observable } from 'rxjs';
import { AttendanceService, employee } from '../attendance.service';
import { VerifyFormComponent } from './verify-form/verify-form.component';

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
  @ViewChild('video', {static: false}) video: ElementRef;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;

  videoElement: any;
  canvasElement: any;
  canvasContext: any;

  load: HTMLIonLoadingElement =  null;

  constructor(private toast: ToastController, private loading: LoadingController, private modal: ModalController, private attendance: AttendanceService ) { }

  ngOnInit() {
    //window.alert('please use your Mobile phone to scan the following QR code to mark attendance');
  }

  ngAfterViewInit()
  {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  } 

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
  reset()
  {
  this.scanresult = null;
  }

  stopScan(){
    this.scanActive =false;
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
          console.log("xd");
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
}
 