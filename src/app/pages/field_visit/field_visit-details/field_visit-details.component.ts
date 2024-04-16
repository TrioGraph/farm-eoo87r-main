import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-field_visit-details',
  templateUrl: './field_visit-details.component.html',
  styleUrls: ['./field_visit-details.component.css']
})
export class Field_VisitDetailsComponent implements OnInit {

  public field_visitDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  formMode: any = 'View';
  title = 'Field Visit Details';

  Field_Id_data : any;
Employee_Id_data : any;
Notes_data : any;
Field_Visit_Date_data : any;
Photo_Id_data : any;
Status_Complete_data : any;
Visist_Schedule_Date_data : any;
Prescription_Photo_Id_data : any;
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

   this.dataService.getField_VisitById(this.id).subscribe((data: any)=> {
      this.field_visitDetails = data;
      this.ionicForm.patchValue(data);
    });

  }
 

  submitForm(): void {
      this.formMode = 'View';
    let tempFormData =  this.ionicForm.value;
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
    this.formMode = 'Edit';
  }

  cancelForm(){
    this.formMode = 'View';
  }

  

}
