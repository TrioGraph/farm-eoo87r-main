import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-logins-list',
  templateUrl: './logins-list.component.html',
  styleUrls: ['./logins-list.component.scss'],
})
export class LoginsListComponent  implements OnInit {

  public loginsList: any;
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
    this.dataService.searchLogins('', 1, 10, '', '').subscribe((result: any)=> {
      this.loginsList = result.data;
    });
  }

  searchLogins(searchText: any) {
    this.dataService.searchLogins(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.loginsList = data.records;
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
      this.dataService.updateLoginsStatus(this.selectedId)
    }
  }

}

