import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-farmer_trip_sheets',
  templateUrl: './add-farmer_trip_sheets.component.html',
  styleUrls: ['./add-farmer_trip_sheets.component.css']
})
export class AddFarmer_trip_sheetsComponent implements OnInit {

  public farmer_trip_sheetsDetails: any;
  id!: string;
  ionicForm!: FormGroup;

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
    private router: Router,
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

     this.dataService.getFarmFieldLookup().subscribe((result: any) => { 
	 this.Farmer_Field_Id_data = result; 
}); 


  }
 

  async submitForm() {
    let tempFormData =  this.ionicForm.value;
    this.dataService.addFarmer_trip_sheets(tempFormData).subscribe(async(data: any) => {
      console.log('Record added');
	const toast = await this.toastController.create({
        message: 'Record added Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.router.navigateByUrl('farm/farmer_trip_sheets-list')

    },
(async(error: any) => {
      console.error('Error handler:', error);
      const toast = await this.toastController.create({
        message: 'Error occurred while adding the record',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
    })
    )
  }

  resetForm(e: MouseEvent) {
        this.ionicForm.reset();
  }

  cancelForm() {
    this.router.navigateByUrl('farm/farmer_trip_sheets-list')
  }
  

}
