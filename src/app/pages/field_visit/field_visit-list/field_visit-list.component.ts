import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { CustomDatePipe } from '../../../pipes/custom-date.pipe';
import { Privileges } from 'src/app/enum/privileges';
@Component({
  selector: 'app-field-visit-list',
  templateUrl: './field_visit-list.component.html',
  styleUrls: ['./field_visit-list.component.scss'],
})
export class Field_VisitListComponent  implements OnInit {

  public field_visitList: any;
  public searchText: any;
  public selectedId: any;
  allowToAdd = false;
  allowToEdit = false;
  allowToDelete = false;

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
    this.dataService.searchField_Visit('', 1, 10, '', '',false, '', '', '', '', '').subscribe((result: any)=> {
      this.field_visitList = result.data;
    });
    this.allowToAdd = localStorage.getItem('AccessList')?.split(',').includes(Privileges.AddFarmertripsheets.toString()) ? true : false; 
    this.allowToEdit = localStorage.getItem('AccessList')?.split(',').includes(Privileges.UpdateFarmertripsheets.toString()) ? true : false;  
    this.allowToDelete = localStorage.getItem('AccessList')?.split(',').includes(Privileges.DeleteFarmertripsheets.toString()) ? true : false;  
  
  }

  searchField_Visit(searchText: any) {
    this.dataService.searchField_Visit(searchText, 1, 10, '', '', false, '', '', '', '', '').subscribe((result: any)=> {
      this.field_visitList = result.data;
      console.log('data: ', result.data);
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

