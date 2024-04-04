import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-farmfield',
  templateUrl: './add-farmfield.component.html',
  styleUrls: ['./add-farmfield.component.css']
})
export class AddFarmFieldComponent implements OnInit {

  public farmfieldDetails: any;
  id!: string;
  ionicForm!: FormGroup;

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
    private router: Router,
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

     this.dataService.getFarmersLookup().subscribe((result: any) => { 
	 this.Farmer_Id_data = result; 
}); 
this.dataService.getVillagesLookup().subscribe((result: any) => { 
	 this.Village_Id_data = result; 
}); 
this.dataService.getEmployeesLookup().subscribe((result: any) => { 
	 this.Farmer_Supervisor_Id_data = result; 
}); 


  }
 

  async submitForm() {
    let tempFormData =  this.ionicForm.value;
    this.dataService.addFarmField(tempFormData).subscribe(async(data: any) => {
      console.log('Record added');
	const toast = await this.toastController.create({
        message: 'Record added Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.router.navigateByUrl('farm/farmfield-list')

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
    this.router.navigateByUrl('farm/farmfield-list')
  }
  

}
