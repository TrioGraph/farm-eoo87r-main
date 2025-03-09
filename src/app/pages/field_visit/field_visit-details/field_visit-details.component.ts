import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonRouterOutlet, ToastController, IonModal } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-field-visit-details',
  templateUrl: './field_visit-details.component.html',
  styleUrls: ['./field_visit-details.component.css']
})
export class Field_VisitDetailsComponent implements OnInit {

  public field_visitDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  formMode: any = 'View';
  isInEditMode: boolean = false;
  title = 'Field Visit Details';
  fileList: Map<string, object> = new Map<string, object>();
  photoId = "";
  prescriptionPhotoId = "";
  photoIdInput = "";
  prescriptionPhotoIdInput = "";

  Field_Id_data : any;
Employee_Id_data : any;
Notes_data : any;
Field_Visit_Date_data : any;
Photo_Id_data : any;
Status_Complete_data : any;
Visist_Schedule_Date_data : any;
Prescription_Photo_Id_data : any;
IsActive_data : any;
Farmer_Id_data: any;

@ViewChild('modal', { static: true }) modal!: IonModal;

  selectedFarmersText = '0 Items';
  selectedFarmers!: string;

  
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
field_Id: ['', [Validators.required]],
employee_Id: ['', [Validators.required]],
notes: ['', [Validators.required]],
field_Visit_Date: ['', [Validators.required]],
photo_Id: ['', [Validators.required]],
status_Complete: ['', [Validators.required]],
visist_Schedule_Date: ['', [Validators.required]],
prescription_Photo_Id: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

   this.dataService.getFarmersLookup(undefined).subscribe((result: any) => {
    this.Farmer_Id_data = result;
  });
  this.dataService.getFarmFieldLookup().subscribe((result: any) => {
    this.Field_Id_data = result;
  });
  this.dataService.getEmployeesLookup().subscribe((result: any) => {
    this.Employee_Id_data = result;
  });

   this.dataService.getField_VisitById(this.id).subscribe((data: any)=> {
      this.field_visitDetails = data;
      this.ionicForm.patchValue(data);
      this.ionicForm.patchValue({
        'visist_Schedule_Date':  data.visist_Schedule_Date,
        'field_Visit_Date':  data.field_Visit_Date
      });
      this.Visist_Schedule_Date_data = data.visist_Schedule_Date;
      this.Field_Visit_Date_data = data.field_Visit_Date;
      if(data.photo_Id !== undefined && data.photo_Id.length > 0){
        this.photoId = this.dataService.getImageByName(data.photo_Id);
        this.photoIdInput = data.photo_Id;
      }
      if(data.prescription_Photo_Id !== undefined && data.prescription_Photo_Id.length > 0){
        this.prescriptionPhotoId = this.dataService.getImageByName(data.prescription_Photo_Id);
        this.prescriptionPhotoIdInput = data.prescription_Photo_Id;
      }
    });

    
    // this.dataService.getPhotosLookup().subscribe((result: any) => {
    //   this.Photo_Id_data = result;
    // });
    // this.dataService.getPhotosLookup().subscribe((result: any) => {
    //   this.Prescription_Photo_Id_data = result;
    // });

  }

  submitForm(): void {
      this.isInEditMode = false;
    let tempFormData =  this.ionicForm.value;
    console.log('Visist_Schedule_Date_data : ', this.Visist_Schedule_Date_data)
    this.dataService.updateField_Visit(this.id, tempFormData).subscribe(async(data: any) => {
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
    this.isInEditMode = true;
  }

  cancelForm(){
    this.isInEditMode = false;
  }

  fileChange(event: any, propertyName: any) {
    let tempFilesList = event.target.files; 
    if (tempFilesList.length < 1) {
      return;
    }
     this.fileList.set(propertyName, tempFilesList[0]);
     if(propertyName === 'photo_Id'){
     this.photoId = URL.createObjectURL(tempFilesList[0]);
    }
     if(propertyName === 'prescription_Photo_Id'){
     this.prescriptionPhotoId = URL.createObjectURL(tempFilesList[0]);
    }
}

uploadImage(propertyName: any){
  let tempFile = this.fileList.get(propertyName);
  let formData:FormData = new FormData();
  formData.append('uploadFile', tempFile as File, (tempFile as File).name);
  formData.append('tableName', 'Field_Visit');
  formData.append('primaryKeysList', this.id);
  formData.append('propertyName', propertyName);
  
  this.dataService.uploadImage(formData).subscribe(
    (data: any) => { 
      console.log('File Upload Success') 
    }
);
}

//   fileChange(event: any, propertyName: any) {
//     let tempFilesList = event.target.files; 
//     if (tempFilesList.length < 1) {
//       return;
//     }
//      this.fileList.set(propertyName, tempFilesList[0]);
//     //  this.farmerPhotoId = tempFilesList[0].name;
// }

// uploadImage(propertyName: any){
//   let tempFile = this.fileList.get(propertyName);
//   let formData:FormData = new FormData();
//   formData.append('uploadFile', tempFile as File, (tempFile as File).name);
//   formData.append('tableName', 'PlantationIdentification');
//   formData.append('primaryKeysList', this.id);
//   formData.append('propertyName', propertyName);
  
//   this.dataService.uploadImage(formData).subscribe(
//     (data: any) => { 
//       console.log('File Upload Success') 
//     }
// );
// }

searchFarmers(searchText: any) {
  this.dataService.getFarmersLookup(searchText).subscribe((result: any) => {
    this.Farmer_Id_data = result;
    console.log('this.Farmer_Id_data : ', this.Farmer_Id_data);
  });
}

}
