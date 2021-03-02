import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, VERSION } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from '../../add-person/users.service';
import { AvailabilityService } from '../../dashboard/availability.service';
import { ViewComponent } from '../view/view.component';

enum colurs {
  grey = "#E0E0E0",
  green = "#76FF03",
  yellow = "#FFCA28",
  red = "#DD2C00"
}

@Component({
  selector: 'app-active-employees',
  templateUrl: './active-employees.page.html',
  styleUrls: ['./active-employees.page.scss'],
})
export class ActiveEmployeesPage implements OnInit {

  form : users = {
    userid: '',
    Fname: '',
    Mname: '',
    Lname: '',
    DOB: '',
    Pemail: '',
    Eemail: '',
    password: '',
    Hphone: '',
    phone : '',
    addressH: '',
    department : '',
    Rdepartment: '',
    role: '',
    sdate: '',
    Econtact: '',
    Otherinformation: '',
    picture: '',
    review: ''
  } 

  pipe = new DatePipe('en-US'); 

  constructor(private user: UserService, private modal: ModalController, private toast: ToastController, 
    private alertCtrl: AlertController, private auth: AngularFireAuth, private availability: AvailabilityService) { }

  public employees : Observable<users[]>;
  
  department;
  selectedDate;
  formatedDate;
  closedate = false;
  term;
  uid;
  reviewvalue = 0;

  ngOnInit() {
    this.auth.authState.subscribe(data=> {
      this.uid = data.uid;
   })
    this.getallemployees();
  }

  getByDepartment()
  {
   console.log(this.department);
   if(this.department == "All")
   {
     this.getallemployees();
     this.department == null;
   }else
   {
   this.employees = this.user.getDepartmentCollection(this.department);
   }
  }

  getByDate()
  {
    const myFormattedDate = this.pipe.transform(this.selectedDate, 'mediumDate');
    this.formatedDate= myFormattedDate;
    console.log(this.formatedDate);
    this.employees = this.user.getDateCollection(this.formatedDate);
  } 

  removedate()
  {
    this.selectedDate = null;
  }

  getallemployees()
  {
    this.employees = this.user.getusers();
  }

  async editemployee(id)
  {
    const modal = await this.modal.create({
      component: ViewComponent,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'userId': id
      }
    });
   await modal.present();
  }

  removeemployee(user)
  {
   this.user.deletuser(user);
  }

  getSpecificUser(id)
  {
  console.log(id);
  this.user.getform(id).subscribe(profiles => {
    this.form = profiles;   
    this.user.addDeletedUser(profiles);
    this.removeemployee(this.form);
  });
  }

  async alertConfirm(id) {
    console.log(id);
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: '<strong>Are you sure you want to delete the employee records</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (user) => {
            console.log('Confirm Cancel: user');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.getSpecificUser(id);
          }
        }
      ]
    });
    await alert.present();
  }

 
  filterusers(evt)
  {  
  this.term = evt.srcElement.value;
  }

  async succesToast() {
    const toast = await this.toast.create({
      message: 'Your review of the user has been successfully counted',
      duration: 3000  
    });
    toast.present();
  }

rate(data, userid) {
  this.user.getform(userid).subscribe(profile => {  
  console.log(profile);
  //this is to add the values
  profile.review = data.newValue;
  this.succesToast();
  console.log(profile.review);
  this.user.updatereview(profile);
  this.reviewvalue = 0;
});
}

status : any;

// does not work need to look into it (takes a lot of time)
getstatus(id)
{
  console.log(id);
  this.availability.presense(id).subscribe(data => {
    this.status = data;
    console.log(this.status);
  });
  console.log("does not work");
}
}
