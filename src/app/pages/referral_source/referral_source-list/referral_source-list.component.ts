import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-referral_source-list',
  templateUrl: './referral_source-list.component.html',
  styleUrls: ['./referral_source-list.component.scss'],
})
export class Referral_SourceListComponent  implements OnInit {

  public referral_sourceList: any;
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
    this.dataService.searchReferral_Source('', 1, 10, '', '').subscribe((result: any)=> {
      this.referral_sourceList = result.data;
    });
  }

  searchReferral_Source(searchText: any) {
    this.dataService.searchReferral_Source(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.referral_sourceList = data.records;
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
      this.dataService.updateReferral_SourceStatus(this.selectedId)
    }
  }

}

