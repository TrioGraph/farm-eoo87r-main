import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-authorisation-list',
  templateUrl: './authorisation-list.component.html',
  styleUrls: ['./authorisation-list.component.scss'],
})
export class AuthorisationListComponent  implements OnInit {

  public authorisationList: any;
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
    this.dataService.searchAuthorisation('', 1, 10, '', '').subscribe((result: any)=> {
      this.authorisationList = result.data;
    });
  }

  searchAuthorisation(searchText: any) {
    this.dataService.searchAuthorisation(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.authorisationList = data.records;
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
      this.dataService.updateAuthorisationStatus(this.selectedId)
    }
  }

}

