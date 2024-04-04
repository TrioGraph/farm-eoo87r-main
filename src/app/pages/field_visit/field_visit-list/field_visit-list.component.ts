import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-field_visit-list',
  templateUrl: './field_visit-list.component.html',
  styleUrls: ['./field_visit-list.component.scss'],
})
export class Field_VisitListComponent  implements OnInit {

  public field_visitList: any;
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
    this.dataService.searchField_Visit('', 1, 10, '', '').subscribe((result: any)=> {
      this.field_visitList = result.data;
    });
  }

  searchField_Visit(searchText: any) {
    this.dataService.searchField_Visit(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.field_visitList = data.records;
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
      this.dataService.updateField_VisitStatus(this.selectedId)
    }
  }

}

