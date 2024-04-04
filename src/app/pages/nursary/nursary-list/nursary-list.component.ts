import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nursary-list',
  templateUrl: './nursary-list.component.html',
  styleUrls: ['./nursary-list.component.scss'],
})
export class NursaryListComponent  implements OnInit {

  public nursaryList: any;
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
    this.dataService.searchNursary('', 1, 10, '', '').subscribe((result: any)=> {
      this.nursaryList = result.data;
    });
  }

  searchNursary(searchText: any) {
    this.dataService.searchNursary(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.nursaryList = data.records;
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
      this.dataService.updateNursaryStatus(this.selectedId)
    }
  }

}

