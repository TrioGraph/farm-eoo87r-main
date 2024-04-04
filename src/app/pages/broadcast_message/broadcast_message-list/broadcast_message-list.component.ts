import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-broadcast_message-list',
  templateUrl: './broadcast_message-list.component.html',
  styleUrls: ['./broadcast_message-list.component.scss'],
})
export class Broadcast_MessageListComponent  implements OnInit {

  public broadcast_messageList: any;
  public searchText: any;
  public selectedId: any;
  
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
    private routerOutlet: IonRouterOutlet
  ) {
    
  }
  ngOnInit(): void {
    console.log('List');
    this.dataService.searchBroadcast_Message('', 1, 10, '', '').subscribe((result: any)=> {
      this.broadcast_messageList = result.data;
    });
  }

  searchBroadcast_Message(searchText: any) {
    this.dataService.searchBroadcast_Message(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.broadcast_messageList = data.records;
      console.log('data: ', data);
    });
  }

deleteRecord(selectedId: any) {
    this.selectedId = selectedId;
  }

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
    if(ev.detail.role === 'confirm')
    {
      this.dataService.updateBroadcast_MessageStatus(this.selectedId)
    }
  }

}

