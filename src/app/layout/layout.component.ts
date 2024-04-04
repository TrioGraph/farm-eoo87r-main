import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Privileges } from '../enum/privileges';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent  implements OnInit {

  user: any;
  accountPages = [
    // {
    //    title: 'Identifications',
    //    url: '/identificationlist',
    //    icon: 'add-circle-outline',
    //    privilegeId: Privileges.viewPlantationIdentification,
    //    displayMenu: false
    // },
    // {
    //    title: 'Farmers',
    //    url: '/farmerlist',
    //    icon: 'people-outline',
    //    privilegeId: Privileges.viewFarmers,
    //    displayMenu: false
    // },
    // {
    //   title: 'Nursaries',
    //   url: '/auth/signup',
    //   icon: 'people-outline',
    //   privilegeId: Privileges.viewNursary,
    //   displayMenu: false
    // }



    
{
  title: 'Authorisation',
  url: 'authorisation-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewAuthorisation,
  displayMenu: true,
  },
  
  {
  title: 'Broadcast_Message',
  url: 'broadcast_message-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewBroadcastMessage,
  displayMenu: true,
  },
  
  {
  title: 'Campaign_Types',
  url: 'campaign_types-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewCampaignTypes,
  displayMenu: true,
  },
  
  {
  title: 'Campaigns',
  url: 'campaigns-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewCampaigns,
  displayMenu: true,
  },
  
  {
  title: 'Crop_Variety',
  url: 'crop_variety-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewCropVariety,
  displayMenu: true,
  },
  
  {
  title: 'Districts',
  url: 'districts-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewDistricts,
  displayMenu: true,
  },
  
  {
  title: 'Document_Type',
  url: 'document_type-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewDocumentType,
  displayMenu: true,
  },
  
  {
  title: 'Documents',
  url: 'documents-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewDocuments,
  displayMenu: true,
  },
  
  {
  title: 'Employee_Roles',
  url: 'employee_roles-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewEmployeeRoles,
  displayMenu: true,
  },
  
  {
  title: 'Employee_Types',
  url: 'employee_types-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewEmployeeTypes,
  displayMenu: true,
  },
  
  {
  title: 'Employees',
  url: 'employees-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewEmployees,
  displayMenu: true,
  },
  
  {
  title: 'Farm_Diseases',
  url: 'farm_diseases-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewFarmDiseases,
  displayMenu: true,
  },
  
  {
  title: 'Farmer_Group',
  url: 'farmer_group-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewFarmerGroup,
  displayMenu: true,
  },
  
  {
  title: 'Farmer_login_visit_logs',
  url: 'farmer_login_visit_logs-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewFarmerloginvisitlogs,
  displayMenu: true,
  },
  
  {
  title: 'Farmer_trip_sheets',
  url: 'farmer_trip_sheets-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewFarmertripsheets,
  displayMenu: true,
  },
  
  {
  title: 'Farmers',
  url: 'farmers-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewFarmers,
  displayMenu: true,
  },
  
  {
  title: 'Farmers_Login',
  url: 'farmers_login-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewFarmersLogin,
  displayMenu: true,
  },
  
  {
  title: 'FarmField',
  url: 'farmfield-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewFarmField,
  displayMenu: true,
  },
  
  {
  title: 'Field_Visit',
  url: 'field_visit-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewFieldVisit,
  displayMenu: true,
  },
  
  {
  title: 'Logins',
  url: 'logins-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewLogins,
  displayMenu: true,
  },
  
  {
  title: 'Logins_Log',
  url: 'logins_log-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewLoginsLog,
  displayMenu: true,
  },
  
  {
  title: 'Mandal_Blocks',
  url: 'mandal_blocks-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewMandalBlocks,
  displayMenu: true,
  },
  
  {
  title: 'Nursary',
  url: 'nursary-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewNursary,
  displayMenu: true,
  },
  
  {
  title: 'Nursary_Batches',
  url: 'nursary_batches-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewNursaryBatches,
  displayMenu: true,
  },
  
  {
  title: 'Photos',
  url: 'photos-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewPhotos,
  displayMenu: true,
  },
  
  {
  title: 'PlantationIdentification',
  url: 'plantationidentification-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewPlantationIdentification,
  displayMenu: true,
  },
  
  {
  title: 'Poaching_FFB',
  url: 'poaching_ffb-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewPoachingFFB,
  displayMenu: true,
  },
  
  {
  title: 'Privileges',
  url: 'privileges-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewPrivileges,
  displayMenu: true,
  },
  
  {
  title: 'Referral_Source',
  url: 'referral_source-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewReferralSource,
  displayMenu: true,
  },
  
  {
  title: 'Role_Privileges',
  url: 'role_privileges-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewRolePrivileges,
  displayMenu: true,
  },
  
  {
  title: 'Roles',
  url: 'roles-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewRoles,
  displayMenu: true,
  },
  
  {
  title: 'States',
  url: 'states-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewStates,
  displayMenu: true,
  },
  
  {
  title: 'Training_Videos',
  url: 'training_videos-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewTrainingVideos,
  displayMenu: true,
  },
  
  {
  title: 'Villages',
  url: 'villages-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewVillages,
  displayMenu: true,
  },
  
  {
  title: 'Workflow',
  url: 'workflow-list',
  icon: 'add-circle-outline',
  privilegeId: Privileges.viewWorkflow,
  displayMenu: true,
  },
  
  
];

adminAccountPages = [
 {
  title: 'Districts',
  url: '/auth/signup',
  icon: 'people-outline',
  privilegeId: Privileges.viewDistricts,
  displayMenu: false
},
{
title: 'Mandals',
url: '/auth/signup',
icon: 'people-outline',
privilegeId: Privileges.viewMandalBlocks,
displayMenu: false
},
{
title: 'Villages',
url: '/auth/signup',
icon: 'people-outline',
privilegeId: Privileges.viewVillages,
displayMenu: false
}
];

privilegesList: any[] = [];


  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private dataService: DataService) {}


  ngOnInit() {
    console.log();
    this.dataService.userInfo.subscribe((data: any) =>  {
      this.user = data;
      console.log('User info : ', this.user);
    });
  }


}
