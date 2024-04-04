import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-plantationidentification-list',
  templateUrl: './plantationidentification-list.component.html',
  styleUrls: ['./plantationidentification-list.component.scss'],
})
export class PlantationIdentificationListComponent  implements OnInit {

  public plantationidentificationList: any;
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
    this.dataService.searchPlantationIdentification('', 1, 10, '', '').subscribe((result: any)=> {
      this.plantationidentificationList = result.data;
    });
  }

  searchPlantationIdentification(searchText: any) {
    this.dataService.searchPlantationIdentification(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.plantationidentificationList = data.records;
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
      this.dataService.updatePlantationIdentificationStatus(this.selectedId)
    }
  }

}

