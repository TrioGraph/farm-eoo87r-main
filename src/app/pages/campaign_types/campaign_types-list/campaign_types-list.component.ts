import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-campaign_types-list',
  templateUrl: './campaign_types-list.component.html',
  styleUrls: ['./campaign_types-list.component.scss'],
})
export class Campaign_TypesListComponent  implements OnInit {

  public campaign_typesList: any;
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
    this.dataService.searchCampaign_Types('', 1, 10, '', '').subscribe((result: any)=> {
      this.campaign_typesList = result.data;
    });
  }

  searchCampaign_Types(searchText: any) {
    this.dataService.searchCampaign_Types(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.campaign_typesList = data.records;
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
      this.dataService.updateCampaign_TypesStatus(this.selectedId)
    }
  }

}

