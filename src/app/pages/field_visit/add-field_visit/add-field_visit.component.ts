import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-add-field_visit',
  templateUrl: './add-field_visit.component.html',
  styleUrls: ['./add-field_visit.component.css']
})
export class AddField_VisitComponent implements OnInit {

  public field_visitDetails: any;
  id!: string;
  ionicForm!: FormGroup;

  Field_Id_data : any;
Employee_Id_data : any;
Notes_data : any;
Field_Visit_Date_data : any;
Photo_Id_data : any;
Status_Complete_data : any;
Visist_Schedule_Date_data : any;
Prescription_Photo_Id_data : any;
IsActive_data : any;
Farmer_Id_data : any;

  
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

   this.dataService.getFarmersLookup(null).subscribe((result: any) => { 
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
    let tempFormData =  this.ionicForm.value;
    this.dataService.addField_Visit(tempFormData).subscribe(async(data: any) => {
      console.log('Record added');
	const toast = await this.toastController.create({
        message: 'Record added Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.router.navigateByUrl('farm/field_visit-list')

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
    this.router.navigateByUrl('farm/field_visit-list')
  }
  
  farmerChange(event: { component: IonicSelectableComponent, text: string }) {
    event.component.startSearch();
    this.dataService.getFarmersLookup(event.text).subscribe((result: any) => { 
      this.Farmer_Id_data = result; 
   }); 
    // Get ports from a storage and stop searching.
    event.component.endSearch();
  }

  farmerSelected(event: {
    component: IonicSelectableComponent,
    item: any,
    isSelected: boolean
  }) {
    this.dataService.getFarmFieldLookupByFarmer(event.item,).subscribe((result: any) => { 
      this.Farmer_Id_data = result; 
   }); 
    
  }
}
