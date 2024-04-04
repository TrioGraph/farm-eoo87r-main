import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-nursary_batches',
  templateUrl: './add-nursary_batches.component.html',
  styleUrls: ['./add-nursary_batches.component.css']
})
export class AddNursary_BatchesComponent implements OnInit {

  public nursary_batchesDetails: any;
  id!: string;
  ionicForm!: FormGroup;

  Name_data : any;
Origin_data : any;
Batch_Id_Supplier_data : any;
Supplier_Details_data : any;
Located_Nursery_Id_data : any;
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
        name: ['', [Validators.required]],
origin: ['', [Validators.required]],
batch_Id_Supplier: ['', [Validators.required]],
supplier_Details: ['', [Validators.required]],
located_Nursery_Id: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

     this.dataService.getNursaryLookup().subscribe((result: any) => { 
	 this.Located_Nursery_Id_data = result; 
}); 


  }
 

  async submitForm() {
    let tempFormData =  this.ionicForm.value;
    this.dataService.addNursary_Batches(tempFormData).subscribe(async(data: any) => {
      console.log('Record added');
	const toast = await this.toastController.create({
        message: 'Record added Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.router.navigateByUrl('farm/nursary_batches-list')

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
    this.router.navigateByUrl('farm/nursary_batches-list')
  }
  

}
