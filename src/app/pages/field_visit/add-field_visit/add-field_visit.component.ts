import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonRouterOutlet, IonModal } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Subscription } from 'rxjs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-add-field_visit',
  templateUrl: './add-field_visit.component.html',
  styleUrls: ['./add-field_visit.component.css'],
})
export class AddField_VisitComponent implements OnInit {
  public field_visitDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  title!: string;
  fileList: Map<string, object> = new Map<string, object>();
  prescription_Photo_Id: string = '';
  photo_Id: string = '';
  photoIdInput: string = '';
  prescriptionPhotoIdInput: string = '';

  Field_Id_data: any;
  Employee_Id_data: any;
  Notes_data: any;
  Field_Visit_Date_data: any;
  Photo_Id_data: any;
  Status_Complete_data: any;
  Visist_Schedule_Date_data: any;
  Prescription_Photo_Id_data: any;
  IsActive_data: any;
  Farmer_Id_data: any;

  @ViewChild('modal', { static: true }) modal!: IonModal;

  selectedFarmersText = '0 Items';
  selectedFarmers: string[] = [];

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
      field_Id: [, [Validators.required]],
      employee_Id: [, [Validators.required]],
      notes: ['', [Validators.required]],
      field_Visit_Date: ['', [Validators.required]],
      photo_Id: [, [Validators.required]],
      status_Complete: ['', [Validators.required]],
      visist_Schedule_Date: ['', [Validators.required]],
      prescription_Photo_Id: [, [Validators.required]],
      isActive: [true, [Validators.required]],
    });

    this.id = this.route.snapshot.paramMap.get('id')!;

    this.dataService.getFarmersLookup('').subscribe((result: any) => {
      this.Farmer_Id_data = result;
    });
    this.dataService.getFarmFieldLookup().subscribe((result: any) => {
      this.Field_Id_data = result;
    });
    this.dataService.getEmployeesLookup().subscribe((result: any) => {
      this.Employee_Id_data = result;
    });
    this.dataService.getPhotosLookup().subscribe((result: any) => {
      this.Photo_Id_data = result;
    });
    this.dataService.getPhotosLookup().subscribe((result: any) => {
      this.Prescription_Photo_Id_data = result;
    });
  }

  async submitForm() {
    if (this.id) {
      this.UpdateRecord();
    } else {
      this.addNewRecord();
    }
    //     let tempFormData =  this.ionicForm.value;
    //     this.dataService.addField_Visit(tempFormData).subscribe(async(data: any) => {
    //       console.log('Record added');
    // 	const toast = await this.toastController.create({
    //         message: 'Record added Successfully',
    //         duration: 1500,
    //         position: 'top',
    //       });
    //       await toast.present();
    //       this.router.navigateByUrl('farm/field_visit-list')

    //     },
    // (async(error: any) => {
    //       console.error('Error handler:', error);
    //       const toast = await this.toastController.create({
    //         message: 'Error occurred while adding the record',
    //         duration: 1500,
    //         position: 'top',
    //       });
    //       await toast.present();
    //     })
    //     )
  }

  resetForm(e: MouseEvent) {
    this.ionicForm.reset();
  }

  cancelForm() {
    this.router.navigateByUrl('farm/field_visit-list');
  }

  farmerChange(event: { component: IonicSelectableComponent; text: string }) {
    event.component.startSearch();
    this.dataService.getFarmersLookup(event.text).subscribe((result: any) => {
      this.Farmer_Id_data = result;
    });
    // Get ports from a storage and stop searching.
    event.component.endSearch();
  }

  farmerSelected(event: {
    component: IonicSelectableComponent;
    item: any;
    isSelected: boolean;
  }) {
    this.dataService
      .getFarmFieldLookupByFarmer(event.item)
      .subscribe((result: any) => {
        this.Farmer_Id_data = result;
      });
  }

  async addNewRecord() {
    let tempFormData: any = {};
    tempFormData.insertColumnsList = this.ionicForm.value;
    tempFormData.insertColumnsList['field_Id'] = 123;
    tempFormData.insertColumnsList['isActive'] = true;
    tempFormData.tableName = 'Field_Visit';
    // tempFormData.id = '1234567';

    console.log('tempFormData : ', tempFormData);
    this.dataService.insertTableByColumns(tempFormData).subscribe(
      async (data: any) => {
        this.id = data;
        this.title = 'Field Visit: ' + this.id;
        console.log('Record added with id:', this.id);
        const toast = await this.toastController.create({
          message: 'Record added Successfully',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
        // this.router.navigateByUrl('farm/plantationidentification-list');
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

    tempFormData.updateColumnsList = this.ionicForm.value;

    tempFormData.tableName = 'Field_Visit';
    tempFormData.primaryKeysList = { id: this.id };

    // tempFormData.id = '1234567';
    console.log('tempFormData : ', tempFormData);
    this.dataService.updateTableByColumns(tempFormData).subscribe(
      async (data: any) => {
        console.log('Record updated');
        const toast = await this.toastController.create({
          message: 'Record updated Successfully',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
        this.router.navigateByUrl('farm/Field_Visit-list');
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

  fileChange(event: any, propertyName: any) {
    let tempFilesList = event.target.files;
    if (tempFilesList.length < 1) {
      return;
    }
    this.fileList.set(propertyName, tempFilesList[0]);
    if (propertyName === 'prescription_Photo_Id') {
      this.prescription_Photo_Id = URL.createObjectURL(tempFilesList[0]);
    }
    if (propertyName === 'photo_Id') {
      this.photo_Id = URL.createObjectURL(tempFilesList[0]);
    }
  }

  uploadImage(propertyName: any) {
    if (!this.id) {
      this.addNewRecord();
    }
    let tempFile = this.fileList.get(propertyName);
    let formData: FormData = new FormData();
    formData.append('uploadFile', tempFile as File, (tempFile as File).name);
    formData.append('tableName', 'Field_Visit');
    formData.append('primaryKeysList', this.id);
    formData.append('propertyName', propertyName);

    this.dataService.uploadImage(formData).subscribe((data: any) => {
      console.log('File Upload Success');
    });
  }

  private formatData(data: string[]) {
    if (data.length === 1) {
      const farmer = this.Farmer_Id_data.find((farmer: any) => farmer.value === data[0]);
      return farmer?.text;
    }
    return `${data.length} items`;
  }
  
  farmerSelectionChanged(farmers: string[]) {
    this.selectedFarmers = farmers;
    this.selectedFarmersText = this.Farmer_Id_data.find((tempData: any) => tempData.id === this.selectedFarmers[0]).name;
    // this.selectedFarmersText = String(this.formatData(this.selectedFarmers));
    console.log('this.selectedFarmersText  : ', this.selectedFarmersText );
    this.modal.dismiss();
  }

  searchFarmers(searchText: any) {
    this.dataService.getFarmersLookup(searchText).subscribe((result: any) => {
      this.Farmer_Id_data = result;
      console.log('this.Farmer_Id_data : ', this.Farmer_Id_data);
    });
  }
}
