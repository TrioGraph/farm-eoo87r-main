import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  public employeesDetails: any;
  id!: string;
  ionicForm!: FormGroup;

  First_Name_data : any;
Last_Name_data : any;
Father_Name_data : any;
Photo_Id_data : any;
Mobile_Number1_data : any;
Mobile_Number2_data : any;
Banking_Id_data : any;
Email_data : any;
Address_data : any;
Notes_data : any;
Permanent_Employee_data : any;
Employee_Type_Id_data : any;
User_Name_data : any;
Password_data : any;
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
        first_Name: ['', [Validators.required]],
last_Name: ['', [Validators.required]],
father_Name: ['', [Validators.required]],
photo_Id: ['', [Validators.required]],
mobile_Number1: ['', [Validators.required]],
mobile_Number2: ['', [Validators.required]],
banking_Id: ['', [Validators.required]],
email: ['', [Validators.required]],
address: ['', [Validators.required]],
notes: ['', [Validators.required]],
permanent_Employee: ['', [Validators.required]],
employee_Type_Id: ['', [Validators.required]],
user_Name: ['', [Validators.required]],
password: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

     this.dataService.getPhotosLookup().subscribe((result: any) => { 
	 this.Photo_Id_data = result; 
}); 
this.dataService.getEmployee_TypesLookup().subscribe((result: any) => { 
	 this.Employee_Type_Id_data = result; 
}); 


  }
 

  async submitForm() {
    let tempFormData =  this.ionicForm.value;
    this.dataService.addEmployees(tempFormData).subscribe(async(data: any) => {
      console.log('Record added');
	const toast = await this.toastController.create({
        message: 'Record added Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.router.navigateByUrl('farm/employees-list')

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
    this.router.navigateByUrl('farm/employees-list')
  }
  

}
