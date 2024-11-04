import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-farmer_trip_sheets',
  templateUrl: './add-farmer_trip_sheets.component.html',
  styleUrls: ['./add-farmer_trip_sheets.component.css']
})
export class AddFarmer_trip_sheetsComponent implements OnInit {

  public farmer_trip_sheetsDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  title!: string;
  fileList: Map<string, object> = new Map<string, object>();
  isInEditMode: boolean = true;
  isLoading = false;

  Arrived_Date_data : any;
Net_Weight_data : any;
Slip_No_data : any;
Collection_Centre_Received_data : any;
Farmer_Tally_Code_data : any;
Farmer_Field_Id_data : any;
IsActive_data : any;

  
  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private toastController: ToastController,
    private loadingCtrl: LoadingController
  ) {
    
  }

  ngOnInit(): void {
  this.ionicForm = this.formBuilder.group({
        arrived_Date: ['', [Validators.required]],
net_Weight: ['', [Validators.required]],
slip_No: ['', [Validators.required]],
collection_Centre_Received: ['', [Validators.required]],
farmer_Tally_Code: ['', [Validators.required]],
farmer_Field_Id: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

     this.dataService.getFarmFieldLookup().subscribe((result: any) => { 
	 this.Farmer_Field_Id_data = result; 
}); 


  }
 

  async submitForm() {
   if (this.id) {
      this.UpdateRecord();
    } else {
      this.addNewRecord();
    }    
  }

  resetForm(e: MouseEvent) {
        this.ionicForm.reset();
  }

  cancelForm() {
    this.router.navigateByUrl('farm/farmer_trip_sheets-list')
  }
  
async addNewRecord() {
    let tempFormData: any = {};
    tempFormData.insertColumnsList = this.ionicForm.value;
    // tempFormData.insertColumnsList['field_Id'] = 123;
    tempFormData.insertColumnsList['isActive'] = true;
    tempFormData.tableName = 'Farmer_trip_sheets';
    // tempFormData.id = '1234567';

       this.isLoading = true;
      this.dataService.insertTableByColumns(tempFormData).subscribe(
      async (data: any) => {
        this.id = data;
        this.title = 'Farmer_trip_sheets: ' + this.id;
        const toast = await this.toastController.create({
          message: 'Record added Successfully',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
        // this.router.navigateByUrl('farm/farmer_trip_sheets-list');
	this.isLoading = false;

      },
      async (error: any) => {
        console.error('Error handler:', error);
        const toast = await this.toastController.create({
          message: 'Error occurred while adding the record',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
	this.isLoading = false;

      }
    );
  }

  async UpdateRecord() {
    let tempFormData: any = {};

    tempFormData.updateColumnsList = this.ionicForm.value;

    tempFormData.tableName = 'Farmer_trip_sheets';
    tempFormData.primaryKeysList = { id: this.id };

    // tempFormData.id = '1234567';
    this.isLoading = true;

    this.dataService.updateTableByColumns(tempFormData).subscribe(
      async (data: any) => {
        const toast = await this.toastController.create({
          message: 'Record updated Successfully',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
	this.isLoading = false;

        this.router.navigateByUrl('farm/farmer_trip_sheets-list');
      },
      async (error: any) => {
        console.error('Error handler:', error);
        const toast = await this.toastController.create({
          message: 'Error occurred while adding the record',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
        this.isLoading = false;

      }
    );
  }


fileChange(event: any, propertyName: any) {
    let tempFilesList = event.target.files;
    if (tempFilesList.length < 1) {
      return;
    }
    this.fileList.set(propertyName, tempFilesList[0]);
        
  }

  uploadImage(propertyName: any) {
    if (!this.id) {
      this.addNewRecord();
    }
    let tempFile = this.fileList.get(propertyName);
    let formData: FormData = new FormData();
    formData.append('uploadFile', tempFile as File, (tempFile as File).name);
    formData.append('tableName', 'Farmer_trip_sheets');
    formData.append('primaryKeysList', this.id);
    formData.append('propertyName', propertyName);
    this.isLoading = true;

    this.dataService.uploadImage(formData).subscribe((data: any) => {
      console.log('File Upload Success');
       this.isLoading = false;
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

    })
    );
  }


}
