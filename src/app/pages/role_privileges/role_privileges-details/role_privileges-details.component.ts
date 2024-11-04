import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet, ToastController, IonModal, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role_privileges-details',
  templateUrl: './role_privileges-details.component.html',
  styleUrls: ['./role_privileges-details.component.css']
})
export class Role_PrivilegesDetailsComponent implements OnInit {

  public role_privilegesDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  formMode: any = 'View';
  isInEditMode: boolean = false;
  title = 'Field Visit Details';
  fileList: Map<string, object> = new Map<string, object>();
  isLoading = false;

  Privilege_Id_data : any;
Role_id_data : any;
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
        privilege_Id: ['', [Validators.required]],
role_id: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;
   this.isLoading = true;

   this.dataService.getPrivilegesLookup().subscribe((result: any) => { 
	 this.Privilege_Id_data = result; 
}); 
this.dataService.getRolesLookup().subscribe((result: any) => { 
	 this.Role_id_data = result; 
}); 


   this.dataService.getRole_PrivilegesById(this.id).subscribe((data: any)=> {
      this.role_privilegesDetails = data;
      this.ionicForm.patchValue(data);
      this.isLoading = false;
   });
   this.ionicForm.disable();
  }
 

  submitForm(): void {
    this.isInEditMode = false;
    let tempFormData =  this.ionicForm.value;
   this.isLoading = true;
    this.dataService.updateRole_Privileges(this.id, tempFormData).subscribe(async(data: any) => {
      console.log('Record Updated Successfully');
	const toast = await this.toastController.create({
        message: 'Record updated Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
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
    )
  }

  resetForm(e: MouseEvent) {
    //this.FarmService.resetForm(e, this.appsForm);
  }
  
  editForm(){
    this.formMode = 'Edit';
    this.isInEditMode = true;
    this.ionicForm.enable();
 }

  cancelForm(){
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
    formData.append('tableName', 'Role_Privileges');
    formData.append('primaryKeysList', this.id);
    formData.append('propertyName', propertyName);
    this.isLoading = true;

    this.dataService.uploadImage(formData).subscribe((data: any) => {
      console.log('File Upload Success');
      this.isLoading = true;

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
