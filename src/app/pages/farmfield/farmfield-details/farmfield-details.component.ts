import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmfield-details',
  templateUrl: './farmfield-details.component.html',
  styleUrls: ['./farmfield-details.component.css']
})
export class FarmFieldDetailsComponent implements OnInit {

  public farmfieldDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  formMode: any = 'View';

  Tally_Field_Id_data : any;
Farmer_Id_data : any;
Village_Id_data : any;
Survey_Nos_data : any;
Mapping_Data_Id_data : any;
Gate_GPS_Lattitude_data : any;
Gate_GPS_Longitude_data : any;
Farmer_Supervisor_Id_data : any;
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

   this.dataService.getFarmFieldById(this.id).subscribe((data: any)=> {
      this.farmfieldDetails = data;
      this.ionicForm.patchValue(data);
    });

  }
 

  submitForm(): void {
      this.formMode = 'View';
    let tempFormData =  this.ionicForm.value;
    this.dataService.updateFarmField(this.id, tempFormData).subscribe(async(data: any) => {
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
