import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farmer_login_visit_logs-list',
  templateUrl: './farmer_login_visit_logs-list.component.html',
  styleUrls: ['./farmer_login_visit_logs-list.component.scss'],
})
export class Farmer_login_visit_logsListComponent  implements OnInit {

  public farmer_login_visit_logsList: any;
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
    this.dataService.searchFarmer_login_visit_logs('', 1, 10, '', '').subscribe((result: any)=> {
      this.farmer_login_visit_logsList = result.data;
    });
  }

  searchFarmer_login_visit_logs(searchText: any) {
    this.dataService.searchFarmer_login_visit_logs(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.farmer_login_visit_logsList = data.records;
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
      this.dataService.updateFarmer_login_visit_logsStatus(this.selectedId)
    }
  }

}

