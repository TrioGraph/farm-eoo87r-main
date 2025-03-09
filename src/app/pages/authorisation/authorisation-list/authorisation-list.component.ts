import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, IonRouterOutlet, LoadingController, ToastController } from '@ionic/angular';
import { TableColumn } from 'src/app/controls/c-table/TableColumn';
import { Privileges } from 'src/app/enum/privileges';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-authorisation-list',
  templateUrl: './authorisation-list.component.html',
  styleUrls: ['./authorisation-list.component.scss'],
})
export class AuthorisationListComponent  implements OnInit {

  public authorisationList: any[] = [];
  public searchText: string = '';
  public selectedId: any;
  totalRowsCount: number = 1;
  pageNumber: number = 1;
  pageSize: number = 10;
  sortColumn: string = '';
  sortOrder: string = '';
  isLoading = false;
  allowToAdd = false;
  allowToEdit = false;
  allowToDelete = false;


  columnsList: TableColumn[] = [];

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
    private route: ActivatedRoute,    
    private loadingCtrl: LoadingController,
    private toastController: ToastController
) {
    
  }
  ngOnInit(): void {
      
    let startDate = this.route.snapshot.paramMap.get('startDate');
    this.getData(startDate);
    this.allowToAdd = localStorage.getItem('AccessList')?.split(',').includes(Privileges.AddAuthorisation.toString()) ? true : false; 
    this.allowToEdit = localStorage.getItem('AccessList')?.split(',').includes(Privileges.UpdateAuthorisation.toString()) ? true : false;  
    this.allowToDelete = localStorage.getItem('AccessList')?.split(',').includes(Privileges.DeleteAuthorisation.toString()) ? true : false;  
    
    this.loadColumns();
  }

  loadColumns() {
    this.columnsList = [
      {bindingName : 'Role', displayName: 'Role', hide: false, width: 30, type: 'text'},
      {bindingName : 'Privilege', displayName: 'Privilege', hide: false, width: 30, type: 'text'},
      {bindingName : 'IsActive', displayName: 'IsActive', hide: false, width: 30, type: 'boolean'}
    ]
  }
getData(startDate: any) {
    this.isLoading = true;
    if(startDate && startDate.Length > 0) {
        this.dataService.searchRole_Privileges(this.searchText, this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, true, 'm.Created_Date','string', '>', startDate, '').subscribe((result: any)=> {
        this.authorisationList = result.data;
        this.totalRowsCount = result.TotalRecordsCount;
         this.isLoading = false;
	},
(async(error: any) => {
      console.error('Error handler:', error);
      const toast = await this.toastController.create({
        message: 'Error occurred while getting the record',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.isLoading = false;

    }));
    }
    else {
      this.dataService.searchRole_Privileges(this.searchText, this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, false, '','', '', '', '').subscribe((result: any)=> {
        this.authorisationList = result.data;
        this.totalRowsCount = result.TotalRecordsCount;
        this.isLoading = false;
	},
(async(error: any) => {
      console.error('Error handler:', error);
      const toast = await this.toastController.create({
        message: 'Error occurred while getting the record',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.isLoading = false;

    }));
    }
  }

  getPage(page: any) {
    console.log('page : ', page);
    this.pageNumber = page;
    this.isLoading = true;
    this.dataService.searchRole_Privileges(this.searchText, this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, false, '','', '', '', '').subscribe((result: any)=> {
      this.authorisationList = result.data;
      this.totalRowsCount = result.TotalRecordsCount;
      this.isLoading = false;
     },
(async(error: any) => {
      console.error('Error handler:', error);
      const toast = await this.toastController.create({
        message: 'Error occurred while getting records',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.isLoading = false;

    }));
  }

  searchAuthorisation(searchText: any) {
    this.searchText = searchText;
    this.searchFunction();
   }

  searchFunction() {
    this.isLoading = true;
    this.dataService.searchRole_Privileges(this.searchText, this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, false, '','', '', '', '').subscribe((result: any)=> {
      this.authorisationList = result.data;
      this.totalRowsCount = result.TotalRecordsCount;
      this.isLoading = false;
     },
(async(error: any) => {
      console.error('Error handler:', error);
      const toast = await this.toastController.create({
        message: 'Error occurred while getting records',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.isLoading = false;

    }));
  }

setRecordId(selectedId: any) {
    this.selectedId = selectedId;
  }

  deleteRecord(ev: any) {
    if(ev.detail.role === 'confirm')
    {
      this.isLoading = true;
      this.dataService.updateAuthorisationStatus(this.selectedId).subscribe(async(result: any)=> {
      this.isLoading = false;
	const toast = await this.toastController.create({
        message: 'Record deleted Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
     },
(async(error: any) => {
      console.error('Error handler:', error);
      const toast = await this.toastController.create({
        message: 'Error occurred while deleting the record',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.isLoading = false;

    }));

    }
  }

}



