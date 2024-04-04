import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign_types-details',
  templateUrl: './campaign_types-details.component.html',
  styleUrls: ['./campaign_types-details.component.css']
})
export class Campaign_TypesDetailsComponent implements OnInit {

  public campaign_typesDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  formMode: any = 'View';

  Name_data : any;
Description_data : any;
Things_To_Do_data : any;
Achievements_To_Target_data : any;
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
        name: ['', [Validators.required]],
description: ['', [Validators.required]],
things_To_Do: ['', [Validators.required]],
achievements_To_Target: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

   this.dataService.getCampaign_TypesById(this.id).subscribe((data: any)=> {
      this.campaign_typesDetails = data;
      this.ionicForm.patchValue(data);
    });

  }
 

  submitForm(): void {
      this.formMode = 'View';
    let tempFormData =  this.ionicForm.value;
    this.dataService.updateCampaign_Types(this.id, tempFormData).subscribe(async(data: any) => {
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
