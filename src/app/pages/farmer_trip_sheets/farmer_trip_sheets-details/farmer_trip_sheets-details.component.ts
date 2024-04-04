import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmer_trip_sheets-details',
  templateUrl: './farmer_trip_sheets-details.component.html',
  styleUrls: ['./farmer_trip_sheets-details.component.css']
})
export class Farmer_trip_sheetsDetailsComponent implements OnInit {

  public farmer_trip_sheetsDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  formMode: any = 'View';

  Arrived_Date_data : any;
Net_Weight_data : any;
Slip_No_data : any;
Collection_Centre_Received_data : any;
Farmer_Tally_Code_data : any;
Farmer_Field_Id_data : any;
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
        arrived_Date: ['', [Validators.required]],
net_Weight: ['', [Validators.required]],
slip_No: ['', [Validators.required]],
collection_Centre_Received: ['', [Validators.required]],
farmer_Tally_Code: ['', [Validators.required]],
farmer_Field_Id: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

   this.dataService.getFarmer_trip_sheetsById(this.id).subscribe((data: any)=> {
      this.farmer_trip_sheetsDetails = data;
      this.ionicForm.patchValue(data);
    });

  }
 

  submitForm(): void {
      this.formMode = 'View';
    let tempFormData =  this.ionicForm.value;
    this.dataService.updateFarmer_trip_sheets(this.id, tempFormData).subscribe(async(data: any) => {
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
