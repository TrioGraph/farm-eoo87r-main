import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Tiles } from './tiles';

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
  dashboardInfo: any;
  tilesList: Tiles[] = [];

  constructor(private router: Router, private dataService: DataService) {}

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

    this.dataService.getDashboardInfo().subscribe((data: any) => {
      this.dashboardInfo = data;
      console.log('dashboardInfo : ', this.dashboardInfo);
    })
    this.tilesList = [
      {name:'identification', title: 'Identifications', icon: 'assets/images/dashboard/identification.png', color: 'tertiary',
        viewAllUrl: 'plantationidentification-list', selectedTimeLine: 'Year',
        parameter1Title1: 'Pending', parameter1Title2: 'Farmers', parameter1Value: 'InactivePlantationIdentification', 
        parameter1Url: 'plantationidentification-list',
        parameter2Title1: 'Completed', parameter2Title2: 'Farmers', parameter2Value: 'ActivePlantationIdentification',
        parameter2Url: 'plantationidentification-list',
        parameter3Title1: 'Total', parameter3Title2: 'Farmers', parameter3Value: 'PlantationIdentification', 
        parameter3Url: 'plantationidentification-list',
      },
      {name:'farmer', title: 'Farmers', icon: 'assets/images/dashboard/farmer.png', color: 'tertiary',
        viewAllUrl: 'farmers-list', selectedTimeLine: 'Year',
        parameter1Title1: 'Pending', parameter1Title2: 'Farmers', parameter1Value: 'InactiveFarmers', 
        parameter1Url: 'farmers-list',
        parameter2Title1: 'Completed', parameter2Title2: 'Farmers', parameter2Value: 'ActiveFarmers',
        parameter2Url: 'farmers-list',
        parameter3Title1: 'Total', parameter3Title2: 'Farmers', parameter3Value: 'Farmers', 
        parameter3Url: 'farmers-list',
      },
      {name:'employees', title: 'Employees', icon: 'assets/images/dashboard/farmer.png', color: 'tertiary',
        viewAllUrl: 'employees-list', selectedTimeLine: 'Year',
        parameter1Title1: 'Pending', parameter1Title2: 'Employees', parameter1Value: 'InactiveEmployees', 
        parameter1Url: 'employees-list',
        parameter2Title1: 'Completed', parameter2Title2: 'Employees', parameter2Value: 'ActiveEmployees',
        parameter2Url: 'employees-list',
        parameter3Title1: 'Total', parameter3Title2: 'Employees', parameter3Value: 'Employees', 
        parameter3Url: 'employees-list',
      },
      {name:'fieldVisit', title: 'Field Visits', icon: 'assets/images/dashboard/farmer.png', color: 'tertiary',
        viewAllUrl: 'field_visit-list', selectedTimeLine: 'Year',
        parameter1Title1: 'Pending', parameter1Title2: 'Visits', parameter1Value: 'InactiveFieldVisit', 
        parameter1Url: 'field_visit-list',
        parameter2Title1: 'Completed', parameter2Title2: 'Visits', parameter2Value: 'ActiveFieldVisit',
        parameter2Url: 'field_visit-list',
        parameter3Title1: 'Total', parameter3Title2: 'Visits', parameter3Value: 'FieldVisit', 
        parameter3Url: 'field_visit-list',
      },
      // {title: 'Total Fields', value: this.getDataByKey('TotalFields'), icon: 'assets/images/dashboard/field.png', color: 'tertiary'},
      // {title: 'Total Photos', value: this.getDataByKey('TotalPhotos'), icon: 'assets/images/dashboard/photo.png', color: 'tertiary'},
      // {title: 'Total Field Visits', value: this.getDataByKey('TotalFieldVisits'), icon: 'assets/images/dashboard/field_visit.png', color: 'tertiary'},
      // {title: 'Total Identifications', value: this.getDataByKey('TotalIdentifications'), icon: 'assets/images/dashboard/identification.png', color: 'tertiary'},
      // {title: 'Total Poaching FFB', value: this.getDataByKey('TotalPoachingFFB'), icon: 'assets/images/dashboard/poaching_ffb.png', color: 'tertiary'},
    ]
  }

  getDataByKey(key: any): any {
    let tempResult: any;
    this.dashboardInfo?.find((elem: any) => {
      if(elem.Parameter == key) {
        tempResult = elem.Value;
      }
    })
    return tempResult;
  }

  timeIntervalChanged(tile: any, selectionType: any) {
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
    this.router.navigateByUrl(`farm/` + tile.viewAllUrl + `/${this.startDate}`);
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
