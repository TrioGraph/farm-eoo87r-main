import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-farm_diseases',
  templateUrl: './add-farm_diseases.component.html',
  styleUrls: ['./add-farm_diseases.component.css']
})
export class AddFarm_DiseasesComponent implements OnInit {

  public farm_diseasesDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  title!: string;
  fileList: Map<string, object> = new Map<string, object>();
  isInEditMode: boolean = true;
  isLoading = false;

  Name_data : any;
Remidies_data : any;
Photo_Id1_data : any;
Photo_Id1 : any;
Photo_Id1Input : any;
Photo_Id2_data : any;
Photo_Id2 : any;
Photo_Id2Input : any;
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
        name: ['', [Validators.required]],
remidies: ['', [Validators.required]],
photo_Id1: ['', [Validators.required]],
photo_Id2: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

     this.dataService.getPhotosLookup().subscribe((result: any) => { 
	 this.Photo_Id1_data = result; 
}); 
this.dataService.getPhotosLookup().subscribe((result: any) => { 
	 this.Photo_Id2_data = result; 
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
    this.router.navigateByUrl('farm/farm_diseases-list')
  }
  
async addNewRecord() {
    let tempFormData: any = {};
    tempFormData.insertColumnsList = this.ionicForm.value;
    // tempFormData.insertColumnsList['field_Id'] = 123;
    tempFormData.insertColumnsList['isActive'] = true;
    tempFormData.tableName = 'Farm_Diseases';
    // tempFormData.id = '1234567';

       this.isLoading = true;
      this.dataService.insertTableByColumns(tempFormData).subscribe(
      async (data: any) => {
        this.id = data;
        this.title = 'Farm_Diseases: ' + this.id;
        const toast = await this.toastController.create({
          message: 'Record added Successfully',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
        // this.router.navigateByUrl('farm/farm_diseases-list');
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

    tempFormData.tableName = 'Farm_Diseases';
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

        this.router.navigateByUrl('farm/farm_diseases-list');
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
        if (propertyName === 'Photo_Id1') {
      this.Photo_Id1 = URL.createObjectURL(tempFilesList[0]);
    }
    if (propertyName === 'Photo_Id2') {
      this.Photo_Id2 = URL.createObjectURL(tempFilesList[0]);
    }
    
  }

  uploadImage(propertyName: any) {
    if (!this.id) {
      this.addNewRecord();
    }
    let tempFile = this.fileList.get(propertyName);
    let formData: FormData = new FormData();
    formData.append('uploadFile', tempFile as File, (tempFile as File).name);
    formData.append('tableName', 'Farm_Diseases');
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
