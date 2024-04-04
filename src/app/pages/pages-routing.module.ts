import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificationListComponent } from './identification/identification-list/identification-list.component';
import { IdentificationDetailsComponent } from './identification/identification-details/identification-details.component';
import { AddIdentificationComponent } from './identification/add-identification/add-identification.component';
import { UpdateIdentificationComponent } from './identification/update-identification/update-identification.component';
import { FarmerListComponent } from './farmer/farmer-list/farmer-list.component';
import { FarmerDetailsComponent } from './farmer/farmer-details/farmer-details.component';

const routes: Routes = [
  {    path: 'identificationlist', component: IdentificationListComponent, pathMatch: 'full' },
  {    path: 'identificationDetails', component: IdentificationDetailsComponent, pathMatch: 'full' },
  {    path: 'addIdentification', component: AddIdentificationComponent, pathMatch: 'full' },
  {    path: 'updateIdentification', component: UpdateIdentificationComponent, pathMatch: 'full' },

  {    path: 'farmerlist', component: FarmerListComponent, pathMatch: 'full' },
  {    path: 'farmerDetails', component: FarmerDetailsComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
