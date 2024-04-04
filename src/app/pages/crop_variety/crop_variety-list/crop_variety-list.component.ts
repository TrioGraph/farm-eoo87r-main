import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-crop_variety-list',
  templateUrl: './crop_variety-list.component.html',
  styleUrls: ['./crop_variety-list.component.scss'],
})
export class Crop_VarietyListComponent  implements OnInit {

  public crop_varietyList: any;
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
    this.dataService.searchCrop_Variety('', 1, 10, '', '').subscribe((result: any)=> {
      this.crop_varietyList = result.data;
    });
  }

  searchCrop_Variety(searchText: any) {
    this.dataService.searchCrop_Variety(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.crop_varietyList = data.records;
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
      this.dataService.updateCrop_VarietyStatus(this.selectedId)
    }
  }

}

