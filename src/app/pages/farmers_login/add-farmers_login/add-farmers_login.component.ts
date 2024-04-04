import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-farmers_login',
  templateUrl: './add-farmers_login.component.html',
  styleUrls: ['./add-farmers_login.component.css']
})
export class AddFarmers_LoginComponent implements OnInit {

  public farmers_loginDetails: any;
  id!: string;
  ionicForm!: FormGroup;

  Farmer_Tally_Code_data : any;
Login_Id_data : any;
Login_Mobile_data : any;
Login_Password_data : any;
Creation_Date_data : any;
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
        farmer_Tally_Code: ['', [Validators.required]],
login_Id: ['', [Validators.required]],
login_Mobile: ['', [Validators.required]],
login_Password: ['', [Validators.required]],
creation_Date: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

     this.dataService.getLoginsLookup().subscribe((result: any) => { 
	 this.Login_Id_data = result; 
}); 


  }
 

  async submitForm() {
    let tempFormData =  this.ionicForm.value;
    this.dataService.addFarmers_Login(tempFormData).subscribe(async(data: any) => {
      console.log('Record added');
	const toast = await this.toastController.create({
        message: 'Record added Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.router.navigateByUrl('farm/farmers_login-list')

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
    this.router.navigateByUrl('farm/farmers_login-list')
  }
  

}
