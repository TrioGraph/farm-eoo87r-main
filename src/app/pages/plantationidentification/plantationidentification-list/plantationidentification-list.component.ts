import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { Privileges } from 'src/app/enum/privileges';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-plantationidentification-list',
  templateUrl: './plantationidentification-list.component.html',
  styleUrls: ['./plantationidentification-list.component.scss'],
})
export class PlantationIdentificationListComponent  implements OnInit {

  public plantationidentificationList: any;
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
    private routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {
    let startDate = this.route.snapshot.paramMap.get('startDate');
    this.getData(startDate);
    this.allowToAdd = localStorage.getItem('AccessList')?.split(',').includes(Privileges.AddFarmertripsheets.toString()) ? true : false; 
    this.allowToEdit = localStorage.getItem('AccessList')?.split(',').includes(Privileges.UpdateFarmertripsheets.toString()) ? true : false;  
    this.allowToDelete = localStorage.getItem('AccessList')?.split(',').includes(Privileges.DeleteFarmertripsheets.toString()) ? true : false;  
  
  }

  getData(startDate: any) {
    if(startDate && startDate.Length > 0) {
        this.dataService.searchPlantationIdentification('', 1, 10, '', '', false, 'm.Created_Date','string', '>', startDate, '').subscribe((result: any)=> {
          this.plantationidentificationList = result.data;
          // this.plantationidentificationList =  new MatTableDataSource(result.data);
      });
    }
    else {
      this.dataService.searchPlantationIdentification('', 1, 10, '', '', false, '','', '', '', '').subscribe((result: any)=> {
        this.plantationidentificationList = result.data;
        });
    }
  }

  searchPlantationIdentification(searchText: any) {
    this.dataService.searchPlantationIdentification(searchText, 1, 10, '', '', true, 'm.Create_Date', 'string', '>', searchText, '').subscribe((result: any)=> {
      this.plantationidentificationList = result.data;
    });
  }

deleteRecord(selectedId: any) {
    this.dataService.updatePlantationIdentificationStatus(selectedId).subscribe((data: any)=> {
      console.log('Deleted Successfully');
      alert("Deleted Successfully");
      this.getData(undefined);
    });
  }

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
    if(ev.detail.role === 'confirm')
    {
      this.dataService.updatePlantationIdentificationStatus(this.selectedId)
    }
  }

}

