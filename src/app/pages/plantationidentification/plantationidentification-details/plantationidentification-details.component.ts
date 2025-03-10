import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ModalController,
  IonRouterOutlet,
  ToastController,
  IonModal,
} from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plantationidentification-details',
  templateUrl: './plantationidentification-details.component.html',
  styleUrls: ['./plantationidentification-details.component.css'],
})
export class PlantationIdentificationDetailsComponent implements OnInit {
  public plantationidentificationDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  formMode: any = 'View';
  isInEditMode: boolean = false;
  farmerPhotoId = '';
  landPhotoId = '';
  bankName = '';
  aadharNo = '';
  farmerPhotoIdInput = '';
  landPhotoIdInput = '';
  bankNameInput = '';
  aadharNoInput = '';
  fileList: Map<string, object> = new Map<string, object>();
  selectedVillage: any;
  selectedVillagesText: any;

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

@ViewChild('modal', { static: true }) modal!: IonModal;

  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private toastController: ToastController
  ) {}

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
      east_Contact_Name: ['', [Validators.required]],
      east_Contact_Number: ['', [Validators.required]],
      west_Contact_Name: ['', [Validators.required]],
      west_Contact_Number: ['', [Validators.required]],
      north_Contact_Name: ['', [Validators.required]],
      north_Contact_Number: ['', [Validators.required]],
      south_Contact_Name: ['', [Validators.required]],
      south_Contact_Number: ['', [Validators.required]],
    });

    this.id = this.route.snapshot.paramMap.get('id')!;

    this.dataService
      .getPlantationIdentificationById(this.id)
      .subscribe((data: any) => {
        this.plantationidentificationDetails = data;
        this.ionicForm.patchValue(data);

        console.log('data.farmer_Photo_Id  : ', data.farmer_Photo_Id);
        console.log('data.land_Photo_Id  : ', data.land_Photo_Id);
        console.log('data.bank_Name  : ', data.bank_Name);
        console.log('data.aadhar_No  : ', data.aadhar_No);

        if (
          data.farmer_Photo_Id !== undefined &&
          data.farmer_Photo_Id?.length > 0
        ) {
          this.farmerPhotoId = this.dataService.getImageByName(
            data.farmer_Photo_Id
          );
          this.farmerPhotoIdInput = data.farmer_Photo_Id;
        }
        if (
          data.land_Photo_Id !== undefined &&
          data.land_Photo_Id?.length > 0
        ) {
          this.landPhotoId = this.dataService.getImageByName(
            data.land_Photo_Id
          );
          this.landPhotoIdInput = data.land_Photo_Id;
        }
        if (data.bank_Name !== undefined && data.bank_Name?.length > 0) {
          this.bankName = this.dataService.getImageByName(data.bank_Name);
          this.bankNameInput = data.bank_Name;
        }
        if (data.aadhar_No !== undefined && data.aadhar_No?.length > 0) {
          this.aadharNo = this.dataService.getImageByName(data.aadhar_No);
          this.aadharNoInput = data.aadhar_No;
        }
      });

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

  submitForm(): void {
    this.isInEditMode = false;
    let tempFormData = this.ionicForm.value;
    this.dataService
      .updatePlantationIdentification(this.id, tempFormData)
      .subscribe(
        async (data: any) => {
          console.log('Record Updated Successfully');
          const toast = await this.toastController.create({
            message: 'Record updated Successfully',
            duration: 1500,
            position: 'top',
          });
          await toast.present();
        },
        async (error: any) => {
          console.error('Error handler:', error);
          const toast = await this.toastController.create({
            message: 'Error occurred while updating the record',
            duration: 1500,
            position: 'top',
          });
          await toast.present();
        }
      );
  }

  resetForm(e: MouseEvent) {
    //this.FarmService.resetForm(e, this.appsForm);
  }

  editForm() {
    this.isInEditMode = true;
  }

  cancelForm() {
    this.isInEditMode = false;
  }

  fileChange(event: any, propertyName: any) {
    let tempFilesList = event.target.files;
    if (tempFilesList.length < 1) {
      return;
    }
    this.fileList.set(propertyName, tempFilesList[0]);
    if (propertyName === 'farmer_Photo_Id') {
      this.farmerPhotoId = URL.createObjectURL(tempFilesList[0]);
    }
    if (propertyName === 'land_Photo_Id') {
      this.landPhotoId = URL.createObjectURL(tempFilesList[0]);
    }
    if (propertyName === 'aadhar_No') {
      this.aadharNo = URL.createObjectURL(tempFilesList[0]);
    }
    if (propertyName === 'bank_Name') {
      this.bankName = URL.createObjectURL(tempFilesList[0]);
    }
  }

  uploadImage(propertyName: any) {
    let tempFile = this.fileList.get(propertyName);
    let formData: FormData = new FormData();
    formData.append('uploadFile', tempFile as File, (tempFile as File).name);
    formData.append('tableName', 'PlantationIdentification');
    formData.append('primaryKeysList', this.id);
    formData.append('propertyName', propertyName);

    this.dataService.uploadImage(formData).subscribe((data: any) => {
      console.log('File Upload Success');
    });
  }

  VillageSelectionChanged(villages: any) {
    this.selectedVillage = villages;
    this.selectedVillagesText = String(this.formatData(this.selectedVillage));
    this.modal.dismiss();
  }
  
  private formatData(data: string[]) {
    if (data.length === 1) {
      console.log('formatData :: data : ', data);
      const village = this.Village_Code_data.find((v: any) => v.id === data[0]);
      return village?.name;
    }
    return `${data.length} items`;
  }
  
  villageChange(event: any) {
    this.dataService.getMandalByVillage(event.target.value).subscribe(m => {
      this.ionicForm.patchValue({
        "mandal_Code" : m[0].mandalId
      })
    });
  }
  
  searchVillages(searchText: any) {
    this.dataService.GetVillagesLookup(searchText, this.ionicForm.controls['village_Code'].value).subscribe((result: any) => {
      this.Village_Code_data = result;
    });
  }
}
