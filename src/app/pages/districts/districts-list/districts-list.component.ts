import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ToastController} from '@ionic/angular';
import { ListComponent } from 'src/app/controls/list/list.component';
import { Privileges } from 'src/app/enum/privileges';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-districts-list',
  templateUrl: './districts-list.component.html',
  styleUrls: ['./districts-list.component.scss'],
})
export class DistrictsListComponent extends ListComponent implements OnInit {

  ngOnInit(): void {
    this.searchFunctionName = 'SearchDistricts';
    this.deleteFunctionName = 'Districts/UpdateDistrictsStatus/';
    this.addPrivilege = Privileges.AddDistricts.toString();
    this.updatePrivilege = Privileges.UpdateDistricts.toString();
    this.deletePrivilege = Privileges.DeleteDistricts.toString();
    this.loadData();
  }
}