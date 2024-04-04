import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-plantationidentification',
  templateUrl: './add-plantationidentification.component.html',
  styleUrls: ['./add-plantationidentification.component.css'],
})
export class AddPlantationIdentificationComponent implements OnInit {
  public plantationidentificationDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  tab2Form!: FormGroup;
  tab3Form!: FormGroup;
  tab4Form!: FormGroup;
  tab5Form!: FormGroup;
  tab6Form!: FormGroup;
  tab7Form!: FormGroup;
  tab8Form!: FormGroup;

  Farmer_Code_data: any;
  First_Name_data: any;
  Last_Name_data: any;
  Father_Name_data: any;
  Gender_data: any;
  Category_data: any;
  Farm_Code_data: any;
  Village_Code_data: any;
  Mandal_Code_data: any;
  Longitude_data: any;
  Latitude_data: any;
  No_Of_Kms_data: any;
  Transport_Amt_Per_Ton_data: any;
  Survey_No_data: any;
  Mobile_Number1_data: any;
  Mobile_Number2_data: any;
  Lease_Code_data: any;
  Farmer_Photo_Id_data: any;
  Year_data: any;
  Family_Code_data: any;
  Scheme_data: any;
  Area_Type_data: any;
  Water_Source_data: any;
  Variety_data: any;
  Plantation_Date_data: any;
  Invoice_Date_data: any;
  Hectors_data: any;
  No_Of_Plants_data: any;
  Total_Cost_Of_Plants_data: any;
  Subsidy_Allowed_data: any;
  Farmer_Share_data: any;
  Present_Survival_Hect_data: any;
  Present_Survival_Plants_data: any;
  Bank_Name_data: any;
  Branch_data: any;
  Account_No_data: any;
  IFSC_Code_data: any;
  Aadhar_No_data: any;
  Email_data: any;
  Supervisor_Id_data: any;
  Tally_FarmerCode_data: any;
  Land_Photo_Id_data: any;
  IsActive_data: any;

  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.ionicForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      farmer_Code: ['', [Validators.required]],
      first_Name: ['', [Validators.required]],
      last_Name: ['', [Validators.required]],
      father_Name: ['', [Validators.required]],
      mobile_Number1: ['', [Validators.required]],
      mobile_Number2: ['', [Validators.required]],
      village_Code: ['', [Validators.required]],
      mandal_Code: ['', [Validators.required]],
    });

    this.tab2Form = this.formBuilder.group({
      gender: ['', [Validators.required]],
      category: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
    });

    this.tab3Form = this.formBuilder.group({
      farmer_Photo_Id: ['', [Validators.required]],
      land_Photo_Id: ['', [Validators.required]],
      aadhar_No: ['', [Validators.required]],
      bank_Name: ['', [Validators.required]],
    });

    this.tab4Form = this.formBuilder.group({
      tally_FarmerCode: ['', [Validators.required]],
      email: ['', [Validators.required]],
      supervisor_Id: ['', [Validators.required]],
      farmer_Share: ['', [Validators.required]],
      subsidy_Allowed: ['', [Validators.required]],
    });

    this.tab5Form = this.formBuilder.group({
      farm_Code: ['', [Validators.required]],
      survey_No: ['', [Validators.required]],
      lease_Code: ['', [Validators.required]],
      year: ['', [Validators.required]],
      no_Of_Kms: ['', [Validators.required]],
      transport_Amt_Per_Ton: ['', [Validators.required]],
    });

    this.tab6Form = this.formBuilder.group({
      variety: ['', [Validators.required]],
      family_Code: ['', [Validators.required]],
      scheme: ['', [Validators.required]],
      area_Type: ['', [Validators.required]],
      water_Source: ['', [Validators.required]],
    });

    this.tab7Form = this.formBuilder.group({
      hectors: ['', [Validators.required]],
      no_Of_Plants: ['', [Validators.required]],
      total_Cost_Of_Plants: ['', [Validators.required]],
      plantation_Date: ['', [Validators.required]],
      invoice_Date: ['', [Validators.required]],
      present_Survival_Hect: ['', [Validators.required]],
      present_Survival_Plants: ['', [Validators.required]],
    });

    this.tab8Form = this.formBuilder.group({
      branch: ['', [Validators.required]],
      account_No: ['', [Validators.required]],
      iFSC_Code: ['', [Validators.required]],
      isActive: ['', [Validators.required]],
    });

    this.id = this.route.snapshot.paramMap.get('id')!;

    this.dataService.getGenderLookup().subscribe((result: any) => {
      this.Gender_data = result;
    });
    this.dataService.getVillagesLookup().subscribe((result: any) => {
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

  async addNewRecord() {
    let tempFormData = this.ionicForm.value;
    // tempFormData.id = '1234567';
    console.log('tempFormData : ', tempFormData);
    this.dataService.addPlantationIdentification(tempFormData).subscribe(
      async (data: any) => {
        this.id = data.id;
        console.log('Record added with id:', this.id);
        const toast = await this.toastController.create({
          message: 'Record added Successfully',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
        this.router.navigateByUrl('farm/plantationidentification-list');
      },
      async (error: any) => {
        console.error('Error handler:', error);
        const toast = await this.toastController.create({
          message: 'Error occurred while adding the record',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
      }
    );
  }

  async UpdateRecord() {
    let tempFormData: any = {};
    tempFormData.updateColumnsList =  this.tab2Form.value;
    tempFormData.tableName =  "PlantationIdentification";
    tempFormData.primaryKeysList =  { "id" : this.id};

    // tempFormData.id = '1234567';
    console.log('tempFormData : ', tempFormData);
    this.dataService.updateTableByColumns(tempFormData).subscribe(
      async (data: any) => {
        console.log('Record added');
        const toast = await this.toastController.create({
          message: 'Record added Successfully',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
        this.router.navigateByUrl('farm/plantationidentification-list');
      },
      async (error: any) => {
        console.error('Error handler:', error);
        const toast = await this.toastController.create({
          message: 'Error occurred while adding the record',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
      }
    );
  }

  resetForm(e: MouseEvent) {
    this.ionicForm.reset();
  }

  cancelForm() {
    this.router.navigateByUrl('farm/plantationidentification-list');
  }
}
