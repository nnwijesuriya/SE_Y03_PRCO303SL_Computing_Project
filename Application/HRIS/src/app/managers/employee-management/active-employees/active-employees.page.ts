import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from '../../add-person/users.service';
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
    picture: ''
  }

  @Input() rating: number ;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();;

  pipe = new DatePipe('en-US'); 

  constructor(private user: UserService, private modal: ModalController, private alertCtrl: AlertController) { }

  public employees : Observable<users[]>;
  public list;

  department;
  selectedDate;
  formatedDate;

  ngOnInit() {
    this.getallemployees();
  }

  getByDepartment()
  {
   console.log(this.department);
   if(this.department == "All")
   {
     this.getallemployees();
   }else
   {
   this.employees = this.user.getDepartmentCollection(this.department);
   }
  }

  getByDate()
  {
    const myFormattedDate = this.pipe.transform(this.selectedDate, 'shortDate');
    this.formatedDate= myFormattedDate;
    console.log(this.formatedDate);
    this.employees = this.user.getDateCollection(this.formatedDate);
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

  //it doesnt work
  filterusers(evt)
  {
    /*
  const search = evt.srcElement.value;
  console.log(search);
  if(!search)
  {
    return;
  }

  this.employees = this.employees.filter(currentgoal =>
    {
    if(currentgoal.FName && search)
    {
      if(currentgoal.FName.toLowerCase().indexof(search.toLowerCase()) > -1)
      {
        return true;
      }
      return false;
    }
    });
    */
  }


  
rate(index: number) {
this.rating = index;
this.ratingChange.emit(this.rating);
console.log(this.rating);
}

getColor(index: number) {
if(this.isAboveRating(index)){
  return colurs.grey
} 
switch(this.rating){
  case 1:
  case 2:
    return colurs.red;
  case 3: 
    return colurs.yellow;
  case 4:
  case 5:
    return colurs.green;
  default:
    return colurs.grey;
}
}

isAboveRating(index: number): boolean {
return index> this.rating
}
}
