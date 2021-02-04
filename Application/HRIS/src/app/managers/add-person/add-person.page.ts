import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from './users.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.page.html',
  styleUrls: ['./add-person.page.scss'],
})
export class AddPersonPage implements OnInit {

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

  constructor(private nav: NavController, private user: UserService, private toastCtrl: ToastController) { }

  public Muse : Observable<users[]>;

  public Euse : Observable<users[]>;

  ngOnInit() {

    let Mrole = "HR Managers";
    this.searchManagers(Mrole);

    let Erole = "Employees";
    this.searchEmployees(Erole);
  }

  adduser()
  {
    this.nav.navigateRoot('add-person/form');
  }

  searchManagers(role){
    this.Muse = this.user.getCollection(role);
    }

    searchEmployees(role){
      this.Euse = this.user.getCollection(role);
    }

    async succesToast() {
      const toast = await this.toastCtrl.create({
        message: 'The user has been successfully deleted from the system',
        duration: 3000  
      });
      toast.present();
    }
  

    deleteuser(id, email)
    {
     console.log(id);
     console.log(email); 
     if(confirm("Are you sure you want to delete the user " + email))
     {
     this.user.getform(id).subscribe(profiles => {
       this.form = profiles;   
       console.log(this.form);
       this.user.deletuser(this.form);    
       this.succesToast();  
     });
    }
  }
}
