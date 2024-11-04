import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, IonRouterOutlet, LoadingController, ToastController } from '@ionic/angular';
import { Privileges } from 'src/app/enum/privileges';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-villages-list',
  templateUrl: './villages-list.component.html',
  styleUrls: ['./villages-list.component.scss'],
})
export class VillagesListComponent  implements OnInit {

  public villagesList: any;
  public searchText: any;
  public selectedId: any;
  isLoading = false;
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
    private route: ActivatedRoute,    
    private loadingCtrl: LoadingController,
    private toastController: ToastController
) {
    
  }
  ngOnInit(): void {
      
    let startDate = this.route.snapshot.paramMap.get('startDate');
    this.getData(startDate);
    this.allowToAdd = localStorage.getItem('AccessList')?.split(',').includes(Privileges.AddVillages.toString()) ? true : false; 
    this.allowToEdit = localStorage.getItem('AccessList')?.split(',').includes(Privileges.UpdateVillages.toString()) ? true : false;  
    this.allowToDelete = localStorage.getItem('AccessList')?.split(',').includes(Privileges.DeleteVillages.toString()) ? true : false;  
  }

getData(startDate: any) {
    this.isLoading = true;
    if(startDate && startDate.Length > 0) {
        this.dataService.searchVillages('', 1, 10, '', '', true, 'm.Created_Date','string', '>', startDate, '').subscribe((result: any)=> {
        this.villagesList = result.data;
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
      this.dataService.searchVillages('', 1, 10, '', '', false, '','', '', '', '').subscribe((result: any)=> {
        this.villagesList = result.data;
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

  searchVillages(searchText: any) {
    this.isLoading = true;
    this.dataService.searchVillages(searchText, 1, 10, '', '', false, '','', '', '', '').subscribe((result: any)=> {
      this.villagesList = result.data;
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
      this.dataService.updateVillagesStatus(this.selectedId).subscribe(async(result: any)=> {
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

