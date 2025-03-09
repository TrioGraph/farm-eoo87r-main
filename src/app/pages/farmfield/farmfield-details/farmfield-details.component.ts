import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ModalController,
  IonRouterOutlet,
  ToastController,
  IonModal,
  LoadingController,
} from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmfield-details',
  templateUrl: './farmfield-details.component.html',
  styleUrls: ['./farmfield-details.component.css'],
})
export class FarmFieldDetailsComponent implements OnInit {
  public farmfieldDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  formMode: any = 'View';
  isInEditMode: boolean = false;
  title = 'Field Visit Details';
  fileList: Map<string, object> = new Map<string, object>();
  isLoading = false;
  selectedVillage: any;
  selectedVillagesText: any;

  Tally_Field_Id_data: any;
  Farmer_Id_data: any;
  Village_Id_data: any;
  Survey_Nos_data: any;
  Mapping_Data_Id_data: any;
  Gate_GPS_Lattitude_data: any;
  Gate_GPS_Longitude_data: any;
  Farmer_Supervisor_Id_data: any;
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
    this.isLoading = true;

    this.dataService.getFarmersLookup('').subscribe((result: any) => {
      this.Farmer_Id_data = result;
    });
    
    this.dataService.getEmployeesLookup().subscribe((result: any) => {
      this.Farmer_Supervisor_Id_data = result;
    });

    this.dataService.getFarmFieldById(this.id).subscribe((data: any) => {
      this.farmfieldDetails = data;
      this.ionicForm.patchValue(data);

      this.dataService.GetVillagesLookup('',data.village_Id).subscribe((result: any) => {
        this.Village_Id_data = result;
      });
      this.isLoading = false;
    });
    this.ionicForm.disable();
  }

  submitForm(): void {
    this.isInEditMode = false;
    let tempFormData = this.ionicForm.value;
    this.isLoading = true;
    this.dataService.updateFarmField(this.id, tempFormData).subscribe(
      async (data: any) => {
        console.log('Record Updated Successfully');
        const toast = await this.toastController.create({
          message: 'Record updated Successfully',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
        this.isLoading = false;
      },
      async (error: any) => {
        console.error('Error handler:', error);
        const toast = await this.toastController.create({
          message: 'Error occurred while updating the record',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
        this.isLoading = false;
      }
    );
  }

  resetForm(e: MouseEvent) {
    //this.FarmService.resetForm(e, this.appsForm);
  }

  editForm() {
    this.formMode = 'Edit';
    this.isInEditMode = true;
    this.ionicForm.enable();
  }

  cancelForm() {
    this.formMode = 'View';
    this.isInEditMode = false;
    this.ionicForm.disable();
  }

  fileChange(event: any, propertyName: any) {
    let tempFilesList = event.target.files;
    if (tempFilesList.length < 1) {
      return;
    }
    this.fileList.set(propertyName, tempFilesList[0]);
  }

  uploadImage(propertyName: any) {
    let tempFile = this.fileList.get(propertyName);
    let formData: FormData = new FormData();
    formData.append('uploadFile', tempFile as File, (tempFile as File).name);
    formData.append('tableName', 'FarmField');
    formData.append('primaryKeysList', this.id);
    formData.append('propertyName', propertyName);
    this.isLoading = true;

    this.dataService.uploadImage(formData).subscribe(
      (data: any) => {
        console.log('File Upload Success');
        this.isLoading = true;
      },
      async (error: any) => {
        console.error('Error handler:', error);
        const toast = await this.toastController.create({
          message: 'Error occurred while updating the record',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
        this.isLoading = false;
      }
    );
  }

  VillageSelectionChanged(villages: any) {
    this.selectedVillage = villages;
    this.selectedVillagesText = String(this.formatData(this.selectedVillage));
    this.modal.dismiss();
  }

  private formatData(data: string[]) {
    if (data.length === 1) {
      console.log('formatData :: data : ', data);
      const village = this.Village_Id_data.find((v: any) => v.id === data[0]);
      return village?.name;
    }
    return `${data.length} items`;
  }

  villageChange(event: any) {
    this.dataService.getMandalByVillage(event.target.value).subscribe((m) => {
      this.ionicForm.patchValue({
        mandal_Code: m[0].mandalId,
      });
    });
  }

  searchVillages(searchText: any) {
    this.dataService.GetVillagesLookup(searchText, 
      this.ionicForm.controls['village_Id'].value).subscribe((result: any) => {
      this.Village_Id_data = result;
    });
  }
}
