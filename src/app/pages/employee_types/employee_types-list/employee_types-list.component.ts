import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee_types-list',
  templateUrl: './employee_types-list.component.html',
  styleUrls: ['./employee_types-list.component.scss'],
})
export class Employee_TypesListComponent  implements OnInit {

  public employee_typesList: any;
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
    this.dataService.searchEmployee_Types('', 1, 10, '', '').subscribe((result: any)=> {
      this.employee_typesList = result.data;
    });
  }

  searchEmployee_Types(searchText: any) {
    this.dataService.searchEmployee_Types(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.employee_typesList = data.records;
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
      this.dataService.updateEmployee_TypesStatus(this.selectedId)
    }
  }

}

