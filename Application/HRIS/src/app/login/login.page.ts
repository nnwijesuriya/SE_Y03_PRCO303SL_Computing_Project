import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showpassword= false;
  passwordtoggleicon = 'eye';
  authError:any;
  loginform: FormGroup;
  constructor(private route: Router, private auth: LoginService, public formBuilder: FormBuilder) { 
    this.loginform = formBuilder.group({
      emailControl: [
        "",[
          Validators.minLength(12),
          Validators.required
        ]
      ],
      passwordControl: [
        "",[
          Validators.minLength(6),
          Validators.pattern("[0-9a-z-A-Z@.#*$!?&+-/]*"),
          Validators.required
        ]
      ],
      userControl: [""]
    });
  }

  togglepassword()
  {
    this.showpassword = !this.showpassword;

    if(this.passwordtoggleicon == 'eye')
    {
      this.passwordtoggleicon = 'eye-off';
    }else
    {
      this.passwordtoggleicon = 'eye';
    }
  } 

  get email(){
    return this.loginform.get('emailControl');
  }

  get password(){
    return this.loginform.get('passwordControl');
  }

  get user(){
    return this.loginform.get('userControl');
  }


  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }
  
  emailValue: string = "";
  passwordValue = "";
  userValue = "";

  login() 
  {
    this.emailValue = this.loginform.get('emailControl').value;
    this.passwordValue = this.loginform.get('passwordControl').value;
    this.userValue = this.loginform.get('userControl').value;
    this.auth.login(this.emailValue, this.passwordValue);
  }
}
