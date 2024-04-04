import { Component, OnInit } from '@angular/core';
import { AddIdentificationComponent } from '../add-identification/add-identification.component';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identification-details',
  templateUrl: './identification-details.component.html',
  styleUrls: ['./identification-details.component.scss'],
})
export class IdentificationDetailsComponent  implements OnInit {
  public identificationDetails: any;
  id!: string;
  ionicForm!: FormGroup;

  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder
  ) {
    
  }

  ngOnInit(): void {
    
    this.ionicForm = this.formBuilder.group({
      id: [],
      Longitude: [],
      Latitude: [],
      Village_Code: [],
      Mandal_Code: [],
      first_Name: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ]),
      ],
      last_Name: [
        '',
        Validators.compose([
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ]),
      ],
      father_Name: [''],
      gender: [''],
      category: [''],
      farm_Code: [''],
      water_Source: [''],
      variety: [''],
      Mobile_Number1: [''],
      Mobile_Number2: [''],
      Email: [''],
       Farmer_Photo_Id: [],
      Land_Photo_Id: [],
       Referral_Farmer_Id: [],
      Existing_Crop_Id: [],
      Plantation_Date: [],
      Samplings_Nursary_Batch_Id: [],
    });

    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log('this.id : ', this.id);
    this.dataService.getPlantationIdentificationById(this.id).subscribe((data: any)=> {
      this.identificationDetails = data;
      this.ionicForm.controls['last_Name'].setValue(data.last_Name);
      this.ionicForm.controls['id'].setValue(data.id);
      console.log('identificationDetails : ', this.identificationDetails)
    });
    
  }

  async openNewContactModal() {
    const modal = await this.modalController.create({
      component: AddIdentificationComponent,
      presentingElement: this.routerOutlet.nativeEl
    });
    // swipeToClose: true,

    return await modal.present();
  }
}
