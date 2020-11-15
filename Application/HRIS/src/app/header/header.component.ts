import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private service: LoginService) { }

  ngOnInit() {}

  signout(){
    this.service.signout();
  }
}
