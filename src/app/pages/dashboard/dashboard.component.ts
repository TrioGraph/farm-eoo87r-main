import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  content_loaded: boolean = false;
  allservices: any[] = [];

  constructor() {}

  ngOnInit() {
    console.log();

    this.allservices = [
      [{label:'Academic', col8:true}, {label:'School'}],
      [{label:'Circular'}, {label:'Attendance'}, {label:'Home'}],
      [{label:'Progress'}, {label:'Class', col8:true}]
    ];

    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }
}
