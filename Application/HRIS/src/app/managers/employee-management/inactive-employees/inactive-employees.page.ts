import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from '../../add-person/users.service';

enum colurs {
  grey = "#E0E0E0",
  green = "#76FF03",
  yellow = "#FFCA28",
  red = "#DD2C00"
}

@Component({
  selector: 'app-inactive-employees',
  templateUrl: './inactive-employees.page.html',
  styleUrls: ['./inactive-employees.page.scss'],
})
export class InactiveEmployeesPage implements OnInit {

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
    review: '',
    rCounter: '',
    holidaysPerYear: '',
    employeeReview: '',
    employeeReviewCounter: ''
  }

  public employees : Observable<users[]>;

  @Input() rating: number ;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  constructor(private user: UserService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.getallemployees();
  }

  getallemployees()
  {
    this.employees = this.user.getDeletedUsers();
  }

  deleteUserRecord(id)
  {
  console.log(id);
  this.user.removeDeleteduser(id);
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
            this.deleteUserRecord(id);
          }
        }
      ]
    });
    await alert.present();
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
