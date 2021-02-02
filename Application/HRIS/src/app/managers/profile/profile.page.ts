import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { ModalController, ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { users, UserService } from '../add-person/users.service';
import {EditProfileComponent} from '../profile/edit-profile/edit-profile.component';
import {PasswordComponent} from '../profile/password/password.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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
  picture: ''
 } 

  constructor(private user: UserService, private auth: AngularFireAuth, private toast:ToastController, private modal: ModalController, private storage: AngularFireStorage) { }

  uid;
  path:string;
  imageurl;

  ngOnInit( ) {
    this.auth.authState.subscribe(data => {
      this.uid = data.uid;
      this.profileinfo();
    })
  }

  profileinfo()
  {
    let id = this.uid;
    this.user.getform(id).subscribe(profiles => {
    this.profile = profiles;   
    });
  }

  async editprofilemodal()
  {
    const modal = await this.modal.create({
      component: EditProfileComponent,
      cssClass: 'my-custom-modal-css'
    });
   await modal.present();
  }

  async passwordmodal()
  {
    const Emodal = await this.modal.create({
      component: PasswordComponent
    });
   await Emodal.present();
  }

  upload($event)
  {
    this.path = $event.target.files[0];
  }

  async succesToast() {
    const toast = await this.toast.create({
      message: 'Your profile picture has been changed',
      duration: 2000  
    });
    toast.present();
  }

    async failToast() {
    const toast =  await this.toast.create({
      message: 'Select a image to upload as profile picture',
      duration: 2000
    });
    toast.present();  
  } 


  imageUpload()
  {
    if(this.path==null)
    {
    this.failToast();
    }
    else
    {
      console.log(this.path);
      var filepath = "/images"+ Math.random() + this.path;
      const fileref = this.storage.ref(filepath)
      this.storage.upload(filepath, this.path).snapshotChanges().pipe( finalize(()=>
      {
       fileref.getDownloadURL().subscribe((url)=>{
         this.imageurl=url;
         this.profile.picture = this.imageurl;
         this.user.updateuser(this.profile);
         this.reset();
         console.log(this.imageurl)
       })
      })
      ).subscribe()
    }
  }

  reset()
  {
    this.path = null;
    this.succesToast();
  }
  
}
