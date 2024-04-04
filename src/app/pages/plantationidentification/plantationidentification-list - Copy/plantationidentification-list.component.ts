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
}

