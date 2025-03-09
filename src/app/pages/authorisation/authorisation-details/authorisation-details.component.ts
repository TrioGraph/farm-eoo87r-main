import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet, ToastController, IonModal, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Privileges } from 'src/app/enum/privileges';
import { TableColumn } from 'src/app/controls/c-table/TableColumn';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'authorisation-details',
  templateUrl: './authorisation-details.component.html',
  styleUrls: ['./authorisation-details.component.css']
})
export class AuthorisationDetailsComponent implements OnInit {

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


  isInEditMode: boolean = false;
  Role_id_data : any;

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
  selectedRole: any;

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
    this.allowToAdd = localStorage.getItem('AccessList')?.split(',').includes(Privileges.AddAuthorisation.toString()) ? true : false; 
    this.allowToEdit = localStorage.getItem('AccessList')?.split(',').includes(Privileges.UpdateAuthorisation.toString()) ? true : false;  
    this.allowToDelete = localStorage.getItem('AccessList')?.split(',').includes(Privileges.DeleteAuthorisation.toString()) ? true : false;  
    
    this.loadColumns();
    this.dataService.getRolesLookup().subscribe((result: any) => { 
      this.Role_id_data = result; 
      this.dataService.userInfo.subscribe(userInfo => {
        this.selectedRole = userInfo['roleId'];
        console.log('ROle ID : ' , userInfo['roleId']);
      })
   }); 
    this.dataService.getPrivilegesLookup().subscribe((result: any) => {
      this.authorisationList = result;
      this.authorisationList.forEach(element => { 
        // element.hasAccess = (element.hasAccess == 'true') ? true : false;
        element.hasAccess = true;
      });
      console.log('Updated data :', this.authorisationList);
   });
  }

  loadColumns() {
    this.columnsList = [
      {bindingName : 'name', displayName: 'Name', hide: false, width: 30, type: 'text'},
      {bindingName : 'hasAccess', displayName: 'Has Access', hide: false, width: 30, type: 'checkbox'},
    ]
  }


  getPage(page: any) {
    
  }

  searchAuthorisation(searchText: any) {
    this.searchText = searchText;
    this.searchFunction();
   }

  searchFunction() {
    
  }

setRecordId(selectedId: any) {
    this.selectedId = selectedId;
  }

  roleChange(event: any) {
    this.selectedRole = event.detail.value;
    this.dataService.getRole_PrivilegesByRole(this.selectedRole).subscribe((result: any) => {
      this.authorisationList.forEach((element1: any) => element1.hasAccess = false);
      this.authorisationList.forEach(element => {
        result.forEach((element1: any) => {
          if(element.id.toString() == element1)
          {
            element.hasAccess = true;
          } 
        })
      });
   })
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
  
  editClick(event: any){
    console.log('editClick');
    this.isInEditMode = true;
  }
  
  cancelClick(event: any){
    console.log('cancelClick');
    this.isInEditMode = false;
  }

  saveClick(event: any){
    console.log('saveClick');
    let result = this.authorisationList.filter(a => a.hasAccess == true).map(elem => elem.id);
    console.log('result :', result);
    this.dataService.updateRole_PrivilegesByRole(result, this.selectedRole).subscribe(async(result: any)=> {
      const toast = await this.toastController.create({
        message: 'Record updated Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.isLoading = false;
      this.isInEditMode = false;
  },
(async(error: any) => {
      console.error('Error handler:', error);
      const toast = await this.toastController.create({
        message: 'Error occurred while updating the record',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.isLoading = false;
      this.isInEditMode = true;
    }));
  }
  

}
