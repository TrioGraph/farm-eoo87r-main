import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-farmfield',
  templateUrl: './add-farmfield.component.html',
  styleUrls: ['./add-farmfield.component.css']
})
export class AddFarmFieldComponent implements OnInit {

  public farmfieldDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  title!: string;
  fileList: Map<string, object> = new Map<string, object>();
  isInEditMode: boolean = true;
  isLoading = false;

  Tally_Field_Id_data : any;
Farmer_Id_data : any;
Village_Id_data : any;
Survey_Nos_data : any;
Mapping_Data_Id_data : any;
Gate_GPS_Lattitude_data : any;
Gate_GPS_Longitude_data : any;
Farmer_Supervisor_Id_data : any;
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
        tally_Field_Id: ['', [Validators.required]],
farmer_Id: ['', [Validators.required]],
village_Id: ['', [Validators.required]],
survey_Nos: ['', [Validators.required]],
mapping_Data_Id: ['', [Validators.required]],
gate_GPS_Lattitude: ['', [Validators.required]],
gate_GPS_Longitude: ['', [Validators.required]],
farmer_Supervisor_Id: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

     this.dataService.getFarmersLookup('').subscribe((result: any) => { 
	 this.Farmer_Id_data = result; 
}); 
this.dataService.GetVillagesLookup('').subscribe((result: any) => { 
	 this.Village_Id_data = result; 
}); 
this.dataService.getEmployeesLookup().subscribe((result: any) => { 
	 this.Farmer_Supervisor_Id_data = result; 
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
    this.router.navigateByUrl('farm/farmfield-list')
  }
  
async addNewRecord() {
    let tempFormData: any = {};
    tempFormData.insertColumnsList = this.ionicForm.value;
    // tempFormData.insertColumnsList['field_Id'] = 123;
    tempFormData.insertColumnsList['isActive'] = true;
    tempFormData.tableName = 'FarmField';
    // tempFormData.id = '1234567';

       this.isLoading = true;
      this.dataService.insertTableByColumns(tempFormData).subscribe(
      async (data: any) => {
        this.id = data;
        this.title = 'FarmField: ' + this.id;
        const toast = await this.toastController.create({
          message: 'Record added Successfully',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
        // this.router.navigateByUrl('farm/farmfield-list');
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

    tempFormData.tableName = 'FarmField';
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

        this.router.navigateByUrl('farm/farmfield-list');
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
    formData.append('tableName', 'FarmField');
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
