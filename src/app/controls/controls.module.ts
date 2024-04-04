import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CDateComponent } from './c-date/c-date.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CDateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot(), 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CDateComponent]
})
export class ControlsModule { }
