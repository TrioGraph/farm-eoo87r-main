import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-farm_diseases',
  templateUrl: './add-farm_diseases.component.html',
  styleUrls: ['./add-farm_diseases.component.css']
})
export class AddFarm_DiseasesComponent implements OnInit {

  public farm_diseasesDetails: any;
  id!: string;
  ionicForm!: FormGroup;

  Name_data : any;
Remidies_data : any;
Photo_Id1_data : any;
Photo_Id2_data : any;
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
    let tempFormData =  this.ionicForm.value;
    this.dataService.addFarm_Diseases(tempFormData).subscribe(async(data: any) => {
      console.log('Record added');
	const toast = await this.toastController.create({
        message: 'Record added Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.router.navigateByUrl('farm/farm_diseases-list')

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
    this.router.navigateByUrl('farm/farm_diseases-list')
  }
  

}
