import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee_roles-list',
  templateUrl: './employee_roles-list.component.html',
  styleUrls: ['./employee_roles-list.component.scss'],
})
export class Employee_RolesListComponent  implements OnInit {

  public employee_rolesList: any;
  public searchText: any;
  public selectedId: any;
  
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
      },
      cssClass: 'alert-button-cancel'
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
      },
      cssClass: 'alert-button-confirm'
    },
  ];

  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    
  }
  ngOnInit(): void {
    console.log('List');
    this.dataService.searchEmployee_Roles('', 1, 10, '', '').subscribe((result: any)=> {
      this.employee_rolesList = result.data;
    });
  }

  searchEmployee_Roles(searchText: any) {
    this.dataService.searchEmployee_Roles(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.employee_rolesList = data.records;
      console.log('data: ', data);
    });
  }

deleteRecord(selectedId: any) {
    this.selectedId = selectedId;
  }

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
    if(ev.detail.role === 'confirm')
    {
      this.dataService.updateEmployee_RolesStatus(this.selectedId)
    }
  }

}

