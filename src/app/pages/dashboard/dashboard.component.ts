import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  content_loaded: boolean = false;
  allservices: any[] = [];
  identificationTimeSelection: string = '';
  fieldVisitTimeSelection: any;
  startDate: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.allservices = [
      [{label:'Academic', col8:true}, {label:'School'}],
      [{label:'Circular'}, {label:'Attendance'}, {label:'Home'}],
      [{label:'Progress'}, {label:'Class', col8:true}]
    ];
    this.identificationTimeSelection = 'Today';
    this.fieldVisitTimeSelection = 'Today';
    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }

  GetIdentificationData() {
    if(this.identificationTimeSelection === "Today"){
      this.startDate = new Date(new Date().getTime());
    }
    else if(this.identificationTimeSelection === "Week"){
      this.startDate = new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 7));
    }
    else if(this.identificationTimeSelection === "Month"){
      this.startDate = new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 31));
    }
    else if(this.identificationTimeSelection === "Year"){
      this.startDate = new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 365));
    }
    console.log('startDate : ', this.startDate);
    this.startDate = `${this.startDate.getDay()}-${this.startDate.getMonth()}-${this.startDate.getFullYear()}`;
    this.router.navigateByUrl(`farm/plantationidentification-list/${this.startDate}`);
  }

  GetFieldVisitData() {
    if(this.identificationTimeSelection === "Today"){
      this.startDate = new Date(new Date().getTime());
    }
    else if(this.identificationTimeSelection === "Week"){
      this.startDate = new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 7));
    }
    else if(this.identificationTimeSelection === "Month"){
      this.startDate = new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 31));
    }
    else if(this.identificationTimeSelection === "Year"){
      this.startDate = new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 365));
    }
    console.log('startDate : ', this.startDate);
    this.startDate = `${this.startDate.getDay()}-${this.startDate.getMonth()}-${this.startDate.getFullYear()}`;
    this.router.navigateByUrl(`farm/field_visit-list/${this.startDate}`);
  }
}
