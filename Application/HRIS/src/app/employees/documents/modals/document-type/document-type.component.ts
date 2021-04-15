import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ComplainFormComponent } from '../../forms/complain-form/complain-form.component';
import { LeaveRequestFormComponent } from '../../forms/leave-request-form/leave-request-form.component';
import { MedicalFormComponent } from '../../forms/medical-form/medical-form.component';
import { PtorequestFormComponent } from '../../forms/ptorequest-form/ptorequest-form.component';
import { ReturnWorkFormComponent } from '../../forms/return-work-form/return-work-form.component';

@Component({
  selector: 'app-document-type',
  templateUrl: './document-type.component.html',
  styleUrls: ['./document-type.component.scss'],
})
export class DocumentTypeComponent implements OnInit {

  constructor(private modal: ModalController, private nav: NavController, private route: Router) { }

  modalValue;
  ngOnInit() {}

  async closeModal(){
    await this.modal.dismiss(this.modalValue);
  }
   
  async complainFormModal()
  {
    this.modalValue="complain form";
    this.closeModal();
  }

  async leaveRequestFormModal()
  {
    this.modalValue="leave request from"
    this.closeModal();
  }

  async medicalFormModal()
  {
    this.modalValue="medical form"
    this.closeModal();
  }

  async PTORequestFormModal()
  {
    this.modalValue="PTO request form"
    this.closeModal();
  }

  async returnToWorkFormModal()
  {
    this.modalValue="return to work form"
    this.closeModal();
  }
}
