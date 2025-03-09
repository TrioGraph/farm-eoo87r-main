import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CDateComponent } from './c-date/c-date.component';
import { IonicModule } from '@ionic/angular';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { TypeheadsingleComponent } from './typeheadsingle/typeheadsingle.component';
import { CDropdownComponent } from './c-dropdown/c-dropdown.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CTableComponent } from './c-table/c-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    CDateComponent,
    TypeaheadComponent,
    TypeheadsingleComponent,
    CDropdownComponent,
    CustomInputComponent,
    CTableComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    IonicModule.forRoot(), 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CDateComponent, 
    TypeaheadComponent, 
    TypeheadsingleComponent,
    CDropdownComponent,
    CustomInputComponent,
    CTableComponent,
    ListComponent
  ]
})
export class ControlsModule { }
