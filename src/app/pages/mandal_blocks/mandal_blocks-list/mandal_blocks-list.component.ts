import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mandal_blocks-list',
  templateUrl: './mandal_blocks-list.component.html',
  styleUrls: ['./mandal_blocks-list.component.scss'],
})
export class Mandal_BlocksListComponent  implements OnInit {

  public mandal_blocksList: any;
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
    this.dataService.searchMandal_Blocks('', 1, 10, '', '').subscribe((result: any)=> {
      this.mandal_blocksList = result.data;
    });
  }

  searchMandal_Blocks(searchText: any) {
    this.dataService.searchMandal_Blocks(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.mandal_blocksList = data.records;
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
      this.dataService.updateMandal_BlocksStatus(this.selectedId)
    }
  }

}

