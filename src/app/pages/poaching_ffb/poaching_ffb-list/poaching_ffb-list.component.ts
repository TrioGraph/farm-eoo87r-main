import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-poaching_ffb-list',
  templateUrl: './poaching_ffb-list.component.html',
  styleUrls: ['./poaching_ffb-list.component.scss'],
})
export class Poaching_FFBListComponent  implements OnInit {

  public poaching_ffbList: any;
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
    this.dataService.searchPoaching_FFB('', 1, 10, '', '').subscribe((result: any)=> {
      this.poaching_ffbList = result.data;
    });
  }

  searchPoaching_FFB(searchText: any) {
    this.dataService.searchPoaching_FFB(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.poaching_ffbList = data.records;
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
      this.dataService.updatePoaching_FFBStatus(this.selectedId)
    }
  }

}

