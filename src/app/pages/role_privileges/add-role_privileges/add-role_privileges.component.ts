import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-role_privileges',
  templateUrl: './add-role_privileges.component.html',
  styleUrls: ['./add-role_privileges.component.css']
})
export class AddRole_PrivilegesComponent implements OnInit {

  public role_privilegesDetails: any;
  id!: string;
  ionicForm!: FormGroup;

  Privilege_Id_data : any;
Role_id_data : any;
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
        privilege_Id: ['', [Validators.required]],
role_id: [, [Validators.required]],
isActive: [, [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

     this.dataService.getPrivilegesLookup().subscribe((result: any) => { 
	 this.Privilege_Id_data = result; 
}); 
this.dataService.getEmployee_TypesLookup().subscribe((result: any) => { 
	 this.Role_id_data = result; 
}); 


  }
 

  async submitForm() {
    let tempFormData =  this.ionicForm.value;
    this.dataService.addRole_Privileges(tempFormData).subscribe(async(data: any) => {
      console.log('Record added');
	const toast = await this.toastController.create({
        message: 'Record added Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.router.navigateByUrl('farm/role_privileges-list')

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
    this.router.navigateByUrl('farm/role_privileges-list')
  }
  

}
