import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CDateComponent } from './c-date/c-date.component';
import { IonicModule } from '@ionic/angular';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { TypeheadsingleComponent } from './typeheadsingle/typeheadsingle.component';



@NgModule({
  declarations: [
    CDateComponent,
    TypeaheadComponent,
    TypeheadsingleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(), 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CDateComponent, TypeaheadComponent, TypeheadsingleComponent]
})
export class ControlsModule { }
