import { Component, OnInit } from '@angular/core';
import { AddIdentificationComponent } from '../add-identification/add-identification.component';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-identification-list',
  templateUrl: './identification-list.component.html',
  styleUrls: ['./identification-list.component.scss'],
})
export class IdentificationListComponent  implements OnInit {

  public identificationsList: any;
  public searchText: any;

  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    
  }
  ngOnInit(): void {
    console.log('List');
    this.dataService.searchFarmers('', 1, 10, '', '', false, '','','','','').subscribe((result: any)=> {
      this.identificationsList = result.data;
    });
  }

  // async openNewIdentificationModal() {
  //   const modal = await this.modalController.create({
  //     component: AddIdentificationComponent,
  //     presentingElement: this.routerOutlet.nativeEl
  //   });
  //   // swipeToClose: true,

  //   return await modal.present();
  // }

  // async openEditIdentificationModal() {
  //   console.log('Sample');
  //   const modal = await this.modalController.create({
  //     component: AddIdentificationComponent,
  //     presentingElement: this.routerOutlet.nativeEl
  //   });
  //   // swipeToClose: true,

  //   return await modal.present();
  // }

  search_identification(searchText: any) {
    this.dataService.searchFarmers(searchText, 1, 10, '', '', false, '','','','','').subscribe((result: any)=> {
      this.identificationsList = result.data;
      
    });
  }
}
