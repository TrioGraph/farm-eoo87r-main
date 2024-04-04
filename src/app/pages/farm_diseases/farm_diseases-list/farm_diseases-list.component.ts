import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farm_diseases-list',
  templateUrl: './farm_diseases-list.component.html',
  styleUrls: ['./farm_diseases-list.component.scss'],
})
export class Farm_DiseasesListComponent  implements OnInit {

  public farm_diseasesList: any;
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
    this.dataService.searchFarm_Diseases('', 1, 10, '', '').subscribe((result: any)=> {
      this.farm_diseasesList = result.data;
    });
  }

  searchFarm_Diseases(searchText: any) {
    this.dataService.searchFarm_Diseases(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.farm_diseasesList = data.records;
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
      this.dataService.updateFarm_DiseasesStatus(this.selectedId)
    }
  }

}

