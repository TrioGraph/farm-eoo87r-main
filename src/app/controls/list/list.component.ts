import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  filters: any[] = [];
  public searchText: any = undefined;
  allowToAdd = false;
  allowToEdit = false;
  allowToDelete = false;
  isLoading = false;
  searchFunctionName: any;
  deleteFunctionName: any;
  addPrivilege: any;
  updatePrivilege: any;
  deletePrivilege: any;
  public dataList: any;
  public pageNumber: Number = 1;
  public pageSize: Number = 10;
  public selectedId: any;

  public alertButtons = [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {},
        cssClass: 'alert-button-cancel',
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {},
        cssClass: 'alert-button-confirm',
      },
    ];

  constructor(public route: ActivatedRoute, public dataService: DataService,
            public toastController: ToastController) {
  }

  loadData() {
    let startDate = this.route.snapshot.paramMap.get('startDate');
    this.loadFilters(startDate);
    this.searchFunction(startDate);
    this.allowToAdd = localStorage
      .getItem('AccessList')
      ?.split(',')
      .includes(this.addPrivilege)
      ? true
      : false;
    this.allowToEdit = localStorage
      .getItem('AccessList')
      ?.split(',')
      .includes(this.updatePrivilege)
      ? true
      : false;
    this.allowToDelete = localStorage
      .getItem('AccessList')
      ?.split(',')
      .includes(this.deletePrivilege)
      ? true
      : false;
  }

  loadFilters(startDate: any) {
    this.filters = [
     
      {
        columnName: 'm.IsActive',
        columnDataType: 'bit',
        operator: '=',
        value1: '1',
        value2: '',
        logicalCondition: 'AND'
      }
      
    ];
  }

  // {
  //   columnName: 'm.CreatedDate',
  //   columnDataType: 'string',
  //   operator: '>',
  //   value1: startDate ? startDate : new Date('0001-01-01T00:00:00Z'),
  //   value2: '',
  //   logicalCondition: 'AND'
  // },

  // {
  //   columnName: 'm.IsActive',
  //   columnDataType: 'bit',
  //   operator: '=',
  //   value1: 1,
  //   value2: '',
  //   logicalCondition: 'AND'
  // },


  searchFunction(searchText: any) {
    this.isLoading = true;
    this.searchText = searchText;
    this.dataService
      .searchFunction(this.searchFunctionName ,{
        searchPatterns: {
        searchText: this.searchText,
        pageIndex: this.pageNumber,
        pageSize: this.pageSize,
        sortColumn: '',
        sortDirection: ''
        },
        filters: this.filters,
      })
      .subscribe(
        (result: any) => {
          this.dataList = result.data;
          this.isLoading = false;
        },
        async (error: any) => {
          console.error('Error handler:', error);
          const toast = await this.toastController.create({
            message: 'Error occurred while getting records',
            duration: 1500,
            position: 'top',
          });
          await toast.present();
          this.isLoading = false;
        }
      );
  }

  setRecordId(selectedId: any) {
    this.selectedId = selectedId;
  }

  deleteFunctionRecord(ev: any) {
    if (ev.detail.role === 'confirm') {
      this.isLoading = true;
      this.dataService.updateFunctionStatus(this.deleteFunctionName, this.selectedId).subscribe(
        async (result: any) => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Record deleted Successfully',
            duration: 1500,
            position: 'top',
          });
          await toast.present();
        },
        async (error: any) => {
          console.error('Error handler:', error);
          const toast = await this.toastController.create({
            message: 'Error occurred while deleting the record',
            duration: 1500,
            position: 'top',
          });
          await toast.present();
          this.isLoading = false;
        }
      );
    }
  }
}
