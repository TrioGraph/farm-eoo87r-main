import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-add-identification',
  templateUrl: './add-identification.component.html',
  styleUrls: ['./add-identification.component.scss'],
})
export class AddIdentificationComponent implements OnInit {
  public identificationDetails: any;
  id!: string;
  ionicForm!: FormGroup;
  slideOneForm!: FormGroup;
  slideTwoForm!: FormGroup;
  slideThreeForm!: FormGroup;
  slideFourForm!: FormGroup;
  submitAttempt!: boolean;
  constructor(
    private dataService: DataService,
    @Optional() private routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);
    };

    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log('this.id : ', this.id);
    // this.dataService.getPlantationIdentificationById(this.id).subscribe((data: any)=> {
    //   this.identificationDetails = data;
    //   console.log('identificationDetails : ', this.identificationDetails)
    // });

    this.slideOneForm = this.formBuilder.group({
      Longitude: [],
      Latitude: [],
      Village_Code: [],
      Mandal_Code: [],
    });

    this.slideTwoForm = this.formBuilder.group({
      First_Name: ['',
        Validators.compose([
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ]),
      ],
      Last_Name: [
        '',
        Validators.compose([
          Validators.maxLength(30),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ]),
      ],
      Father_Name: [''],
      Mobile_Number1: [''],
      Mobile_Number2: [''],
      Email: [''],
    });
    
    this.slideThreeForm = this.formBuilder.group({
      Farmer_Photo_Id: [],
      Land_Photo_Id: [],
    });

    this.slideFourForm = this.formBuilder.group({
      Referral_Farmer_Id: [],
      Existing_Crop_Id: [],
      Plantation_Date: [],
      Samplings_Nursary_Batch_Id: [],
    });

  }
  
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  }

  save() {
    this.submitAttempt = true;

    // if(!this.slideOneForm.valid){
    //     this.signupSlider.slideTo(0);
    // }
    // else if(!this.slideTwoForm.valid){
    //     this.signupSlider.slideTo(1);
    // }
    // else {
    //     console.log("success!")
    //     console.log(this.slideOneForm.value);
    //     console.log(this.slideTwoForm.value);
    // }
  }
}
