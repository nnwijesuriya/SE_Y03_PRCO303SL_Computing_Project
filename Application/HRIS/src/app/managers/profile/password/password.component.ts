import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  closemodal()
  {
    this.modal.dismiss();
  }
}
