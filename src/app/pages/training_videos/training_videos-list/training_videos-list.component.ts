import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-training_videos-list',
  templateUrl: './training_videos-list.component.html',
  styleUrls: ['./training_videos-list.component.scss'],
})
export class Training_VideosListComponent  implements OnInit {

  public training_videosList: any;
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
    this.dataService.searchTraining_Videos('', 1, 10, '', '').subscribe((result: any)=> {
      this.training_videosList = result.data;
    });
  }

  searchTraining_Videos(searchText: any) {
    this.dataService.searchTraining_Videos(searchText, 1, 10, '', '').subscribe((data: any)=> {
      this.training_videosList = data.records;
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
      this.dataService.updateTraining_VideosStatus(this.selectedId)
    }
  }

}

