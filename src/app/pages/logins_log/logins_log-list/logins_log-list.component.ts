import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-logins_log-list',
  templateUrl: './logins_log-list.component.html',
  styleUrls: ['./logins_log-list.component.scss'],
})
export class Logins_LogListComponent  implements OnInit {

  public logins_logList: any;
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
    this.dataService.searchLogins_Log('', 1, 10, '', '').subscribe((result: any)=> {
      this.logins_logList = result.data;
    });
  }

  searchLogins_Log(searchText: any) {
    this.dataService.searchLogins_Log(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.logins_logList = data.records;
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
      this.dataService.updateLogins_LogStatus(this.selectedId)
    }
  }

}

