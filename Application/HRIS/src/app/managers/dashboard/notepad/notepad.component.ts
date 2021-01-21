import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AvailabilityService, notes } from '../availability.service';


@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss'],
})
export class NotepadComponent implements OnInit {

  constructor(private modal: ModalController, private notesservice: AvailabilityService, private toastCtrl: ToastController) { }

  ngOnInit() {}

  notes : notes ={
    title: '',
    description: ''
  };

  title:string = ""; 
  description:string = "";

  async succesToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your notes has been added to the Notepad',
      duration: 2000  
    });
    toast.present();
  }

    async failToast() {
    const toast =  await this.toastCtrl.create({
      message: 'There was a problem adding your notes to the Notepad',
      duration: 2000
    });
    toast.present();  
  } 

  addingnotes()
  {
   this.notesservice.addnotes(this.notes).then(() => {
    this.succesToast();
    this.modal.dismiss();
  }, err => {
    this.failToast();
  });
}

  dismiss()
  {
    this.title="";
    this.description="";
    this.modal.dismiss();
  }

}
