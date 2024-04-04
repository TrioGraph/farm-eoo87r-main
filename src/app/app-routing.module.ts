import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { FarmerDetailsComponent } from './pages/farmer/farmer-details/farmer-details.component';
import { FarmerListComponent } from './pages/farmer/farmer-list/farmer-list.component';
import { AddIdentificationComponent } from './pages/identification/add-identification/add-identification.component';
import { IdentificationDetailsComponent } from './pages/identification/identification-details/identification-details.component';
import { IdentificationListComponent } from './pages/identification/identification-list/identification-list.component';
import { UpdateIdentificationComponent } from './pages/identification/update-identification/update-identification.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthorisationListComponent } from './pages/authorisation/authorisation-list/authorisation-list.component';
import { Broadcast_MessageListComponent } from './pages/broadcast_message/broadcast_message-list/broadcast_message-list.component';
import { Campaign_TypesListComponent } from './pages/campaign_types/campaign_types-list/campaign_types-list.component';
import { CampaignsListComponent } from './pages/campaigns/campaigns-list/campaigns-list.component';
import { Crop_VarietyListComponent } from './pages/crop_variety/crop_variety-list/crop_variety-list.component';
import { DistrictsListComponent } from './pages/districts/districts-list/districts-list.component';
import { Document_TypeListComponent } from './pages/document_type/document_type-list/document_type-list.component';
import { DocumentsListComponent } from './pages/documents/documents-list/documents-list.component';
import { Employee_RolesListComponent } from './pages/employee_roles/employee_roles-list/employee_roles-list.component';
import { Employee_TypesListComponent } from './pages/employee_types/employee_types-list/employee_types-list.component';
import { EmployeesListComponent } from './pages/employees/employees-list/employees-list.component';
import { Farm_DiseasesListComponent } from './pages/farm_diseases/farm_diseases-list/farm_diseases-list.component';
import { Farmer_GroupListComponent } from './pages/farmer_group/farmer_group-list/farmer_group-list.component';
import { Farmer_login_visit_logsListComponent } from './pages/farmer_login_visit_logs/farmer_login_visit_logs-list/farmer_login_visit_logs-list.component';
import { Farmer_trip_sheetsListComponent } from './pages/farmer_trip_sheets/farmer_trip_sheets-list/farmer_trip_sheets-list.component';
import { FarmersListComponent } from './pages/farmers/farmers-list/farmers-list.component';
import { Farmers_LoginListComponent } from './pages/farmers_login/farmers_login-list/farmers_login-list.component';
import { FarmFieldListComponent } from './pages/farmfield/farmfield-list/farmfield-list.component';
import { Field_VisitListComponent } from './pages/field_visit/field_visit-list/field_visit-list.component';
import { LoginsListComponent } from './pages/logins/logins-list/logins-list.component';
import { Logins_LogListComponent } from './pages/logins_log/logins_log-list/logins_log-list.component';
import { Mandal_BlocksListComponent } from './pages/mandal_blocks/mandal_blocks-list/mandal_blocks-list.component';
import { NursaryListComponent } from './pages/nursary/nursary-list/nursary-list.component';
import { Nursary_BatchesListComponent } from './pages/nursary_batches/nursary_batches-list/nursary_batches-list.component';
import { PhotosListComponent } from './pages/photos/photos-list/photos-list.component';
import { PlantationIdentificationListComponent } from './pages/plantationidentification/plantationidentification-list/plantationidentification-list.component';
import { Poaching_FFBListComponent } from './pages/poaching_ffb/poaching_ffb-list/poaching_ffb-list.component';
import { PrivilegesListComponent } from './pages/privileges/privileges-list/privileges-list.component';
import { Referral_SourceListComponent } from './pages/referral_source/referral_source-list/referral_source-list.component';
import { Role_PrivilegesListComponent } from './pages/role_privileges/role_privileges-list/role_privileges-list.component';
import { RolesListComponent } from './pages/roles/roles-list/roles-list.component';
import { StatesListComponent } from './pages/states/states-list/states-list.component';
import { Training_VideosListComponent } from './pages/training_videos/training_videos-list/training_videos-list.component';
import { VillagesListComponent } from './pages/villages/villages-list/villages-list.component';
import { WorkflowListComponent } from './pages/workflow/workflow-list/workflow-list.component';
import { AuthorisationDetailsComponent } from './pages/authorisation/authorisation-details/authorisation-details.component';
import { Broadcast_MessageDetailsComponent } from './pages/broadcast_message/broadcast_message-details/broadcast_message-details.component';
import { Campaign_TypesDetailsComponent } from './pages/campaign_types/campaign_types-details/campaign_types-details.component';
import { CampaignsDetailsComponent } from './pages/campaigns/campaigns-details/campaigns-details.component';
import { Crop_VarietyDetailsComponent } from './pages/crop_variety/crop_variety-details/crop_variety-details.component';
import { DistrictsDetailsComponent } from './pages/districts/districts-details/districts-details.component';
import { Document_TypeDetailsComponent } from './pages/document_type/document_type-details/document_type-details.component';
import { DocumentsDetailsComponent } from './pages/documents/documents-details/documents-details.component';
import { Employee_RolesDetailsComponent } from './pages/employee_roles/employee_roles-details/employee_roles-details.component';
import { Employee_TypesDetailsComponent } from './pages/employee_types/employee_types-details/employee_types-details.component';
import { EmployeesDetailsComponent } from './pages/employees/employees-details/employees-details.component';
import { Farm_DiseasesDetailsComponent } from './pages/farm_diseases/farm_diseases-details/farm_diseases-details.component';
import { Farmer_GroupDetailsComponent } from './pages/farmer_group/farmer_group-details/farmer_group-details.component';
import { Farmer_login_visit_logsDetailsComponent } from './pages/farmer_login_visit_logs/farmer_login_visit_logs-details/farmer_login_visit_logs-details.component';
import { Farmer_trip_sheetsDetailsComponent } from './pages/farmer_trip_sheets/farmer_trip_sheets-details/farmer_trip_sheets-details.component';
import { FarmersDetailsComponent } from './pages/farmers/farmers-details/farmers-details.component';
import { Farmers_LoginDetailsComponent } from './pages/farmers_login/farmers_login-details/farmers_login-details.component';
import { FarmFieldDetailsComponent } from './pages/farmfield/farmfield-details/farmfield-details.component';
import { Field_VisitDetailsComponent } from './pages/field_visit/field_visit-details/field_visit-details.component';
import { LoginsDetailsComponent } from './pages/logins/logins-details/logins-details.component';
import { Logins_LogDetailsComponent } from './pages/logins_log/logins_log-details/logins_log-details.component';
import { Mandal_BlocksDetailsComponent } from './pages/mandal_blocks/mandal_blocks-details/mandal_blocks-details.component';
import { NursaryDetailsComponent } from './pages/nursary/nursary-details/nursary-details.component';
import { Nursary_BatchesDetailsComponent } from './pages/nursary_batches/nursary_batches-details/nursary_batches-details.component';
import { PhotosDetailsComponent } from './pages/photos/photos-details/photos-details.component';
import { PlantationIdentificationDetailsComponent } from './pages/plantationidentification/plantationidentification-details/plantationidentification-details.component';
import { Poaching_FFBDetailsComponent } from './pages/poaching_ffb/poaching_ffb-details/poaching_ffb-details.component';
import { PrivilegesDetailsComponent } from './pages/privileges/privileges-details/privileges-details.component';
import { Referral_SourceDetailsComponent } from './pages/referral_source/referral_source-details/referral_source-details.component';
import { Role_PrivilegesDetailsComponent } from './pages/role_privileges/role_privileges-details/role_privileges-details.component';
import { RolesDetailsComponent } from './pages/roles/roles-details/roles-details.component';
import { StatesDetailsComponent } from './pages/states/states-details/states-details.component';
import { Training_VideosDetailsComponent } from './pages/training_videos/training_videos-details/training_videos-details.component';
import { VillagesDetailsComponent } from './pages/villages/villages-details/villages-details.component';
import { WorkflowDetailsComponent } from './pages/workflow/workflow-details/workflow-details.component';
import { AddAuthorisationComponent } from './pages/authorisation/add-authorisation/add-authorisation.component';
import { AddBroadcast_MessageComponent } from './pages/broadcast_message/add-broadcast_message/add-broadcast_message.component';
import { AddCampaign_TypesComponent } from './pages/campaign_types/add-campaign_types/add-campaign_types.component';
import { AddCampaignsComponent } from './pages/campaigns/add-campaigns/add-campaigns.component';
import { AddCrop_VarietyComponent } from './pages/crop_variety/add-crop_variety/add-crop_variety.component';
import { AddDistrictsComponent } from './pages/districts/add-districts/add-districts.component';
import { AddDocument_TypeComponent } from './pages/document_type/add-document_type/add-document_type.component';
import { AddDocumentsComponent } from './pages/documents/add-documents/add-documents.component';
import { AddEmployee_RolesComponent } from './pages/employee_roles/add-employee_roles/add-employee_roles.component';
import { AddEmployee_TypesComponent } from './pages/employee_types/add-employee_types/add-employee_types.component';
import { AddEmployeesComponent } from './pages/employees/add-employees/add-employees.component';
import { AddFarm_DiseasesComponent } from './pages/farm_diseases/add-farm_diseases/add-farm_diseases.component';
import { AddFarmer_GroupComponent } from './pages/farmer_group/add-farmer_group/add-farmer_group.component';
import { AddFarmer_login_visit_logsComponent } from './pages/farmer_login_visit_logs/add-farmer_login_visit_logs/add-farmer_login_visit_logs.component';
import { AddFarmer_trip_sheetsComponent } from './pages/farmer_trip_sheets/add-farmer_trip_sheets/add-farmer_trip_sheets.component';
import { AddFarmersComponent } from './pages/farmers/add-farmers/add-farmers.component';
import { AddFarmers_LoginComponent } from './pages/farmers_login/add-farmers_login/add-farmers_login.component';
import { AddFarmFieldComponent } from './pages/farmfield/add-farmfield/add-farmfield.component';
import { AddField_VisitComponent } from './pages/field_visit/add-field_visit/add-field_visit.component';
import { AddLoginsComponent } from './pages/logins/add-logins/add-logins.component';
import { AddLogins_LogComponent } from './pages/logins_log/add-logins_log/add-logins_log.component';
import { AddMandal_BlocksComponent } from './pages/mandal_blocks/add-mandal_blocks/add-mandal_blocks.component';
import { AddNursaryComponent } from './pages/nursary/add-nursary/add-nursary.component';
import { AddNursary_BatchesComponent } from './pages/nursary_batches/add-nursary_batches/add-nursary_batches.component';
import { AddPhotosComponent } from './pages/photos/add-photos/add-photos.component';
import { AddPlantationIdentificationComponent } from './pages/plantationidentification/add-plantationidentification/add-plantationidentification.component';
import { AddPoaching_FFBComponent } from './pages/poaching_ffb/add-poaching_ffb/add-poaching_ffb.component';
import { AddPrivilegesComponent } from './pages/privileges/add-privileges/add-privileges.component';
import { AddReferral_SourceComponent } from './pages/referral_source/add-referral_source/add-referral_source.component';
import { AddRole_PrivilegesComponent } from './pages/role_privileges/add-role_privileges/add-role_privileges.component';
import { AddRolesComponent } from './pages/roles/add-roles/add-roles.component';
import { AddStatesComponent } from './pages/states/add-states/add-states.component';
import { AddTraining_VideosComponent } from './pages/training_videos/add-training_videos/add-training_videos.component';
import { AddVillagesComponent } from './pages/villages/add-villages/add-villages.component';
import { AddWorkflowComponent } from './pages/workflow/add-workflow/add-workflow.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'farm',
    component: LayoutComponent,
    children: [
      {
        path: 'contacts',
        component: ContactsListComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full',
      },
      // {
      //   path: 'identificationlist',
      //   component: IdentificationListComponent,
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'identificationDetails/:id',
      //   component: IdentificationDetailsComponent,
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'addIdentification',
      //   component: AddIdentificationComponent,
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'updateIdentification',
      //   component: UpdateIdentificationComponent,
      //   pathMatch: 'full',
      // },

      // { path: 'farmerlist', component: FarmerListComponent, pathMatch: 'full' },
      // {
      //   path: 'farmerDetails',
      //   component: FarmerDetailsComponent,
      //   pathMatch: 'full',
      // },





      // {
      //   path: 'pages',
      //   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
      // }





      {path: 'authorisation-list', component: AuthorisationListComponent, pathMatch:'full'},
{path: 'authorisation-details/:id', component: AuthorisationDetailsComponent, pathMatch:'full'},
{path: 'add-authorisation', component: AddAuthorisationComponent, pathMatch:'full'},
{path: 'broadcast_message-list', component: Broadcast_MessageListComponent, pathMatch:'full'},
{path: 'broadcast_message-details/:id', component: Broadcast_MessageDetailsComponent, pathMatch:'full'},
{path: 'add-broadcast_message', component: AddBroadcast_MessageComponent, pathMatch:'full'},
{path: 'campaign_types-list', component: Campaign_TypesListComponent, pathMatch:'full'},
{path: 'campaign_types-details/:id', component: Campaign_TypesDetailsComponent, pathMatch:'full'},
{path: 'add-campaign_types', component: AddCampaign_TypesComponent, pathMatch:'full'},
{path: 'campaigns-list', component: CampaignsListComponent, pathMatch:'full'},
{path: 'campaigns-details/:id', component: CampaignsDetailsComponent, pathMatch:'full'},
{path: 'add-campaigns', component: AddCampaignsComponent, pathMatch:'full'},
{path: 'crop_variety-list', component: Crop_VarietyListComponent, pathMatch:'full'},
{path: 'crop_variety-details/:id', component: Crop_VarietyDetailsComponent, pathMatch:'full'},
{path: 'add-crop_variety', component: AddCrop_VarietyComponent, pathMatch:'full'},
{path: 'districts-list', component: DistrictsListComponent, pathMatch:'full'},
{path: 'districts-details/:id', component: DistrictsDetailsComponent, pathMatch:'full'},
{path: 'add-districts', component: AddDistrictsComponent, pathMatch:'full'},
{path: 'document_type-list', component: Document_TypeListComponent, pathMatch:'full'},
{path: 'document_type-details/:id', component: Document_TypeDetailsComponent, pathMatch:'full'},
{path: 'add-document_type', component: AddDocument_TypeComponent, pathMatch:'full'},
{path: 'documents-list', component: DocumentsListComponent, pathMatch:'full'},
{path: 'documents-details/:id', component: DocumentsDetailsComponent, pathMatch:'full'},
{path: 'add-documents', component: AddDocumentsComponent, pathMatch:'full'},
{path: 'employee_roles-list', component: Employee_RolesListComponent, pathMatch:'full'},
{path: 'employee_roles-details/:id', component: Employee_RolesDetailsComponent, pathMatch:'full'},
{path: 'add-employee_roles', component: AddEmployee_RolesComponent, pathMatch:'full'},
{path: 'employee_types-list', component: Employee_TypesListComponent, pathMatch:'full'},
{path: 'employee_types-details/:id', component: Employee_TypesDetailsComponent, pathMatch:'full'},
{path: 'add-employee_types', component: AddEmployee_TypesComponent, pathMatch:'full'},
{path: 'employees-list', component: EmployeesListComponent, pathMatch:'full'},
{path: 'employees-details/:id', component: EmployeesDetailsComponent, pathMatch:'full'},
{path: 'add-employees', component: AddEmployeesComponent, pathMatch:'full'},
{path: 'farm_diseases-list', component: Farm_DiseasesListComponent, pathMatch:'full'},
{path: 'farm_diseases-details/:id', component: Farm_DiseasesDetailsComponent, pathMatch:'full'},
{path: 'add-farm_diseases', component: AddFarm_DiseasesComponent, pathMatch:'full'},
{path: 'farmer_group-list', component: Farmer_GroupListComponent, pathMatch:'full'},
{path: 'farmer_group-details/:id', component: Farmer_GroupDetailsComponent, pathMatch:'full'},
{path: 'add-farmer_group', component: AddFarmer_GroupComponent, pathMatch:'full'},
{path: 'farmer_login_visit_logs-list', component: Farmer_login_visit_logsListComponent, pathMatch:'full'},
{path: 'farmer_login_visit_logs-details/:id', component: Farmer_login_visit_logsDetailsComponent, pathMatch:'full'},
{path: 'add-farmer_login_visit_logs', component: AddFarmer_login_visit_logsComponent, pathMatch:'full'},
{path: 'farmer_trip_sheets-list', component: Farmer_trip_sheetsListComponent, pathMatch:'full'},
{path: 'farmer_trip_sheets-details/:id', component: Farmer_trip_sheetsDetailsComponent, pathMatch:'full'},
{path: 'add-farmer_trip_sheets', component: AddFarmer_trip_sheetsComponent, pathMatch:'full'},
{path: 'farmers-list', component: FarmersListComponent, pathMatch:'full'},
{path: 'farmers-details/:id', component: FarmersDetailsComponent, pathMatch:'full'},
{path: 'add-farmers', component: AddFarmersComponent, pathMatch:'full'},
{path: 'farmers_login-list', component: Farmers_LoginListComponent, pathMatch:'full'},
{path: 'farmers_login-details/:id', component: Farmers_LoginDetailsComponent, pathMatch:'full'},
{path: 'add-farmers_login', component: AddFarmers_LoginComponent, pathMatch:'full'},
{path: 'farmfield-list', component: FarmFieldListComponent, pathMatch:'full'},
{path: 'farmfield-details/:id', component: FarmFieldDetailsComponent, pathMatch:'full'},
{path: 'add-farmfield', component: AddFarmFieldComponent, pathMatch:'full'},
{path: 'field_visit-list', component: Field_VisitListComponent, pathMatch:'full'},
{path: 'field_visit-details/:id', component: Field_VisitDetailsComponent, pathMatch:'full'},
{path: 'add-field_visit', component: AddField_VisitComponent, pathMatch:'full'},
{path: 'logins-list', component: LoginsListComponent, pathMatch:'full'},
{path: 'logins-details/:id', component: LoginsDetailsComponent, pathMatch:'full'},
{path: 'add-logins', component: AddLoginsComponent, pathMatch:'full'},
{path: 'logins_log-list', component: Logins_LogListComponent, pathMatch:'full'},
{path: 'logins_log-details/:id', component: Logins_LogDetailsComponent, pathMatch:'full'},
{path: 'add-logins_log', component: AddLogins_LogComponent, pathMatch:'full'},
{path: 'mandal_blocks-list', component: Mandal_BlocksListComponent, pathMatch:'full'},
{path: 'mandal_blocks-details/:id', component: Mandal_BlocksDetailsComponent, pathMatch:'full'},
{path: 'add-mandal_blocks', component: AddMandal_BlocksComponent, pathMatch:'full'},
{path: 'nursary-list', component: NursaryListComponent, pathMatch:'full'},
{path: 'nursary-details/:id', component: NursaryDetailsComponent, pathMatch:'full'},
{path: 'add-nursary', component: AddNursaryComponent, pathMatch:'full'},
{path: 'nursary_batches-list', component: Nursary_BatchesListComponent, pathMatch:'full'},
{path: 'nursary_batches-details/:id', component: Nursary_BatchesDetailsComponent, pathMatch:'full'},
{path: 'add-nursary_batches', component: AddNursary_BatchesComponent, pathMatch:'full'},
{path: 'photos-list', component: PhotosListComponent, pathMatch:'full'},
{path: 'photos-details/:id', component: PhotosDetailsComponent, pathMatch:'full'},
{path: 'add-photos', component: AddPhotosComponent, pathMatch:'full'},
{path: 'plantationidentification-list', component: PlantationIdentificationListComponent, pathMatch:'full'},
{path: 'plantationidentification-details/:id', component: PlantationIdentificationDetailsComponent, pathMatch:'full'},
{path: 'add-plantationidentification', component: AddPlantationIdentificationComponent, pathMatch:'full'},
{path: 'poaching_ffb-list', component: Poaching_FFBListComponent, pathMatch:'full'},
{path: 'poaching_ffb-details/:id', component: Poaching_FFBDetailsComponent, pathMatch:'full'},
{path: 'add-poaching_ffb', component: AddPoaching_FFBComponent, pathMatch:'full'},
{path: 'privileges-list', component: PrivilegesListComponent, pathMatch:'full'},
{path: 'privileges-details/:id', component: PrivilegesDetailsComponent, pathMatch:'full'},
{path: 'add-privileges', component: AddPrivilegesComponent, pathMatch:'full'},
{path: 'referral_source-list', component: Referral_SourceListComponent, pathMatch:'full'},
{path: 'referral_source-details/:id', component: Referral_SourceDetailsComponent, pathMatch:'full'},
{path: 'add-referral_source', component: AddReferral_SourceComponent, pathMatch:'full'},
{path: 'role_privileges-list', component: Role_PrivilegesListComponent, pathMatch:'full'},
{path: 'role_privileges-details/:id', component: Role_PrivilegesDetailsComponent, pathMatch:'full'},
{path: 'add-role_privileges', component: AddRole_PrivilegesComponent, pathMatch:'full'},
{path: 'roles-list', component: RolesListComponent, pathMatch:'full'},
{path: 'roles-details/:id', component: RolesDetailsComponent, pathMatch:'full'},
{path: 'add-roles', component: AddRolesComponent, pathMatch:'full'},
{path: 'states-list', component: StatesListComponent, pathMatch:'full'},
{path: 'states-details/:id', component: StatesDetailsComponent, pathMatch:'full'},
{path: 'add-states', component: AddStatesComponent, pathMatch:'full'},
{path: 'training_videos-list', component: Training_VideosListComponent, pathMatch:'full'},
{path: 'training_videos-details/:id', component: Training_VideosDetailsComponent, pathMatch:'full'},
{path: 'add-training_videos', component: AddTraining_VideosComponent, pathMatch:'full'},
{path: 'villages-list', component: VillagesListComponent, pathMatch:'full'},
{path: 'villages-details/:id', component: VillagesDetailsComponent, pathMatch:'full'},
{path: 'add-villages', component: AddVillagesComponent, pathMatch:'full'},
{path: 'workflow-list', component: WorkflowListComponent, pathMatch:'full'},
{path: 'workflow-details/:id', component: WorkflowDetailsComponent, pathMatch:'full'},
{path: 'add-workflow', component: AddWorkflowComponent, pathMatch:'full'},

    ],
  },
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  //   {
  //     path: 'farm',
  //     component: LayoutComponent,
  //     pathMatch: 'full',
  //     children: [
  //   {
  //     path: 'folder/:id',
  //     loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  //   },
  //   {
  //     path: 'contacts',
  //     component: ContactsListComponent,
  //     pathMatch: 'full'

  //   }]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
