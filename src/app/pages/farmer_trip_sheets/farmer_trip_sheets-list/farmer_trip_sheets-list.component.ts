import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farmer_trip_sheets-list',
  templateUrl: './farmer_trip_sheets-list.component.html',
  styleUrls: ['./farmer_trip_sheets-list.component.scss'],
})
export class Farmer_trip_sheetsListComponent  implements OnInit {

  public farmer_trip_sheetsList: any;
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
    this.dataService.searchFarmer_trip_sheets('', 1, 10, '', '').subscribe((result: any)=> {
      this.farmer_trip_sheetsList = result.data;
    });
  }

  searchFarmer_trip_sheets(searchText: any) {
    this.dataService.searchFarmer_trip_sheets(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.farmer_trip_sheetsList = data.records;
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
      this.dataService.updateFarmer_trip_sheetsStatus(this.selectedId)
    }
  }

}

