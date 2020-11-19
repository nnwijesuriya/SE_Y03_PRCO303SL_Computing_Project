import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { users, UserService } from './users.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.page.html',
  styleUrls: ['./add-person.page.scss'],
})
export class AddPersonPage implements OnInit {

  constructor(private nav: NavController, private user: UserService) { }

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



}
