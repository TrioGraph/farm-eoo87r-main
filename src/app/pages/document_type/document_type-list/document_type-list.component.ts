import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-document_type-list',
  templateUrl: './document_type-list.component.html',
  styleUrls: ['./document_type-list.component.scss'],
})
export class Document_TypeListComponent  implements OnInit {

  public document_typeList: any;
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
    this.dataService.searchDocument_Type('', 1, 10, '', '').subscribe((result: any)=> {
      this.document_typeList = result.data;
    });
  }

  searchDocument_Type(searchText: any) {
    this.dataService.searchDocument_Type(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.document_typeList = data.records;
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
      this.dataService.updateDocument_TypeStatus(this.selectedId)
    }
  }

}

