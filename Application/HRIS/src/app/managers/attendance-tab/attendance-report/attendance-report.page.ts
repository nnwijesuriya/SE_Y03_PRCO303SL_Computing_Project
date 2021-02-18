import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../attendance.service';
import { mark, MarkingService } from '../mark-attendance/verify-form/marking.service';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.page.html',
  styleUrls: ['./attendance-report.page.scss'],
})
export class AttendanceReportPage implements OnInit {

  public user:  Observable<employee[]>;

  public users:  Observable<mark[]>;

  profile: mark = {
    userid: '',
    name: '',
    department: '',
    email: '',
    date: '',
    ddate: '',
    hoursw: '',
    minw: '',
    worktype: '',
    status: ''
  }

  constructor(private mark: MarkingService) { }

  ngOnInit() {
    this.getrecords();
  }

  getrecords()
  {
   this.users = this.mark.getrecord();
  }

}
