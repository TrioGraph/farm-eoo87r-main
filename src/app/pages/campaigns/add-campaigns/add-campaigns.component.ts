import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-campaigns',
  templateUrl: './add-campaigns.component.html',
  styleUrls: ['./add-campaigns.component.css']
})
export class AddCampaignsComponent implements OnInit {

  public campaignsDetails: any;
  id!: string;
  ionicForm!: FormGroup;

  Name_data : any;
Description_data : any;
Reauired_Items_data : any;
Goals_To_Achieve_data : any;
Campign_Type_data : any;
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
description: ['', [Validators.required]],
reauired_Items: ['', [Validators.required]],
goals_To_Achieve: ['', [Validators.required]],
campign_Type: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

     this.dataService.getCampaign_TypesLookup().subscribe((result: any) => { 
	 this.Campign_Type_data = result; 
}); 


  }
 

  async submitForm() {
    let tempFormData =  this.ionicForm.value;
    this.dataService.addCampaigns(tempFormData).subscribe(async(data: any) => {
      console.log('Record added');
	const toast = await this.toastController.create({
        message: 'Record added Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.router.navigateByUrl('farm/campaigns-list')

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
    this.router.navigateByUrl('farm/campaigns-list')
  }
  

}