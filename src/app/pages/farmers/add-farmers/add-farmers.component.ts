import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-farmers',
  templateUrl: './add-farmers.component.html',
  styleUrls: ['./add-farmers.component.css']
})
export class AddFarmersComponent implements OnInit {

  public farmersDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  title!: string;
  fileList: Map<string, object> = new Map<string, object>();
  isInEditMode: boolean = true;
  isLoading = false;

  Farmer_Code_data : any;
First_Name_data : any;
Last_Name_data : any;
Father_Name_data : any;
Gender_data : any;
Category_data : any;
Farm_Code_data : any;
Village_Code_data : any;
Mandal_Code_data : any;
Longitude_data : any;
Latitude_data : any;
No_Of_Kms_data : any;
Transport_Amt_Per_Ton_data : any;
Survey_No_data : any;
Mobile_Number1_data : any;
Mobile_Number2_data : any;
Lease_Code_data : any;
Farmer_Photo_Id_data : any;
Farmer_Photo_Id : any;
Farmer_Photo_IdInput : any;
Year_data : any;
Family_Code_data : any;
Scheme_data : any;
Area_Type_data : any;
Water_Source_data : any;
Variety_data : any;
Plantation_Date_data : any;
Invoice_Date_data : any;
Hectors_data : any;
No_Of_Plants_data : any;
Total_Cost_Of_Plants_data : any;
Subsidy_Allowed_data : any;
Farmer_Share_data : any;
Present_Survival_Hect_data : any;
Present_Survival_Plants_data : any;
Bank_Name_data : any;
Branch_data : any;
Account_No_data : any;
IFSC_Code_data : any;
Aadhar_No_data : any;
Email_data : any;
Supervisor_Id_data : any;
Tally_FarmerCode_data : any;
Land_Photo_Id_data : any;
Land_Photo_Id : any;
Land_Photo_IdInput : any;
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
        farmer_Code: ['', [Validators.required]],
first_Name: ['', [Validators.required]],
last_Name: ['', [Validators.required]],
father_Name: ['', [Validators.required]],
gender: ['', [Validators.required]],
category: ['', [Validators.required]],
farm_Code: ['', [Validators.required]],
village_Code: ['', [Validators.required]],
mandal_Code: ['', [Validators.required]],
longitude: ['', [Validators.required]],
latitude: ['', [Validators.required]],
no_Of_Kms: ['', [Validators.required]],
transport_Amt_Per_Ton: ['', [Validators.required]],
survey_No: ['', [Validators.required]],
mobile_Number1: ['', [Validators.required]],
mobile_Number2: ['', [Validators.required]],
lease_Code: ['', [Validators.required]],
farmer_Photo_Id: ['', [Validators.required]],
year: ['', [Validators.required]],
family_Code: ['', [Validators.required]],
scheme: ['', [Validators.required]],
area_Type: ['', [Validators.required]],
water_Source: ['', [Validators.required]],
variety: ['', [Validators.required]],
plantation_Date: ['', [Validators.required]],
invoice_Date: ['', [Validators.required]],
hectors: ['', [Validators.required]],
no_Of_Plants: ['', [Validators.required]],
total_Cost_Of_Plants: ['', [Validators.required]],
subsidy_Allowed: ['', [Validators.required]],
farmer_Share: ['', [Validators.required]],
present_Survival_Hect: ['', [Validators.required]],
present_Survival_Plants: ['', [Validators.required]],
bank_Name: ['', [Validators.required]],
branch: ['', [Validators.required]],
account_No: ['', [Validators.required]],
iFSC_Code: ['', [Validators.required]],
aadhar_No: ['', [Validators.required]],
email: ['', [Validators.required]],
supervisor_Id: ['', [Validators.required]],
tally_FarmerCode: ['', [Validators.required]],
land_Photo_Id: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

     this.dataService.getGenderLookup().subscribe((result: any) => { 
	 this.Gender_data = result; 
}); 
this.dataService.GetVillagesLookup('','').subscribe((result: any) => { 
	 this.Village_Code_data = result; 
}); 
this.dataService.getMandal_BlocksLookup().subscribe((result: any) => { 
	 this.Mandal_Code_data = result; 
}); 
this.dataService.getPhotosLookup().subscribe((result: any) => { 
	 this.Farmer_Photo_Id_data = result; 
}); 
this.dataService.getEmployeesLookup().subscribe((result: any) => { 
	 this.Supervisor_Id_data = result; 
}); 
this.dataService.getPhotosLookup().subscribe((result: any) => { 
	 this.Land_Photo_Id_data = result; 
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
    this.router.navigateByUrl('farm/farmers-list')
  }
  
async addNewRecord() {
    let tempFormData: any = {};
    tempFormData.insertColumnsList = this.ionicForm.value;
    // tempFormData.insertColumnsList['field_Id'] = 123;
    tempFormData.insertColumnsList['isActive'] = true;
    tempFormData.tableName = 'Farmers';
    // tempFormData.id = '1234567';

       this.isLoading = true;
      this.dataService.insertTableByColumns(tempFormData).subscribe(
      async (data: any) => {
        this.id = data;
        this.title = 'Farmers: ' + this.id;
        const toast = await this.toastController.create({
          message: 'Record added Successfully',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
        // this.router.navigateByUrl('farm/farmers-list');
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

    tempFormData.tableName = 'Farmers';
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

        this.router.navigateByUrl('farm/farmers-list');
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
        if (propertyName === 'Farmer_Photo_Id') {
      this.Farmer_Photo_Id = URL.createObjectURL(tempFilesList[0]);
    }
    if (propertyName === 'Land_Photo_Id') {
      this.Land_Photo_Id = URL.createObjectURL(tempFilesList[0]);
    }
    
  }

  uploadImage(propertyName: any) {
    if (!this.id) {
      this.addNewRecord();
    }
    let tempFile = this.fileList.get(propertyName);
    let formData: FormData = new FormData();
    formData.append('uploadFile', tempFile as File, (tempFile as File).name);
    formData.append('tableName', 'Farmers');
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
