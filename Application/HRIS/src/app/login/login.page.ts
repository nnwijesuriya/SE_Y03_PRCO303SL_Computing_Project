import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {LoginService} from '../login/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authError:any;

  constructor(private route: Router, private auth: LoginService) { }

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }
  
  email: string = "";
  password = "";
  user = "";

  login() 
  {
    console.log(this.user)
    this.auth.login(this.email, this.password);
  }
}
