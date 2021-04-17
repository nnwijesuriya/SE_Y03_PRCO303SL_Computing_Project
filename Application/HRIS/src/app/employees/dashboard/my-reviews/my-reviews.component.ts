import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { users, UserService } from 'src/app/managers/add-person/users.service';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.scss'],
})
export class MyReviewsComponent implements OnInit {

  profile : users = {
    userid: '',
    Fname: '',
    Mname: '',
    Lname: '',
    Pemail: '',
    Eemail: '',
    password: '',
    phone : '',
    Hphone : '',
    DOB: '' ,
    addressH: '',
    department : '',
    Rdepartment: '',
    role : '',
    sdate: '',
    Econtact: '',
    Otherinformation: '',
    picture: '',
    review: '',
    rCounter: '',
    holidaysPerYear: '',
    employeeReview: '',
    employeeReviewCounter: ''
  };

  constructor(private user: UserService, private auth: AngularFireAuth, private modal: ModalController) { }

  uid;
  reviewValue = 0;
  ngOnInit() {
    this.auth.authState.subscribe(data => {
      this.uid = data.uid;
      this.getuserDetails();
    })
  }

  getuserDetails()
  {
    let id = this.uid;
    this.user.getform(id).subscribe(profiles => {
      this.profile = profiles;  
      this.reviewValue = profiles.review
      console.log(this.reviewValue);
    });
  }

  closeModal()
  {
    this.modal.dismiss();
  }
}
