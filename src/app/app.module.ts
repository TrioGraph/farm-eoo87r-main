import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {register} from 'swiper/element/bundle';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFarmerComponent } from './pages/farmer/add-farmer/add-farmer.component';
import { FarmerDetailsComponent } from './pages/farmer/farmer-details/farmer-details.component';
import { FarmerListComponent } from './pages/farmer/farmer-list/farmer-list.component';
import { UpdateFarmerComponent } from './pages/farmer/update-farmer/update-farmer.component';
import { AddIdentificationComponent } from './pages/identification/add-identification/add-identification.component';
import { IdentificationDetailsComponent } from './pages/identification/identification-details/identification-details.component';
import { IdentificationListComponent } from './pages/identification/identification-list/identification-list.component';
import { UpdateIdentificationComponent } from './pages/identification/update-identification/update-identification.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchComponent } from './pages/controls/search/search.component';
import { AuthorisationListComponent } from './pages/authorisation/authorisation-list/authorisation-list.component';
import { AuthorisationDetailsComponent } from './pages/authorisation/authorisation-details/authorisation-details.component';
import { Broadcast_MessageDetailsComponent } from './pages/broadcast_message/broadcast_message-details/broadcast_message-details.component';
import { Broadcast_MessageListComponent } from './pages/broadcast_message/broadcast_message-list/broadcast_message-list.component';
import { Campaign_TypesDetailsComponent } from './pages/campaign_types/campaign_types-details/campaign_types-details.component';
import { Campaign_TypesListComponent } from './pages/campaign_types/campaign_types-list/campaign_types-list.component';
import { CampaignsDetailsComponent } from './pages/campaigns/campaigns-details/campaigns-details.component';
import { CampaignsListComponent } from './pages/campaigns/campaigns-list/campaigns-list.component';
import { Crop_VarietyDetailsComponent } from './pages/crop_variety/crop_variety-details/crop_variety-details.component';
import { Crop_VarietyListComponent } from './pages/crop_variety/crop_variety-list/crop_variety-list.component';
import { DistrictsDetailsComponent } from './pages/districts/districts-details/districts-details.component';
import { DistrictsListComponent } from './pages/districts/districts-list/districts-list.component';
import { Document_TypeDetailsComponent } from './pages/document_type/document_type-details/document_type-details.component';
import { Document_TypeListComponent } from './pages/document_type/document_type-list/document_type-list.component';
import { DocumentsDetailsComponent } from './pages/documents/documents-details/documents-details.component';
import { DocumentsListComponent } from './pages/documents/documents-list/documents-list.component';
import { Employee_RolesDetailsComponent } from './pages/employee_roles/employee_roles-details/employee_roles-details.component';
import { Employee_RolesListComponent } from './pages/employee_roles/employee_roles-list/employee_roles-list.component';
import { Employee_TypesDetailsComponent } from './pages/employee_types/employee_types-details/employee_types-details.component';
import { Employee_TypesListComponent } from './pages/employee_types/employee_types-list/employee_types-list.component';
import { EmployeesDetailsComponent } from './pages/employees/employees-details/employees-details.component';
import { EmployeesListComponent } from './pages/employees/employees-list/employees-list.component';
import { Farm_DiseasesDetailsComponent } from './pages/farm_diseases/farm_diseases-details/farm_diseases-details.component';
import { Farm_DiseasesListComponent } from './pages/farm_diseases/farm_diseases-list/farm_diseases-list.component';
import { Farmer_GroupDetailsComponent } from './pages/farmer_group/farmer_group-details/farmer_group-details.component';
import { Farmer_GroupListComponent } from './pages/farmer_group/farmer_group-list/farmer_group-list.component';
import { Farmer_login_visit_logsDetailsComponent } from './pages/farmer_login_visit_logs/farmer_login_visit_logs-details/farmer_login_visit_logs-details.component';
import { Farmer_login_visit_logsListComponent } from './pages/farmer_login_visit_logs/farmer_login_visit_logs-list/farmer_login_visit_logs-list.component';
import { Farmer_trip_sheetsDetailsComponent } from './pages/farmer_trip_sheets/farmer_trip_sheets-details/farmer_trip_sheets-details.component';
import { Farmer_trip_sheetsListComponent } from './pages/farmer_trip_sheets/farmer_trip_sheets-list/farmer_trip_sheets-list.component';
import { FarmersDetailsComponent } from './pages/farmers/farmers-details/farmers-details.component';
import { FarmersListComponent } from './pages/farmers/farmers-list/farmers-list.component';
import { Farmers_LoginDetailsComponent } from './pages/farmers_login/farmers_login-details/farmers_login-details.component';
import { Farmers_LoginListComponent } from './pages/farmers_login/farmers_login-list/farmers_login-list.component';
import { FarmFieldDetailsComponent } from './pages/farmfield/farmfield-details/farmfield-details.component';
import { FarmFieldListComponent } from './pages/farmfield/farmfield-list/farmfield-list.component';
import { Field_VisitDetailsComponent } from './pages/field_visit/field_visit-details/field_visit-details.component';
import { Field_VisitListComponent } from './pages/field_visit/field_visit-list/field_visit-list.component';
import { LoginsDetailsComponent } from './pages/logins/logins-details/logins-details.component';
import { LoginsListComponent } from './pages/logins/logins-list/logins-list.component';
import { Logins_LogDetailsComponent } from './pages/logins_log/logins_log-details/logins_log-details.component';
import { Logins_LogListComponent } from './pages/logins_log/logins_log-list/logins_log-list.component';
import { Mandal_BlocksDetailsComponent } from './pages/mandal_blocks/mandal_blocks-details/mandal_blocks-details.component';
import { Mandal_BlocksListComponent } from './pages/mandal_blocks/mandal_blocks-list/mandal_blocks-list.component';
import { NursaryDetailsComponent } from './pages/nursary/nursary-details/nursary-details.component';
import { NursaryListComponent } from './pages/nursary/nursary-list/nursary-list.component';
import { Nursary_BatchesDetailsComponent } from './pages/nursary_batches/nursary_batches-details/nursary_batches-details.component';
import { Nursary_BatchesListComponent } from './pages/nursary_batches/nursary_batches-list/nursary_batches-list.component';
import { PhotosDetailsComponent } from './pages/photos/photos-details/photos-details.component';
import { PhotosListComponent } from './pages/photos/photos-list/photos-list.component';
import { PlantationIdentificationDetailsComponent } from './pages/plantationidentification/plantationidentification-details/plantationidentification-details.component';
import { PlantationIdentificationListComponent } from './pages/plantationidentification/plantationidentification-list/plantationidentification-list.component';
import { Poaching_FFBDetailsComponent } from './pages/poaching_ffb/poaching_ffb-details/poaching_ffb-details.component';
import { Poaching_FFBListComponent } from './pages/poaching_ffb/poaching_ffb-list/poaching_ffb-list.component';
import { PrivilegesDetailsComponent } from './pages/privileges/privileges-details/privileges-details.component';
import { PrivilegesListComponent } from './pages/privileges/privileges-list/privileges-list.component';
import { Referral_SourceDetailsComponent } from './pages/referral_source/referral_source-details/referral_source-details.component';
import { Referral_SourceListComponent } from './pages/referral_source/referral_source-list/referral_source-list.component';
import { Role_PrivilegesDetailsComponent } from './pages/role_privileges/role_privileges-details/role_privileges-details.component';
import { Role_PrivilegesListComponent } from './pages/role_privileges/role_privileges-list/role_privileges-list.component';
import { RolesDetailsComponent } from './pages/roles/roles-details/roles-details.component';
import { RolesListComponent } from './pages/roles/roles-list/roles-list.component';
import { StatesDetailsComponent } from './pages/states/states-details/states-details.component';
import { StatesListComponent } from './pages/states/states-list/states-list.component';
import { Training_VideosDetailsComponent } from './pages/training_videos/training_videos-details/training_videos-details.component';
import { Training_VideosListComponent } from './pages/training_videos/training_videos-list/training_videos-list.component';
import { VillagesDetailsComponent } from './pages/villages/villages-details/villages-details.component';
import { VillagesListComponent } from './pages/villages/villages-list/villages-list.component';
import { WorkflowDetailsComponent } from './pages/workflow/workflow-details/workflow-details.component';
import { WorkflowListComponent } from './pages/workflow/workflow-list/workflow-list.component';
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
import { ControlsModule } from './controls/controls.module';
import { IonicSelectableComponent } from 'ionic-selectable';
import { AppInterceptor } from './interceptors/app.interceptor';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { QuickFieldVisitComponent } from './pages/quick-field-visit/quick-field-visit.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { Nursary_ActivityDetailsComponent } from './pages/nursary_activity/nursary_activity-details/nursary_activity-details.component';
import { Nursary_ActivityListComponent } from './pages/nursary_activity/nursary_activity-list/nursary_activity-list.component';
import { AddNursary_ActivityComponent } from './pages/nursary_activity/add-nursary_activity/add-nursary_activity.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthorizationsComponent } from './pages/authorizations/authorizations.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmojiComponent } from './pages/broadcast_message/emoji/emoji.component';
import { GetValueByIdPipe } from './get-value-by-id.pipe';

register();

@NgModule({
  declarations: [
    AppComponent, 
    LayoutComponent, 
    SearchComponent,
    LoginComponent, 
    ContactsListComponent,
    DashboardComponent,
    IdentificationListComponent,
    IdentificationDetailsComponent,
    AddIdentificationComponent,
    UpdateIdentificationComponent,
    // FarmerListComponent,
    // FarmerDetailsComponent,
    // AddFarmerComponent,
    // UpdateFarmerComponent,
    // AuthorisationListComponent,
    // AuthorisationDetailsComponent

    AuthorisationListComponent,
    AuthorisationDetailsComponent,
    AddAuthorisationComponent,
    Broadcast_MessageListComponent,
    Broadcast_MessageDetailsComponent,
    AddBroadcast_MessageComponent,
    Campaign_TypesListComponent,
    Campaign_TypesDetailsComponent,
    AddCampaign_TypesComponent,
    CampaignsListComponent,
    CampaignsDetailsComponent,
    AddCampaignsComponent,
    Crop_VarietyListComponent,
    Crop_VarietyDetailsComponent,
    AddCrop_VarietyComponent,
    DistrictsListComponent,
    DistrictsDetailsComponent,
    AddDistrictsComponent,
    Document_TypeListComponent,
    Document_TypeDetailsComponent,
    AddDocument_TypeComponent,
    DocumentsListComponent,
    DocumentsDetailsComponent,
    AddDocumentsComponent,
    Employee_RolesListComponent,
    Employee_RolesDetailsComponent,
    AddEmployee_RolesComponent,
    Employee_TypesListComponent,
    Employee_TypesDetailsComponent,
    AddEmployee_TypesComponent,
    EmployeesListComponent,
    EmployeesDetailsComponent,
    AddEmployeesComponent,
    Farm_DiseasesListComponent,
    Farm_DiseasesDetailsComponent,
    AddFarm_DiseasesComponent,
    Farmer_GroupListComponent,
    Farmer_GroupDetailsComponent,
    AddFarmer_GroupComponent,
    Farmer_login_visit_logsListComponent,
    Farmer_login_visit_logsDetailsComponent,
    AddFarmer_login_visit_logsComponent,
    Farmer_trip_sheetsListComponent,
    Farmer_trip_sheetsDetailsComponent,
    AddFarmer_trip_sheetsComponent,
    FarmersListComponent,
    FarmersDetailsComponent,
    AddFarmersComponent,
    Farmers_LoginListComponent,
    Farmers_LoginDetailsComponent,
    AddFarmers_LoginComponent,
    FarmFieldListComponent,
    FarmFieldDetailsComponent,
    AddFarmFieldComponent,
    Field_VisitListComponent,
    Field_VisitDetailsComponent,
    AddField_VisitComponent,
    LoginsListComponent,
    LoginsDetailsComponent,
    AddLoginsComponent,
    Logins_LogListComponent,
    Logins_LogDetailsComponent,
    AddLogins_LogComponent,
    Mandal_BlocksListComponent,
    Mandal_BlocksDetailsComponent,
    AddMandal_BlocksComponent,
    NursaryListComponent,
    NursaryDetailsComponent,
    AddNursaryComponent,
    Nursary_BatchesListComponent,
    Nursary_BatchesDetailsComponent,
    AddNursary_BatchesComponent,
    PhotosListComponent,
    PhotosDetailsComponent,
    AddPhotosComponent,
    PlantationIdentificationListComponent,
    PlantationIdentificationDetailsComponent,
    AddPlantationIdentificationComponent,
    Poaching_FFBListComponent,
    Poaching_FFBDetailsComponent,
    AddPoaching_FFBComponent,
    PrivilegesListComponent,
    PrivilegesDetailsComponent,
    AddPrivilegesComponent,
    Referral_SourceListComponent,
    Referral_SourceDetailsComponent,
    AddReferral_SourceComponent,
    Role_PrivilegesListComponent,
    Role_PrivilegesDetailsComponent,
    AddRole_PrivilegesComponent,
    RolesListComponent,
    RolesDetailsComponent,
    AddRolesComponent,
    StatesListComponent,
    StatesDetailsComponent,
    AddStatesComponent,
    Training_VideosListComponent,
    Training_VideosDetailsComponent,
    AddTraining_VideosComponent,
    VillagesListComponent,
    VillagesDetailsComponent,
    AddVillagesComponent,
    WorkflowListComponent,
    WorkflowDetailsComponent,
    AddWorkflowComponent,
    CustomDatePipe,
    QuickFieldVisitComponent,
    SettingsComponent,
    Nursary_ActivityListComponent,
    Nursary_ActivityDetailsComponent,
    AddNursary_ActivityComponent,
    AuthorizationsComponent,
    EmojiComponent,
    GetValueByIdPipe
  ],
  imports: [
    BrowserModule, 
    HttpClientModule , 
    IonicModule.forRoot(), 
    ControlsModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    IonicSelectableComponent,
    NgxPaginationModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
     },
    provideAnimationsAsync(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [LayoutComponent, 
    ContactsListComponent,
    SearchComponent,
    DashboardComponent,
    IdentificationListComponent,
    IdentificationDetailsComponent,
    AddIdentificationComponent,
    UpdateIdentificationComponent,
    // FarmerListComponent,
    // FarmerDetailsComponent,
    // AddFarmerComponent,
    // UpdateFarmerComponent,
    // AuthorisationListComponent,
    // AuthorisationDetailsComponent



    AuthorisationListComponent,
    AuthorisationDetailsComponent,
    AddAuthorisationComponent,
    Broadcast_MessageListComponent,
    Broadcast_MessageDetailsComponent,
    AddBroadcast_MessageComponent,
    Campaign_TypesListComponent,
    Campaign_TypesDetailsComponent,
    AddCampaign_TypesComponent,
    CampaignsListComponent,
    CampaignsDetailsComponent,
    AddCampaignsComponent,
    Crop_VarietyListComponent,
    Crop_VarietyDetailsComponent,
    AddCrop_VarietyComponent,
    DistrictsListComponent,
    DistrictsDetailsComponent,
    AddDistrictsComponent,
    Document_TypeListComponent,
    Document_TypeDetailsComponent,
    AddDocument_TypeComponent,
    DocumentsListComponent,
    DocumentsDetailsComponent,
    AddDocumentsComponent,
    Employee_RolesListComponent,
    Employee_RolesDetailsComponent,
    AddEmployee_RolesComponent,
    Employee_TypesListComponent,
    Employee_TypesDetailsComponent,
    AddEmployee_TypesComponent,
    EmployeesListComponent,
    EmployeesDetailsComponent,
    AddEmployeesComponent,
    Farm_DiseasesListComponent,
    Farm_DiseasesDetailsComponent,
    AddFarm_DiseasesComponent,
    Farmer_GroupListComponent,
    Farmer_GroupDetailsComponent,
    AddFarmer_GroupComponent,
    Farmer_login_visit_logsListComponent,
    Farmer_login_visit_logsDetailsComponent,
    AddFarmer_login_visit_logsComponent,
    Farmer_trip_sheetsListComponent,
    Farmer_trip_sheetsDetailsComponent,
    AddFarmer_trip_sheetsComponent,
    FarmersListComponent,
    FarmersDetailsComponent,
    AddFarmersComponent,
    Farmers_LoginListComponent,
    Farmers_LoginDetailsComponent,
    AddFarmers_LoginComponent,
    FarmFieldListComponent,
    FarmFieldDetailsComponent,
    AddFarmFieldComponent,
    Field_VisitListComponent,
    Field_VisitDetailsComponent,
    AddField_VisitComponent,
    LoginsListComponent,
    LoginsDetailsComponent,
    AddLoginsComponent,
    Logins_LogListComponent,
    Logins_LogDetailsComponent,
    AddLogins_LogComponent,
    Mandal_BlocksListComponent,
    Mandal_BlocksDetailsComponent,
    AddMandal_BlocksComponent,
    NursaryListComponent,
    NursaryDetailsComponent,
    AddNursaryComponent,
    Nursary_BatchesListComponent,
    Nursary_BatchesDetailsComponent,
    AddNursary_BatchesComponent,
    PhotosListComponent,
    PhotosDetailsComponent,
    AddPhotosComponent,
    PlantationIdentificationListComponent,
    PlantationIdentificationDetailsComponent,
    AddPlantationIdentificationComponent,
    Poaching_FFBListComponent,
    Poaching_FFBDetailsComponent,
    AddPoaching_FFBComponent,
    PrivilegesListComponent,
    PrivilegesDetailsComponent,
    AddPrivilegesComponent,
    Referral_SourceListComponent,
    Referral_SourceDetailsComponent,
    AddReferral_SourceComponent,
    Role_PrivilegesListComponent,
    Role_PrivilegesDetailsComponent,
    AddRole_PrivilegesComponent,
    RolesListComponent,
    RolesDetailsComponent,
    AddRolesComponent,
    StatesListComponent,
    StatesDetailsComponent,
    AddStatesComponent,
    Training_VideosListComponent,
    Training_VideosDetailsComponent,
    AddTraining_VideosComponent,
    VillagesListComponent,
    VillagesDetailsComponent,
    AddVillagesComponent,
    WorkflowListComponent,
    WorkflowDetailsComponent,
    AddWorkflowComponent,
    QuickFieldVisitComponent,
    SettingsComponent,
    AuthorizationsComponent,
    EmojiComponent


  ]
})
export class AppModule {}
