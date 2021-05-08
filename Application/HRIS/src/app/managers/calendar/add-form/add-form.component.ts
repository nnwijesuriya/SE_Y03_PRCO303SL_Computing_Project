import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {

  form = {
    title: '',
    startTime: '',
    endTime: '',
    allday: false
  }

  eventSource = [];

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private db : AngularFirestore, private modals: ModalController) { }

  ngOnInit() {}

  addevent()
  {
    console.log(this.form.title);
      let event = {
      title: this.form.title,
      startTime:  new Date(this.form.startTime),
      endTime: new Date(this.form.endTime),
      allDay: this.form.allday,
    }
    if (event.allDay) {
      let start = event.startTime;
      let end = event.endTime;
      event.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      event.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
    this.eventSource.push(event);
    this.db.collection('events').add(this.form);
    this.resetEvent();
  }

  resetEvent() {
    this.form = {
      title: '',
      startTime: '',
      endTime: '',
      allday : false
    };
    this.modals.dismiss();
  }

}
