import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.scss'],
})
export class DocumentsListComponent  implements OnInit {

  public documentsList: any;
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
    this.dataService.searchDocuments('', 1, 10, '', '').subscribe((result: any)=> {
      this.documentsList = result.data;
    });
  }

  searchDocuments(searchText: any) {
    this.dataService.searchDocuments(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.documentsList = data.records;
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
      this.dataService.updateDocumentsStatus(this.selectedId)
    }
  }

}

