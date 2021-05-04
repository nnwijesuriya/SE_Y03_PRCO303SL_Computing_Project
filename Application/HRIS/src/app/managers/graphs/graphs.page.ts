import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { UserService } from '../add-person/users.service';
import { user } from '../salaries/salaries.service';
import { GraphService } from './graph.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.page.html',
  styleUrls: ['./graphs.page.scss'],
})
export class GraphsPage implements OnInit {
  @ViewChild('barChart') barChart; 
  @ViewChild('piechart') pie; 
  @ViewChild('horizontalLine') horizontalChart; 
  @ViewChild('doughnutPolicyChart') policyChart; 
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  bars: any;
  doughnutChart: any;
  doughnutPolicy: any;
  hrzBars: any;
  pieCharts: any;
  colorArray: any;
  userManager="";
  userEmployee="";
  departmentAccounting = "";
  departmentHrmanagers = "";
  departmentManagers = "";
  departmentProduction = "";
  departmentPurchasing = "";
  departmentMarketing = "";
  departmentResearch = "";
  tt = new Array();
  departmentData1 = 0;
  departmentData2= 0;
  departmentData3 = 0;
  departmentData4 = 0;
  departmentData5 = 0;
  departmentData6 = 0;
  departmentData7 = 0;

  attenanceData1 = 0;
  attenanceData2 = 0;
  attenanceData3 = 0;
  attenanceData4 = 0;
  attenanceData5 = 0;
  attenanceData6 = 0;
  attenanceData7 = 0;

  employeesData1 = 0;
  employeesData2 = 0;
  employeesData3 = 0;
  employeesData4 = 0;
  employeesData5 = 0;
  employeesData6 = 0;
  employeesData7 = 0;

  userData1 = 0;
  userData2 = 0;

  useradded1 = 0;
  useradded2 = 0;

  constructor(private graph: GraphService, public loadingCtrl: LoadingController, private users: UserService) { }

  ngOnInit() {
  }


  ionViewDidEnter() {
    this.getSalaryData();
    this.getAttendanceData();
    this.getEmployees();
    this.totalUsers();
    this.usersAdded()
  } 

  getSalaryData()
  {
    let counter;
  this.departmentAccounting = "Accounting & Finance";
  this.departmentHrmanagers = "HR Management";
  this.departmentManagers = "Managers";
  this.departmentProduction = "Production";
  this.departmentPurchasing = "Purchasing & Customer service";
  this.departmentMarketing = "Marketing";
  this.departmentResearch = "Research & Development";
  for(counter= 0; counter< 7; counter++)
  {
    if(this.departmentAccounting != "")
    {
      this.graph.getCollection(this.departmentAccounting).subscribe(val =>{
        let length = val.length;
        console.log(length);
        let counter2;
        for(counter2 = 0; counter2 < length; counter2++)
        {
          let salary = val[counter2].salary
          let department = this.departmentData1*1000
          let total = +department + +salary
          this.departmentData1= total/1000
          console.log(this.departmentData1); 
        }
        this.tt.push(this.departmentData1)
        console.log(val);
      })
      this.departmentAccounting = "";
    }else if(this.departmentHrmanagers != "")
    {
      this.graph.getCollection(this.departmentHrmanagers).subscribe(val =>{
        let length = val.length;
        console.log(length);
        let counter2;
        for(counter2 = 0; counter2 < length; counter2++)
        {
          let salary = val[counter2].salary
          let department = this.departmentData2*1000
          let total = +department + +salary
          this.departmentData2= total/1000
          console.log(this.departmentData2); 
        }
        this.tt.push(this.departmentData2)
        console.log(val);
      })
      this.departmentHrmanagers ="";
    }else if(this.departmentProduction != "")
    {
      this.graph.getCollection(this.departmentProduction).subscribe(val =>{
        let length = val.length;
        console.log(length);
        let counter2;
        for(counter2 = 0; counter2 < length; counter2++)
        {
          let salary = val[counter2].salary
          let department = this.departmentData3*1000
          let total = +department + +salary
          this.departmentData3 = total/1000
          console.log(this.departmentData3); 
        }
        this.tt.push(this.departmentData3)
        console.log(val);
      })
      this.departmentProduction ="";
    }else if(this.departmentManagers != "")
    {
      this.graph.getCollection(this.departmentManagers).subscribe(val =>{
        let length = val.length;
        console.log(length);
        let counter2;
        for(counter2 = 0; counter2 < length; counter2++)
        {
          let salary = val[counter2].salary
          let department = this.departmentData4*1000
          let total = +department + +salary
          this.departmentData4 = total/1000
          console.log(this.departmentData4); 
        }
        this.tt.push(this.departmentData4)
        console.log(val);
      })
      this.departmentManagers ="";
    }else if(this.departmentPurchasing != "")
    {
      this.graph.getCollection(this.departmentPurchasing).subscribe(val =>{
        let length = val.length;
        console.log(length);
        let counter2;
        for(counter2 = 0; counter2 < length; counter2++)
        {
          let salary = val[counter2].salary
          let department = this.departmentData5*1000
          let total = +department + +salary
          this.departmentData5 = total/1000
          console.log(this.departmentData5);  
        }
        this.tt.push(this.departmentData5)
        console.log(val);
      })
      this.departmentPurchasing ="";
    }else if(this.departmentMarketing != "")
    {
      this.graph.getCollection(this.departmentMarketing).subscribe(val =>{
        let length = val.length;
        console.log(length);
        let counter2;
        for(counter2 = 0; counter2 < length; counter2++)
        {
          let salary = val[counter2].salary
          let department = this.departmentData6*1000
          let total = +department + +salary
          this.departmentData6 = total/1000
          console.log(this.departmentData6); 
        }
        this.tt.push(this.departmentData6)
        console.log(val);
      })
      this.departmentMarketing ="";
    }else if(this.departmentResearch != "")
    {
      this.graph.getCollection(this.departmentResearch).subscribe(val =>{
        let length = val.length;
        console.log(length);
        let counter2;
        for(counter2 = 0; counter2 < length; counter2++)
        {
          let salary = val[counter2].salary
          let department = this.departmentData7*1000
          let total = +department + +salary
          this.departmentData7 = total/1000
          console.log(this.departmentData7); 
        }
        this.tt.push(this.departmentData7)
        console.log(this.tt);
      })
      this.departmentResearch ="";
    }
  }
  this.showLoader()
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Accounting', 'HR Managers', 'Managers', 'Production', 'Purchasing', 'Marketing', 'Reserach'],
        datasets: [{
          label: 'Sallary in thousands',
          data: [this.departmentData1,this.departmentData2,this.departmentData3,this.departmentData4,this.departmentData5,this.departmentData6,this.departmentData7],
          backgroundColor: '#1484FF',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      }
    });
  }

  getAttendanceData()
  {
    let counter;
    this.departmentAccounting = "Accounting & Finance";
    this.departmentHrmanagers = "HR Management";
    this.departmentManagers = "Managers";
    this.departmentProduction = "Production";
    this.departmentPurchasing = "Purchasing & Customer service";
    this.departmentMarketing = "Marketing";
    this.departmentResearch = "Research & Development";
    for(counter= 0; counter< 7; counter++)
    {
      if(this.departmentAccounting != "")
      {
        this.graph.getAtttendance(this.departmentAccounting).subscribe(val =>{
          let length = val.length;
          this.attenanceData1 = length;
        })
        this.departmentAccounting = "";
      }else if(this.departmentHrmanagers != "")
      {
        this.graph.getAtttendance(this.departmentHrmanagers).subscribe(val =>{
          let length = val.length;
          this.attenanceData2 = length;
        })
        this.departmentHrmanagers ="";
      }else if(this.departmentProduction != "")
      {
        this.graph.getAtttendance(this.departmentProduction).subscribe(val =>{
          let length = val.length;
          this.attenanceData3 = length;
        })
        this.departmentProduction ="";
      }else if(this.departmentManagers != "")
      {
        this.graph.getAtttendance(this.departmentManagers).subscribe(val =>{
          let length = val.length;
          this.attenanceData4 = length;
        })
        this.departmentManagers ="";
      }else if(this.departmentPurchasing != "")
      {
        this.graph.getAtttendance(this.departmentPurchasing).subscribe(val =>{
          let length = val.length;
          this.attenanceData5 = length;
        })
        this.departmentPurchasing ="";
      }else if(this.departmentMarketing != "")
      {
        this.graph.getAtttendance(this.departmentMarketing).subscribe(val =>{
          let length = val.length;
          this.attenanceData6 = length;
          console.log(val);
        })
        this.departmentMarketing ="";
      }else if(this.departmentResearch != "")
      {
        this.graph.getAtttendance(this.departmentResearch).subscribe(val =>{
          let length = val.length;
          this.attenanceData7 = length;
        })
        this.departmentResearch ="";
      }
    }
  }

  horizontalBarChart() {
    this.hrzBars = new Chart(this.horizontalChart.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Accounting', 'HR Managers', 'Managers', 'Production', 'Purchasing', 'Marketing', 'Reserach'],
        datasets: [{
          label: 'Attendance Today',
          data: [this.attenanceData1,this.attenanceData2,this.attenanceData3,this.attenanceData4,this.attenanceData5,this.attenanceData6,this.attenanceData7],
          backgroundColor: '#FFFE14',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      }
    });
  }

  getEmployees()
  {
    let counter;
    this.departmentAccounting = "Accounting & Finance";
    this.departmentHrmanagers = "HR Management";
    this.departmentManagers = "Managers";
    this.departmentProduction = "Production";
    this.departmentPurchasing = "Purchasing & Customer service";
    this.departmentMarketing = "Marketing";
    this.departmentResearch = "Research & Development";
    for(counter= 0; counter< 7; counter++)
    {
      if(this.departmentAccounting != "")
      {
        this.graph.getEmployees(this.departmentAccounting).subscribe(val =>{
          let length = val.length;
          this.employeesData1 = length;
        })
        this.departmentAccounting = "";
      }else if(this.departmentHrmanagers != "")
      {
        this.graph.getEmployees(this.departmentHrmanagers).subscribe(val =>{
          let length = val.length;
          this.employeesData2 = length;
        })
        this.departmentHrmanagers ="";
      }else if(this.departmentProduction != "")
      {
        this.graph.getEmployees(this.departmentProduction).subscribe(val =>{
          let length = val.length;
          this.employeesData3 = length;
        })
        this.departmentProduction ="";
      }else if(this.departmentManagers != "")
      {
        this.graph.getEmployees(this.departmentManagers).subscribe(val =>{
          let length = val.length;
          this.employeesData4 = length;
        })
        this.departmentManagers ="";
      }else if(this.departmentPurchasing != "")
      {
        this.graph.getEmployees(this.departmentPurchasing).subscribe(val =>{
          let length = val.length;
          this.employeesData5 = length;
        })
        this.departmentPurchasing ="";
      }else if(this.departmentMarketing != "")
      {
        this.graph.getEmployees(this.departmentMarketing).subscribe(val =>{
          let length = val.length;
          this.employeesData6 = length;
          console.log(val);
        })
        this.departmentMarketing ="";
      }else if(this.departmentResearch != "")
      {
        this.graph.getEmployees(this.departmentResearch).subscribe(val =>{
          let length = val.length;
          this.employeesData7 = length;
        })
        this.departmentResearch ="";
      }
    }
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Accounting', 'HR Managers', 'Managers', 'Production', 'Purchasing', 'Marketing', 'Reserach'],
        datasets: [{
          data: [this.employeesData1,this.employeesData2,this.employeesData3,this.employeesData4,this.employeesData5,this.employeesData6,this.employeesData7],
          backgroundColor: [
            '#FF5414',
            '#FCAA24',
            '#DBF70C',
            '#0CF759',
            '#0AC5F5',
            '#A05DF3',
            '#D726BF'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384',
            '#FFCE56',
            '#36A2EB',
          ]
        }]
      }
    });
  }

  totalUsers()
  {
    let counter;
    this.userManager="HR Managers";
    this.userEmployee ="Employees";
    for(counter= 0; counter< 7; counter++)
    {
      if(this.userManager != "")
      {
        this.graph.getUsers(this.userManager).subscribe(val =>{
          let length = val.length;
          this.userData1 = length;
        })
        this.userManager = "";
      }else if(this.userEmployee != "")
      {
        this.graph.getUsers(this.userEmployee).subscribe(val =>{
          let length = val.length;
          this.userData2 = length;
        })
        this.userEmployee = "";
      }
    }
  }

  pieChart() {
    this.pieCharts = new Chart(this.pie.nativeElement, {
      type: 'pie',
      data: {
        labels: ['HR Managers', 'Employees'],
        datasets: [{
          data: [this.userData1, this.userData2],
          backgroundColor: [
            '#97F911',
            '#079FFE'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

  usersAdded()
  {
    this.users.getusers().subscribe(val =>{
      this.useradded2 = val.length
    })
  }

  doughnutChartPolicy() {
    this.doughnutPolicy = new Chart(this.policyChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['2020','2021'],
        datasets: [{
          data: [this.useradded1, this.useradded2],
          backgroundColor: [
            '#DBF70C',
            '#0CF759',
          ],
          hoverBackgroundColor: [
            '#36A2EB',
            '#FFCE56'
          ]
        }]
      }
    });
  }

  showLoader() { 
    this.loadingCtrl.create({
      message: 'Loading Data',
      duration: 600
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
        this.createBarChart();
        this.horizontalBarChart();
        this.doughnutChartMethod();
        this.pieChart();
        this.doughnutChartPolicy();
      });
    });
  }

}
