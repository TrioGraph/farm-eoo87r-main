import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Privileges } from '../enum/privileges';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user: any;
  accountPages = [
    // {
    //    title: 'Identifications',
    //    url: '/identificationlist',
    //    icon: 'add-circle-outline',
    //    privilegeId: Privileges.ViewPlantationIdentification,
    //    displayMenu: false
    // },
    // {
    //    title: 'Farmers',
    //    url: '/farmerlist',
    //    icon: 'people-outline',
    //    privilegeId: Privileges.ViewFarmers,
    //    displayMenu: false
    // },
    // {
    //   title: 'Nursaries',
    //   url: '/auth/signup',
    //   icon: 'people-outline',
    //   privilegeId: Privileges.ViewNursary,
    //   displayMenu: false
    // }

    {
      title: 'Dashboard',
      url: 'dashboard',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewAuthorisation,
      displayMenu: true,
    },
    {
      title: 'Add Field Visit',
      url: 'quick-field_visit',
      icon: 'add-circle-outline',
      privilegeId: Privileges.AddFieldVisit,
      displayMenu: true,
    },
    {
      title: 'Authorisation',
      url: 'role_privileges-list/""',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewAuthorisation,
      displayMenu: true,
    },

    // {
    //   title: 'Broadcast Message',
    //   url: 'broadcast_message-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewBroadcastMessage,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Campaign Types',
    //   url: 'campaign_types-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewCampaignTypes,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Campaigns',
    //   url: 'campaigns-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewCampaigns,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Crop Variety',
    //   url: 'crop_variety-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewCropVariety,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Districts',
    //   url: 'districts-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewDistricts,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Document Type',
    //   url: 'document_type-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewDocumentType,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Documents',
    //   url: 'documents-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewDocuments,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Employee Roles',
    //   url: 'employee_roles-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewEmployeeRoles,
    //   displayMenu: true,
    // },

    {
      title: 'Employee Types',
      url: 'employee_types-list/""',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewEmployeeTypes,
      displayMenu: true,
    },

    {
      title: 'Employees',
      url: 'employees-list/""',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewEmployees,
      displayMenu: true,
    },

    // {
    //   title: 'Farm Diseases',
    //   url: 'farm_diseases-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewFarmDiseases,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Farmer Group',
    //   url: 'farmer_group-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewFarmerGroup,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Farmer login visit logs',
    //   url: 'farmer_login_visit_logs-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewFarmerloginvisitlogs,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Farmer trip sheets',
    //   url: 'farmer_trip_sheets-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewFarmertripsheets,
    //   displayMenu: true,
    // },

    {
      title: 'Farmers',
      url: 'farmers-list/""',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewFarmers,
      displayMenu: true,
    },

    // {
    //   title: 'Farmers Login',
    //   url: 'farmers_login-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewFarmersLogin,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Farm Field',
    //   url: 'farmfield-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewFarmField,
    //   displayMenu: true,
    // },

    {
      title: 'Field Visit',
      url: 'field_visit-list/""',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewFieldVisit,
      displayMenu: true,
    },

    // {
    //   title: 'Logins',
    //   url: 'logins-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewLogins,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Logins Log',
    //   url: 'logins_log-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewLoginsLog,
    //   displayMenu: true,
    // },

    {
      title: 'Mandal Blocks',
      url: 'mandal_blocks-list/""',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewMandalBlocks,
      displayMenu: true,
    },

    {
      title: 'Nursary',
      url: 'nursary-list/""',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewNursary,
      displayMenu: true,
    },
    {
      title: 'Nursary Activity',
      url: 'nursary-activity-list/""',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewNursaryActivity,
      displayMenu: true,
    },

    // {
    //   title: 'Nursary Batches',
    //   url: 'nursary_batches-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewNursaryBatches,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Photos',
    //   url: 'photos-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewPhotos,
    //   displayMenu: true,
    // },

    {
      title: 'Plantation Identification',
      url: 'plantationidentification-list/""',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewPlantationIdentification,
      displayMenu: true,
    },

    // {
    //   title: 'Poaching FFB',
    //   url: 'poaching_ffb-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewPoachingFFB,
    //   displayMenu: true,
    // },

    {
      title: 'Privileges',
      url: 'privileges-list/""',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewPrivileges,
      displayMenu: true,
    },

    // {
    //   title: 'Referral Source',
    //   url: 'referral_source-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewReferralSource,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Role Privileges',
    //   url: 'role_privileges-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewRolePrivileges,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Roles',
    //   url: 'roles-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewRoles,
    //   displayMenu: true,
    // },

    // {
    //   title: 'States',
    //   url: 'states-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewStates,
    //   displayMenu: true,
    // },

    // {
    //   title: 'Training Videos',
    //   url: 'training_videos-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewTrainingVideos,
    //   displayMenu: true,
    // },

    {
      title: 'Villages',
      url: 'villages-list/""',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewVillages,
      displayMenu: true,
    },

    {
      title: 'Settings',
      url: 'settings',
      icon: 'add-circle-outline',
      privilegeId: Privileges.ViewVillages,
      displayMenu: true,
    },

    

    // {
    //   title: 'Workflow',
    //   url: 'workflow-list/""',
    //   icon: 'add-circle-outline',
    //   privilegeId: Privileges.ViewWorkflow,
    //   displayMenu: true,
    // },
  ];

  adminAccountPages = [
    {
      title: 'Districts',
      url: '/auth/signup',
      icon: 'people-outline',
      privilegeId: Privileges.ViewDistricts,
      displayMenu: false,
    },
    {
      title: 'Mandals',
      url: '/auth/signup',
      icon: 'people-outline',
      privilegeId: Privileges.ViewMandalBlocks,
      displayMenu: false,
    },
    {
      title: 'Villages',
      url: '/auth/signup',
      icon: 'people-outline',
      privilegeId: Privileges.ViewVillages,
      displayMenu: false,
    },
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
    this.dataService.userInfo.subscribe((data: any) => {
      this.user = data;
      console.log('User info : ', this.user);
      console.log('User info role_Priv: ', this.user.role_Priv);
      console.log('User info role_Priv.result: ', this.user.role_Priv.result);
    });
  }
}
