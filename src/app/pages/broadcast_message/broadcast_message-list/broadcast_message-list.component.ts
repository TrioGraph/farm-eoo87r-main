import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController, IonRouterOutlet, LoadingController, ToastController } from '@ionic/angular';
import { Privileges } from 'src/app/enum/privileges';
import { DataService } from 'src/app/services/data.service';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'broadcast_message-list',
  templateUrl: './broadcast_message-list.component.html',
  styleUrls: ['./broadcast_message-list.component.scss'],
})
export class Broadcast_MessageListComponent  implements OnInit {

  public broadcast_messageList: any;
  public searchText: any;
  public selectedId: any;
  isLoading = false;
  allowToAdd = false;
  allowToEdit = false;
  allowToDelete = false;

  chatForm!: FormGroup;
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
      },
      cssClass: 'alert-button-cancel'
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
      },
      cssClass: 'alert-button-confirm'
    },
  ];

  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private route: ActivatedRoute,    
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    public formBuilder: FormBuilder
) {
    
  }
  ngOnInit(): void {
    
    this.chatForm =  this.formBuilder.group({
      message_Text: ['', [Validators.required]],
    });

    let startDate = this.route.snapshot.paramMap.get('startDate');
    this.getData();
    this.allowToAdd = localStorage.getItem('AccessList')?.split(',').includes(Privileges.AddBroadcastMessage.toString().toString()) ? true : false; 
    this.allowToEdit = localStorage.getItem('AccessList')?.split(',').includes(Privileges.UpdateBroadcastMessage.toString().toString()) ? true : false;  
    this.allowToDelete = localStorage.getItem('AccessList')?.split(',').includes(Privileges.DeleteBroadcastMessage.toString().toString()) ? true : false;  
  }

getData() {
    this.isLoading = true;
        this.dataService.getBroadcast_Message().subscribe((result: any)=> {
        this.broadcast_messageList = result;
        
        console.log('result :' , result);
         this.isLoading = false;
	},
(async(error: any) => {
      console.error('Error handler:', error);
      const toast = await this.toastController.create({
        message: 'Error occurred while getting the record',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.isLoading = false;

    }));
  }

  onSubmit() {

  }

  openDropDown(msg: any) {

  }
  submitForm() {
      // let  user = data;
      // data.userId

    const tempFormData = this.chatForm.value;
    // event.employee_Id = 
    // event.farmer_id = 
    tempFormData.message_Sent_Date =  new Date().toISOString();
    this.isLoading = true;
    this.dataService.addBroadcast_Message(tempFormData).subscribe(async(result: any)=> {
      this.isLoading = false;
      const toast = await this.toastController.create({
        message: 'Record added Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.getData();
    },
(async(error: any) => {
      console.error('Error handler:', error);
      const toast = await this.toastController.create({
        message: 'Error occurred while adding the record',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.isLoading = false;

    }));

  }
  
  searchBroadcast_Message(searchText: any) {
    this.isLoading = true;
    this.dataService.searchBroadcast_Message(searchText, 1, 10, '', '', false, '','', '', '', '').subscribe((result: any)=> {
      this.broadcast_messageList = result.data;
       this.isLoading = false;
     },
(async(error: any) => {
      console.error('Error handler:', error);
      const toast = await this.toastController.create({
        message: 'Error occurred while getting records',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.isLoading = false;

    }));
  }

setRecordId(selectedId: any) {
    this.selectedId = selectedId;
  }

  deleteRecord(ev: any) {
    if(ev.detail.role === 'confirm')
    {
      this.isLoading = true;
      this.dataService.updateBroadcast_MessageStatus(this.selectedId).subscribe(async(result: any)=> {
      this.isLoading = false;
	const toast = await this.toastController.create({
        message: 'Record deleted Successfully',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
     },
(async(error: any) => {
      console.error('Error handler:', error);
      const toast = await this.toastController.create({
        message: 'Error occurred while deleting the record',
        duration: 1500,
        position: 'top',
      });
      await toast.present();
      this.isLoading = false;

    }));

    }
  }

}

