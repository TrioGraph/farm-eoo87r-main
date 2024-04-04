import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-poaching_ffb',
  templateUrl: './add-poaching_ffb.component.html',
  styleUrls: ['./add-poaching_ffb.component.css']
})
export class AddPoaching_FFBComponent implements OnInit {

  public poaching_ffbDetails: any;
  id!: string;
  ionicForm!: FormGroup;

  Farmer_Id_data : any;
Field_Id_data : any;
Photo_Id_data : any;
Poaching_Date_data : any;
Notes_data : any;
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
        farmer_Id: ['', [Validators.required]],
field_Id: ['', [Validators.required]],
photo_Id: ['', [Validators.required]],
poaching_Date: ['', [Validators.required]],
notes: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

     this.dataService.getFarmersLookup().subscribe((result: any) => { 
	 this.Farmer_Id_data = result; 
}); 
this.dataService.getFarmFieldLookup().subscribe((result: any) => { 
	 this.Field_Id_data = result; 
}); 
this.dataService.getPhotosLookup().subscribe((result: any) => { 
	 this.Photo_Id_data = result; 
}); 


  }
 

  async submitForm() {
    let tempFormData =  this.ionicForm.value;
    this.dataService.addPoaching_FFB(tempFormData).subscribe(async(data: any) => {
      console.log('Record added');
	const toast = await this.toastController.create({
        message: 'Record added Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.router.navigateByUrl('farm/poaching_ffb-list')

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
    this.router.navigateByUrl('farm/poaching_ffb-list')
  }
  

}
