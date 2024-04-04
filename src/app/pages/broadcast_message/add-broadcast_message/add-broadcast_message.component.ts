import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-broadcast_message',
  templateUrl: './add-broadcast_message.component.html',
  styleUrls: ['./add-broadcast_message.component.css']
})
export class AddBroadcast_MessageComponent implements OnInit {

  public broadcast_messageDetails: any;
  id!: string;
  ionicForm!: FormGroup;

  Message_Text_data : any;
Employee_Id_data : any;
Farmer_id_data : any;
Farmer_Supervisor_Id_data : any;
Message_Sent_Date_data : any;
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
        message_Text: ['', [Validators.required]],
employee_Id: ['', [Validators.required]],
farmer_id: ['', [Validators.required]],
farmer_Supervisor_Id: ['', [Validators.required]],
message_Sent_Date: ['', [Validators.required]],
isActive: ['', [Validators.required]],

    });

   this.id = this.route.snapshot.paramMap.get('id')!;

     this.dataService.getEmployeesLookup().subscribe((result: any) => { 
	 this.Employee_Id_data = result; 
}); 
this.dataService.getFarmersLookup().subscribe((result: any) => { 
	 this.Farmer_id_data = result; 
}); 
this.dataService.getEmployeesLookup().subscribe((result: any) => { 
	 this.Farmer_Supervisor_Id_data = result; 
}); 


  }
 

  async submitForm() {
    let tempFormData =  this.ionicForm.value;
    this.dataService.addBroadcast_Message(tempFormData).subscribe(async(data: any) => {
      console.log('Record added');
	const toast = await this.toastController.create({
        message: 'Record added Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.router.navigateByUrl('farm/broadcast_message-list')

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
    this.router.navigateByUrl('farm/broadcast_message-list')
  }
  

}
