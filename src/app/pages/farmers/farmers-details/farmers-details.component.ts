import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmers-details',
  templateUrl: './farmers-details.component.html',
  styleUrls: ['./farmers-details.component.css']
})
export class FarmersDetailsComponent implements OnInit {

  public farmersDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  formMode: any = 'View';

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
IsActive_data : any;

  
  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private toastController: ToastController
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

   this.dataService.getFarmersById(this.id).subscribe((data: any)=> {
      this.farmersDetails = data;
      this.ionicForm.patchValue(data);
    });

  }
 

  submitForm(): void {
      this.formMode = 'View';
    let tempFormData =  this.ionicForm.value;
    this.dataService.updateFarmers(this.id, tempFormData).subscribe(async(data: any) => {
      console.log('Record Updated Successfully');
	const toast = await this.toastController.create({
        message: 'Record updated Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
    },
(async(error: any) => {
      console.error('Error handler:', error);
      const toast = await this.toastController.create({
        message: 'Error occurred while updating the record',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
    })
    )
  }

  resetForm(e: MouseEvent) {
    //this.FarmService.resetForm(e, this.appsForm);
  }
  
  editForm(){
    this.formMode = 'Edit';
  }

  cancelForm(){
    this.formMode = 'View';
  }

  

}
