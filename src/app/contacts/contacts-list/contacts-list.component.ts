import { Component, OnInit } from '@angular/core';
import { NewContactsComponent } from '../new-contacts/new-contacts.component';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent  implements OnInit {
  public contacts: any;

  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.dataService.searchFarmers('', 1, 10, '', '').subscribe((data: any)=> {
      this.contacts = data.records;
    });
  }
  ngOnInit(): void {
    console.log('List');
  }

  async openNewContactModal() {
    const modal = await this.modalController.create({
      component: NewContactsComponent,
      presentingElement: this.routerOutlet.nativeEl
    });
    // swipeToClose: true,

    return await modal.present();
  }

}
