import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farmer_group-list',
  templateUrl: './farmer_group-list.component.html',
  styleUrls: ['./farmer_group-list.component.scss'],
})
export class Farmer_GroupListComponent  implements OnInit {

  public farmer_groupList: any;
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
    this.dataService.searchFarmer_Group('', 1, 10, '', '').subscribe((result: any)=> {
      this.farmer_groupList = result.data;
    });
  }

  searchFarmer_Group(searchText: any) {
    this.dataService.searchFarmer_Group(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.farmer_groupList = data.records;
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
      this.dataService.updateFarmer_GroupStatus(this.selectedId)
    }
  }

}

