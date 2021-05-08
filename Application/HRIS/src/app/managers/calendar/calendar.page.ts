import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { IonContent } from '@ionic/angular';
import { AddFormComponent } from './add-form/add-form.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  form = {
    title: '',
    startTime: '',
    endTime: '',
    allday: false
  }
  eventSource = [];
  titlecal: string;

  calendar = {
    mode: 'month',
    currentDate: new Date() 
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private db : AngularFirestore, private modals: ModalController) {
   
  }
  ngOnInit() {
  this.getevents();
  }

  getevents()
  {
    this.db.collection('events').snapshotChanges().subscribe(colsnap => {
      this.eventSource= [];
      colsnap.forEach(snap => {
        let cal: any = snap.payload.doc.data()
        cal.id = snap.payload.doc.id;
        this.form = cal;
        console.log(this.form)
        let update = {
          title: this.form.title,
          startTime:  new Date(this.form.startTime),
          endTime: new Date(this.form.endTime),
          allDay: this.form.allday
        }
        if (update.allDay) {
          let start = update.startTime;
          let end = update.endTime;
          update.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
          update.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
        }
        this.eventSource.push(update);
        this.resetEvent();
      })
    })
  }

  resetEvent() {
    this.form = {
      title: '',
      startTime: '',
      endTime: '',
      allday : false
    };
  }

  next()
  {
    this.myCal.slideNext();
  }

  back()
  {
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title)
  {
    this.titlecal = title;
  }

  async addEvent()
  {
    const modal = await this.modals.create({
      component: AddFormComponent,
      cssClass: 'my-calendar-modal-css'
    });
   await modal.present();
  }

}
