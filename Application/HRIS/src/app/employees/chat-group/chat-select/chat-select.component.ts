import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat-select',
  templateUrl: './chat-select.component.html',
  styleUrls: ['./chat-select.component.scss'],
})
export class ChatSelectComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  closemodal()
  {
    this.modal.dismiss();
  }


}
