import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farmfield-list',
  templateUrl: './farmfield-list.component.html',
  styleUrls: ['./farmfield-list.component.scss'],
})
export class FarmFieldListComponent  implements OnInit {

  public farmfieldList: any;
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
    this.dataService.searchFarmField('', 1, 10, '', '').subscribe((result: any)=> {
      this.farmfieldList = result.data;
    });
  }

  searchFarmField(searchText: any) {
    this.dataService.searchFarmField(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.farmfieldList = data.records;
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
      this.dataService.updateFarmFieldStatus(this.selectedId)
    }
  }

}

