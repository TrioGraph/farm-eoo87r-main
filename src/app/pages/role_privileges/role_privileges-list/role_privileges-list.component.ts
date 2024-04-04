import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-role_privileges-list',
  templateUrl: './role_privileges-list.component.html',
  styleUrls: ['./role_privileges-list.component.scss'],
})
export class Role_PrivilegesListComponent  implements OnInit {

  public role_privilegesList: any;
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
    this.dataService.searchRole_Privileges('', 1, 10, '', '').subscribe((result: any)=> {
      this.role_privilegesList = result.data;
    });
  }

  searchRole_Privileges(searchText: any) {
    this.dataService.searchRole_Privileges(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.role_privilegesList = data.records;
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
      this.dataService.updateRole_PrivilegesStatus(this.selectedId)
    }
  }

}

