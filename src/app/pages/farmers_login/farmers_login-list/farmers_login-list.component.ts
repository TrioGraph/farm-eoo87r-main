import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farmers_login-list',
  templateUrl: './farmers_login-list.component.html',
  styleUrls: ['./farmers_login-list.component.scss'],
})
export class Farmers_LoginListComponent  implements OnInit {

  public farmers_loginList: any;
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
    this.dataService.searchFarmers_Login('', 1, 10, '', '').subscribe((result: any)=> {
      this.farmers_loginList = result.data;
    });
  }

  searchFarmers_Login(searchText: any) {
    this.dataService.searchFarmers_Login(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.farmers_loginList = data.records;
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
      this.dataService.updateFarmers_LoginStatus(this.selectedId)
    }
  }

}

