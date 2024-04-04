import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nursary_batches-list',
  templateUrl: './nursary_batches-list.component.html',
  styleUrls: ['./nursary_batches-list.component.scss'],
})
export class Nursary_BatchesListComponent  implements OnInit {

  public nursary_batchesList: any;
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
    this.dataService.searchNursary_Batches('', 1, 10, '', '').subscribe((result: any)=> {
      this.nursary_batchesList = result.data;
    });
  }

  searchNursary_Batches(searchText: any) {
    this.dataService.searchNursary_Batches(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.nursary_batchesList = data.records;
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
      this.dataService.updateNursary_BatchesStatus(this.selectedId)
    }
  }

}

