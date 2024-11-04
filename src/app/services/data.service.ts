import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, catchError, retry } from 'rxjs';
import { Contact } from '../models/contact';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  userInfo: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  
  createContact(newContact: Contact) {
    console.log('newContact : ', newContact);
  }

  apiURL: string = environment.baseURL;

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Http Options
  httpOptionsFormBody = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };



  constructor(private http: HttpClient) { }

//    getFarmers(searchText: string, pageNumber: number, pageSize: number, sortColumn: string, sortOrder: string): Observable<any> {
//     console.log(this.apiURL + 'SearchFarmers');
//     return this.http.get(this.apiURL + 'SearchFarmers?searchText=' + searchText +
//     '&pageNumber='+ pageNumber + '&pageSize=' + pageSize + '&sortColumn=' + sortColumn + '&sortOrder=' + sortOrder);
//   }

//   getPlantationIdentificationById(plantationDetailsId: any) {
//     console.log('Service :: plantationDetailsId: ', plantationDetailsId);
//     return this.http.get(this.apiURL + 'Farmers?Id='+ plantationDetailsId);
//   }

//   addPlantationIdentification(plantationDetails: any) {
//     return this.http.post(this.apiURL + 'CreatePlantationIdentification', plantationDetails, this.httpOptions);
//   }

//   updatePlantationIdentification(record: any) {
//     return this.http.put(this.apiURL + 'UpdatePlantationIdentification', record, this.httpOptions);
//   }
//   deletePlantationIdentification(record: any) {
//     return this.http.delete(this.apiURL + 'DeletePlantationIdentification', record);
//   }

//   getAuthorisation(): Observable<any> {
//     return this.http.get<any>(`${this.apiURL}getAllAuthorisation`)
// }

// getAuthorisationById(id: any): Observable<any> {
//   return this.http.get<any>(`${this.apiURL}AuthAuthorisation?Id=` + id)
// }

//   addAuthorisation(addAuthorisation: any): any {
//     return this.http.post(`${this.apiURL}addAuthorisation`, addAuthorisation, this.httpOptions)
// }

// updateAuthorisation(AuthorisationId: any, AuthorisationDetails: any): any {
//   return this.http.put(`${this.apiURL}AuthApps/` + AuthorisationId, AuthorisationDetails, this.httpOptions)
// }


// searchAuthorisation(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any): Observable<any> {
//     return this.http.get<any>(`${this.apiURL}SearchAuthorisation?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder )
// }

insertTableByColumns(insertInfo: any): any {
  // return this.http.post(`${this.apiURL}addPlantationIdentification`, addPlantationIdentification, this.httpOptions)
  return this.http.patch(`${this.apiURL}Util/insertInfo`, insertInfo)
}

updateTableByColumns(updateInfo: any): any {
  return this.http.patch(`${this.apiURL}Util/updateInfo`, updateInfo)
  }

  
  getAuthorisation(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllAuthorisation`)
}

getAuthorisationById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Authorisation?Id=` + id)
}

getAuthorisationLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAuthorisationLookup`)
}

  addAuthorisation(addAuthorisation: any): any {
    return this.http.post(`${this.apiURL}addAuthorisation`, addAuthorisation, this.httpOptions)
}

updateAuthorisation(AuthorisationId: any, AuthorisationDetails: any): any {
  return this.http.put(`${this.apiURL}Authorisation/` + AuthorisationId, AuthorisationDetails, this.httpOptions)
}

updateAuthorisationStatus(AuthorisationId: any): any {
  return this.http.put(`${this.apiURL}Authorisation/UpdateAuthorisationStatus/` + AuthorisationId, this.httpOptions)
}


searchAuthorisation(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchAuthorisation?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getBroadcast_Message(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllBroadcast_Message`)
}

getBroadcast_MessageById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Broadcast_Message?Id=` + id)
}

getBroadcast_MessageLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getBroadcast_MessageLookup`)
}

  addBroadcast_Message(addBroadcast_Message: any): any {
    return this.http.post(`${this.apiURL}addBroadcast_Message`, addBroadcast_Message, this.httpOptions)
}

updateBroadcast_Message(Broadcast_MessageId: any, Broadcast_MessageDetails: any): any {
  return this.http.put(`${this.apiURL}Broadcast_Message/` + Broadcast_MessageId, Broadcast_MessageDetails, this.httpOptions)
}

updateBroadcast_MessageStatus(Broadcast_MessageId: any): any {
  return this.http.put(`${this.apiURL}Broadcast_Message/UpdateBroadcast_MessageStatus/` + Broadcast_MessageId, this.httpOptions)
}


searchBroadcast_Message(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchBroadcast_Message?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getCampaign_Types(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllCampaign_Types`)
}

getCampaign_TypesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Campaign_Types?Id=` + id)
}

getCampaign_TypesLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getCampaign_TypesLookup`)
}

  addCampaign_Types(addCampaign_Types: any): any {
    return this.http.post(`${this.apiURL}addCampaign_Types`, addCampaign_Types, this.httpOptions)
}

updateCampaign_Types(Campaign_TypesId: any, Campaign_TypesDetails: any): any {
  return this.http.put(`${this.apiURL}Campaign_Types/` + Campaign_TypesId, Campaign_TypesDetails, this.httpOptions)
}

updateCampaign_TypesStatus(Campaign_TypesId: any): any {
  return this.http.put(`${this.apiURL}Campaign_Types/UpdateCampaign_TypesStatus/` + Campaign_TypesId, this.httpOptions)
}


searchCampaign_Types(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchCampaign_Types?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getCampaigns(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllCampaigns`)
}

getCampaignsById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Campaigns?Id=` + id)
}

getCampaignsLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getCampaignsLookup`)
}

  addCampaigns(addCampaigns: any): any {
    return this.http.post(`${this.apiURL}addCampaigns`, addCampaigns, this.httpOptions)
}

updateCampaigns(CampaignsId: any, CampaignsDetails: any): any {
  return this.http.put(`${this.apiURL}Campaigns/` + CampaignsId, CampaignsDetails, this.httpOptions)
}

updateCampaignsStatus(CampaignsId: any): any {
  return this.http.put(`${this.apiURL}Campaigns/UpdateCampaignsStatus/` + CampaignsId, this.httpOptions)
}


searchCampaigns(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchCampaigns?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getCrop_Variety(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllCrop_Variety`)
}

getCrop_VarietyById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Crop_Variety?Id=` + id)
}

getCrop_VarietyLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getCrop_VarietyLookup`)
}

  addCrop_Variety(addCrop_Variety: any): any {
    return this.http.post(`${this.apiURL}addCrop_Variety`, addCrop_Variety, this.httpOptions)
}

updateCrop_Variety(Crop_VarietyId: any, Crop_VarietyDetails: any): any {
  return this.http.put(`${this.apiURL}Crop_Variety/` + Crop_VarietyId, Crop_VarietyDetails, this.httpOptions)
}

updateCrop_VarietyStatus(Crop_VarietyId: any): any {
  return this.http.put(`${this.apiURL}Crop_Variety/UpdateCrop_VarietyStatus/` + Crop_VarietyId, this.httpOptions)
}


searchCrop_Variety(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchCrop_Variety?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getDistricts(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllDistricts`)
}

getDistrictsById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Districts?Id=` + id)
}

getDistrictsLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getDistrictsLookup`)
}

  addDistricts(addDistricts: any): any {
    return this.http.post(`${this.apiURL}addDistricts`, addDistricts, this.httpOptions)
}

updateDistricts(DistrictsId: any, DistrictsDetails: any): any {
  return this.http.put(`${this.apiURL}Districts/` + DistrictsId, DistrictsDetails, this.httpOptions)
}

updateDistrictsStatus(DistrictsId: any): any {
  return this.http.put(`${this.apiURL}Districts/UpdateDistrictsStatus/` + DistrictsId, this.httpOptions)
}


searchDistricts(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchDistricts?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getDocument_Type(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllDocument_Type`)
}

getDocument_TypeById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Document_Type?Id=` + id)
}

getDocument_TypeLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getDocument_TypeLookup`)
}

  addDocument_Type(addDocument_Type: any): any {
    return this.http.post(`${this.apiURL}addDocument_Type`, addDocument_Type, this.httpOptions)
}

updateDocument_Type(Document_TypeId: any, Document_TypeDetails: any): any {
  return this.http.put(`${this.apiURL}Document_Type/` + Document_TypeId, Document_TypeDetails, this.httpOptions)
}

updateDocument_TypeStatus(Document_TypeId: any): any {
  return this.http.put(`${this.apiURL}Document_Type/UpdateDocument_TypeStatus/` + Document_TypeId, this.httpOptions)
}


searchDocument_Type(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchDocument_Type?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getDocuments(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllDocuments`)
}

getDocumentsById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Documents?Id=` + id)
}

getDocumentsLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getDocumentsLookup`)
}

  addDocuments(addDocuments: any): any {
    return this.http.post(`${this.apiURL}addDocuments`, addDocuments, this.httpOptions)
}

updateDocuments(DocumentsId: any, DocumentsDetails: any): any {
  return this.http.put(`${this.apiURL}Documents/` + DocumentsId, DocumentsDetails, this.httpOptions)
}

updateDocumentsStatus(DocumentsId: any): any {
  return this.http.put(`${this.apiURL}Documents/UpdateDocumentsStatus/` + DocumentsId, this.httpOptions)
}


searchDocuments(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchDocuments?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getEmployee_Roles(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllEmployee_Roles`)
}

getEmployee_RolesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Employee_Roles?Id=` + id)
}

getEmployee_RolesLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getEmployee_RolesLookup`)
}

  addEmployee_Roles(addEmployee_Roles: any): any {
    return this.http.post(`${this.apiURL}addEmployee_Roles`, addEmployee_Roles, this.httpOptions)
}

updateEmployee_Roles(Employee_RolesId: any, Employee_RolesDetails: any): any {
  return this.http.put(`${this.apiURL}Employee_Roles/` + Employee_RolesId, Employee_RolesDetails, this.httpOptions)
}

updateEmployee_RolesStatus(Employee_RolesId: any): any {
  return this.http.put(`${this.apiURL}Employee_Roles/UpdateEmployee_RolesStatus/` + Employee_RolesId, this.httpOptions)
}


searchEmployee_Roles(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchEmployee_Roles?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getEmployee_Types(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllEmployee_Types`)
}

getEmployee_TypesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Employee_Types?Id=` + id)
}

getEmployee_TypesLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getEmployee_TypesLookup`)
}

  addEmployee_Types(addEmployee_Types: any): any {
    return this.http.post(`${this.apiURL}addEmployee_Types`, addEmployee_Types, this.httpOptions)
}

updateEmployee_Types(Employee_TypesId: any, Employee_TypesDetails: any): any {
  return this.http.put(`${this.apiURL}Employee_Types/` + Employee_TypesId, Employee_TypesDetails, this.httpOptions)
}

updateEmployee_TypesStatus(Employee_TypesId: any): any {
  return this.http.put(`${this.apiURL}Employee_Types/UpdateEmployee_TypesStatus/` + Employee_TypesId, this.httpOptions)
}


searchEmployee_Types(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchEmployee_Types?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllEmployees`)
}

getEmployeesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Employees?Id=` + id)
}

getEmployeesLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getEmployeesLookup`)
}

  addEmployees(addEmployees: any): any {
    return this.http.post(`${this.apiURL}addEmployees`, addEmployees, this.httpOptions)
}

updateEmployees(EmployeesId: any, EmployeesDetails: any): any {
  return this.http.put(`${this.apiURL}Employees/` + EmployeesId, EmployeesDetails, this.httpOptions)
}

updateEmployeesStatus(EmployeesId: any): any {
  return this.http.put(`${this.apiURL}Employees/UpdateEmployeesStatus/` + EmployeesId, this.httpOptions)
}


searchEmployees(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchEmployees?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getFarm_Diseases(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllFarm_Diseases`)
}

getFarm_DiseasesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Farm_Diseases?Id=` + id)
}

getFarm_DiseasesLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getFarm_DiseasesLookup`)
}

  addFarm_Diseases(addFarm_Diseases: any): any {
    return this.http.post(`${this.apiURL}addFarm_Diseases`, addFarm_Diseases, this.httpOptions)
}

updateFarm_Diseases(Farm_DiseasesId: any, Farm_DiseasesDetails: any): any {
  return this.http.put(`${this.apiURL}Farm_Diseases/` + Farm_DiseasesId, Farm_DiseasesDetails, this.httpOptions)
}

updateFarm_DiseasesStatus(Farm_DiseasesId: any): any {
  return this.http.put(`${this.apiURL}Farm_Diseases/UpdateFarm_DiseasesStatus/` + Farm_DiseasesId, this.httpOptions)
}


searchFarm_Diseases(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchFarm_Diseases?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getFarmer_Group(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllFarmer_Group`)
}

getFarmer_GroupById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Farmer_Group?Id=` + id)
}

getFarmer_GroupLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getFarmer_GroupLookup`)
}

  addFarmer_Group(addFarmer_Group: any): any {
    return this.http.post(`${this.apiURL}addFarmer_Group`, addFarmer_Group, this.httpOptions)
}

updateFarmer_Group(Farmer_GroupId: any, Farmer_GroupDetails: any): any {
  return this.http.put(`${this.apiURL}Farmer_Group/` + Farmer_GroupId, Farmer_GroupDetails, this.httpOptions)
}

updateFarmer_GroupStatus(Farmer_GroupId: any): any {
  return this.http.put(`${this.apiURL}Farmer_Group/UpdateFarmer_GroupStatus/` + Farmer_GroupId, this.httpOptions)
}


searchFarmer_Group(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchFarmer_Group?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getFarmer_login_visit_logs(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllFarmer_login_visit_logs`)
}

getFarmer_login_visit_logsById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Farmer_login_visit_logs?Id=` + id)
}

getFarmer_login_visit_logsLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getFarmer_login_visit_logsLookup`)
}

  addFarmer_login_visit_logs(addFarmer_login_visit_logs: any): any {
    return this.http.post(`${this.apiURL}addFarmer_login_visit_logs`, addFarmer_login_visit_logs, this.httpOptions)
}

updateFarmer_login_visit_logs(Farmer_login_visit_logsId: any, Farmer_login_visit_logsDetails: any): any {
  return this.http.put(`${this.apiURL}Farmer_login_visit_logs/` + Farmer_login_visit_logsId, Farmer_login_visit_logsDetails, this.httpOptions)
}

updateFarmer_login_visit_logsStatus(Farmer_login_visit_logsId: any): any {
  return this.http.put(`${this.apiURL}Farmer_login_visit_logs/UpdateFarmer_login_visit_logsStatus/` + Farmer_login_visit_logsId, this.httpOptions)
}


searchFarmer_login_visit_logs(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchFarmer_login_visit_logs?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getFarmer_trip_sheets(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllFarmer_trip_sheets`)
}

getFarmer_trip_sheetsById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Farmer_trip_sheets?Id=` + id)
}

getFarmer_trip_sheetsLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getFarmer_trip_sheetsLookup`)
}

  addFarmer_trip_sheets(addFarmer_trip_sheets: any): any {
    return this.http.post(`${this.apiURL}addFarmer_trip_sheets`, addFarmer_trip_sheets, this.httpOptions)
}

updateFarmer_trip_sheets(Farmer_trip_sheetsId: any, Farmer_trip_sheetsDetails: any): any {
  return this.http.put(`${this.apiURL}Farmer_trip_sheets/` + Farmer_trip_sheetsId, Farmer_trip_sheetsDetails, this.httpOptions)
}

updateFarmer_trip_sheetsStatus(Farmer_trip_sheetsId: any): any {
  return this.http.put(`${this.apiURL}Farmer_trip_sheets/UpdateFarmer_trip_sheetsStatus/` + Farmer_trip_sheetsId, this.httpOptions)
}


searchFarmer_trip_sheets(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchFarmer_trip_sheets?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getFarmers(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllFarmers`)
}

getFarmersById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Farmers?Id=` + id)
}

// getFarmersLookup(): Observable<any> {
//     return this.http.get<any>(`${this.apiURL}getFarmersLookup`)
// }

  addFarmers(addFarmers: any): any {
    return this.http.post(`${this.apiURL}addFarmers`, addFarmers, this.httpOptions)
}

updateFarmers(FarmersId: any, FarmersDetails: any): any {
  return this.http.put(`${this.apiURL}Farmers/` + FarmersId, FarmersDetails, this.httpOptions)
}

updateFarmersStatus(FarmersId: any): any {
  return this.http.put(`${this.apiURL}Farmers/UpdateFarmersStatus/` + FarmersId, this.httpOptions)
}


searchFarmers(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchFarmers?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getFarmers_Login(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllFarmers_Login`)
}

getFarmers_LoginById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Farmers_Login?Id=` + id)
}

getFarmers_LoginLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getFarmers_LoginLookup`)
}

  addFarmers_Login(addFarmers_Login: any): any {
    return this.http.post(`${this.apiURL}addFarmers_Login`, addFarmers_Login, this.httpOptions)
}

updateFarmers_Login(Farmers_LoginId: any, Farmers_LoginDetails: any): any {
  return this.http.put(`${this.apiURL}Farmers_Login/` + Farmers_LoginId, Farmers_LoginDetails, this.httpOptions)
}

updateFarmers_LoginStatus(Farmers_LoginId: any): any {
  return this.http.put(`${this.apiURL}Farmers_Login/UpdateFarmers_LoginStatus/` + Farmers_LoginId, this.httpOptions)
}


searchFarmers_Login(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchFarmers_Login?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getFarmField(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllFarmField`)
}

getFarmFieldById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}FarmField?Id=` + id)
}

getFarmFieldLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getFarmFieldLookup`)
}

  addFarmField(addFarmField: any): any {
    return this.http.post(`${this.apiURL}addFarmField`, addFarmField, this.httpOptions)
}

updateFarmField(FarmFieldId: any, FarmFieldDetails: any): any {
  return this.http.put(`${this.apiURL}FarmField/` + FarmFieldId, FarmFieldDetails, this.httpOptions)
}

updateFarmFieldStatus(FarmFieldId: any): any {
  return this.http.put(`${this.apiURL}FarmField/UpdateFarmFieldStatus/` + FarmFieldId, this.httpOptions)
}


searchFarmField(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchFarmField?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getField_Visit(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllField_Visit`)
}

getField_VisitById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Field_Visit?Id=` + id)
}

getField_VisitLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getField_VisitLookup`)
}

  addField_Visit(addField_Visit: any): any {
    return this.http.post(`${this.apiURL}addField_Visit`, addField_Visit, this.httpOptions)
}

updateField_Visit(Field_VisitId: any, Field_VisitDetails: any): any {
  return this.http.put(`${this.apiURL}Field_Visit/` + Field_VisitId, Field_VisitDetails, this.httpOptions)
}

updateField_VisitStatus(Field_VisitId: any): any {
  return this.http.put(`${this.apiURL}Field_Visit/UpdateField_VisitStatus/` + Field_VisitId, this.httpOptions)
}


searchField_Visit(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchField_Visit?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getGender(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllGender`)
}

getGenderById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Gender?Id=` + id)
}

getGenderLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getGenderLookup`)
}

  addGender(addGender: any): any {
    return this.http.post(`${this.apiURL}addGender`, addGender, this.httpOptions)
}

updateGender(GenderId: any, GenderDetails: any): any {
  return this.http.put(`${this.apiURL}Gender/` + GenderId, GenderDetails, this.httpOptions)
}

updateGenderStatus(GenderId: any): any {
  return this.http.put(`${this.apiURL}Gender/UpdateGenderStatus/` + GenderId, this.httpOptions)
}


searchGender(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchGender?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getLogins(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllLogins`)
}

getLoginsById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Logins?Id=` + id)
}

getLoginsLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getLoginsLookup`)
}

  addLogins(addLogins: any): any {
    return this.http.post(`${this.apiURL}addLogins`, addLogins, this.httpOptions)
}

updateLogins(LoginsId: any, LoginsDetails: any): any {
  return this.http.put(`${this.apiURL}Logins/` + LoginsId, LoginsDetails, this.httpOptions)
}

updateLoginsStatus(LoginsId: any): any {
  return this.http.put(`${this.apiURL}Logins/UpdateLoginsStatus/` + LoginsId, this.httpOptions)
}


searchLogins(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchLogins?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getLogins_Log(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllLogins_Log`)
}

getLogins_LogById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Logins_Log?Id=` + id)
}

getLogins_LogLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getLogins_LogLookup`)
}

  addLogins_Log(addLogins_Log: any): any {
    return this.http.post(`${this.apiURL}addLogins_Log`, addLogins_Log, this.httpOptions)
}

updateLogins_Log(Logins_LogId: any, Logins_LogDetails: any): any {
  return this.http.put(`${this.apiURL}Logins_Log/` + Logins_LogId, Logins_LogDetails, this.httpOptions)
}

updateLogins_LogStatus(Logins_LogId: any): any {
  return this.http.put(`${this.apiURL}Logins_Log/UpdateLogins_LogStatus/` + Logins_LogId, this.httpOptions)
}


searchLogins_Log(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchLogins_Log?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getMandal_Blocks(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllMandal_Blocks`)
}

getMandal_BlocksById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Mandal_Blocks?Id=` + id)
}

getMandal_BlocksLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getMandal_BlocksLookup`)
}

  addMandal_Blocks(addMandal_Blocks: any): any {
    return this.http.post(`${this.apiURL}addMandal_Blocks`, addMandal_Blocks, this.httpOptions)
}

updateMandal_Blocks(Mandal_BlocksId: any, Mandal_BlocksDetails: any): any {
  return this.http.put(`${this.apiURL}Mandal_Blocks/` + Mandal_BlocksId, Mandal_BlocksDetails, this.httpOptions)
}

updateMandal_BlocksStatus(Mandal_BlocksId: any): any {
  return this.http.put(`${this.apiURL}Mandal_Blocks/UpdateMandal_BlocksStatus/` + Mandal_BlocksId, this.httpOptions)
}


searchMandal_Blocks(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchMandal_Blocks?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getNursary(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllNursary`)
}

getNursaryById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Nursary?Id=` + id)
}

getNursaryLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getNursaryLookup`)
}

  addNursary(addNursary: any): any {
    return this.http.post(`${this.apiURL}addNursary`, addNursary, this.httpOptions)
}

updateNursary(NursaryId: any, NursaryDetails: any): any {
  return this.http.put(`${this.apiURL}Nursary/` + NursaryId, NursaryDetails, this.httpOptions)
}

updateNursaryStatus(NursaryId: any): any {
  return this.http.put(`${this.apiURL}Nursary/UpdateNursaryStatus/` + NursaryId, this.httpOptions)
}


searchNursary(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchNursary?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getNursary_Batches(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllNursary_Batches`)
}

getNursary_BatchesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Nursary_Batches?Id=` + id)
}

getNursary_BatchesLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getNursary_BatchesLookup`)
}

  addNursary_Batches(addNursary_Batches: any): any {
    return this.http.post(`${this.apiURL}addNursary_Batches`, addNursary_Batches, this.httpOptions)
}

updateNursary_Batches(Nursary_BatchesId: any, Nursary_BatchesDetails: any): any {
  return this.http.put(`${this.apiURL}Nursary_Batches/` + Nursary_BatchesId, Nursary_BatchesDetails, this.httpOptions)
}

updateNursary_BatchesStatus(Nursary_BatchesId: any): any {
  return this.http.put(`${this.apiURL}Nursary_Batches/UpdateNursary_BatchesStatus/` + Nursary_BatchesId, this.httpOptions)
}


searchNursary_Batches(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchNursary_Batches?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getPhotos(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllPhotos`)
}

getPhotosById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Photos?Id=` + id)
}

getPhotosLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getPhotosLookup`)
}

  addPhotos(addPhotos: any): any {
    return this.http.post(`${this.apiURL}addPhotos`, addPhotos, this.httpOptions)
}

updatePhotos(PhotosId: any, PhotosDetails: any): any {
  return this.http.put(`${this.apiURL}Photos/` + PhotosId, PhotosDetails, this.httpOptions)
}

updatePhotosStatus(PhotosId: any): any {
  return this.http.put(`${this.apiURL}Photos/UpdatePhotosStatus/` + PhotosId, this.httpOptions)
}


searchPhotos(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchPhotos?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getPlantationIdentification(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllPlantationIdentification`)
}

getPlantationIdentificationById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}PlantationIdentification?Id=` + id)
}

getPlantationIdentificationLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getPlantationIdentificationLookup`)
}

  addPlantationIdentification(addPlantationIdentification: any): any {
    return this.http.post(`${this.apiURL}addPlantationIdentification`, addPlantationIdentification, this.httpOptions)
}

updatePlantationIdentification(PlantationIdentificationId: any, PlantationIdentificationDetails: any): any {
  return this.http.put(`${this.apiURL}PlantationIdentification/` + PlantationIdentificationId, PlantationIdentificationDetails, this.httpOptions)
}

updatePlantationIdentificationStatus(PlantationIdentificationId: any): any {
  return this.http.put(`${this.apiURL}PlantationIdentification/UpdatePlantationIdentificationStatus/` + PlantationIdentificationId, this.httpOptions)
}


searchPlantationIdentification(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchPlantationIdentification?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getPoaching_FFB(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllPoaching_FFB`)
}

getPoaching_FFBById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Poaching_FFB?Id=` + id)
}

getPoaching_FFBLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getPoaching_FFBLookup`)
}

  addPoaching_FFB(addPoaching_FFB: any): any {
    return this.http.post(`${this.apiURL}addPoaching_FFB`, addPoaching_FFB, this.httpOptions)
}

updatePoaching_FFB(Poaching_FFBId: any, Poaching_FFBDetails: any): any {
  return this.http.put(`${this.apiURL}Poaching_FFB/` + Poaching_FFBId, Poaching_FFBDetails, this.httpOptions)
}

updatePoaching_FFBStatus(Poaching_FFBId: any): any {
  return this.http.put(`${this.apiURL}Poaching_FFB/UpdatePoaching_FFBStatus/` + Poaching_FFBId, this.httpOptions)
}


searchPoaching_FFB(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchPoaching_FFB?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getPrivileges(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllPrivileges`)
}

getPrivilegesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Privileges?Id=` + id)
}

getPrivilegesLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getPrivilegesLookup`)
}

  addPrivileges(addPrivileges: any): any {
    return this.http.post(`${this.apiURL}addPrivileges`, addPrivileges, this.httpOptions)
}

updatePrivileges(PrivilegesId: any, PrivilegesDetails: any): any {
  return this.http.put(`${this.apiURL}Privileges/` + PrivilegesId, PrivilegesDetails, this.httpOptions)
}

updatePrivilegesStatus(PrivilegesId: any): any {
  return this.http.put(`${this.apiURL}Privileges/UpdatePrivilegesStatus/` + PrivilegesId, this.httpOptions)
}


searchPrivileges(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchPrivileges?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getReferral_Source(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllReferral_Source`)
}

getReferral_SourceById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Referral_Source?Id=` + id)
}

getReferral_SourceLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getReferral_SourceLookup`)
}

  addReferral_Source(addReferral_Source: any): any {
    return this.http.post(`${this.apiURL}addReferral_Source`, addReferral_Source, this.httpOptions)
}

updateReferral_Source(Referral_SourceId: any, Referral_SourceDetails: any): any {
  return this.http.put(`${this.apiURL}Referral_Source/` + Referral_SourceId, Referral_SourceDetails, this.httpOptions)
}

updateReferral_SourceStatus(Referral_SourceId: any): any {
  return this.http.put(`${this.apiURL}Referral_Source/UpdateReferral_SourceStatus/` + Referral_SourceId, this.httpOptions)
}


searchReferral_Source(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchReferral_Source?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getRole_Privileges(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllRole_Privileges`)
}

getRole_PrivilegesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Role_Privileges?Id=` + id)
}

getRole_PrivilegesLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getRole_PrivilegesLookup`)
}

  addRole_Privileges(addRole_Privileges: any): any {
    return this.http.post(`${this.apiURL}addRole_Privileges`, addRole_Privileges, this.httpOptions)
}

updateRole_Privileges(Role_PrivilegesId: any, Role_PrivilegesDetails: any): any {
  return this.http.put(`${this.apiURL}Role_Privileges/` + Role_PrivilegesId, Role_PrivilegesDetails, this.httpOptions)
}

updateRole_PrivilegesStatus(Role_PrivilegesId: any): any {
  return this.http.put(`${this.apiURL}Role_Privileges/UpdateRole_PrivilegesStatus/` + Role_PrivilegesId, this.httpOptions)
}


searchRole_Privileges(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchRole_Privileges?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getRoles(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllRoles`)
}

getRolesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Roles?Id=` + id)
}

getRolesLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}GetEmployee_TypesLookup`)
}

  addRoles(addRoles: any): any {
    return this.http.post(`${this.apiURL}addRoles`, addRoles, this.httpOptions)
}

updateRoles(RolesId: any, RolesDetails: any): any {
  return this.http.put(`${this.apiURL}Roles/` + RolesId, RolesDetails, this.httpOptions)
}

updateRolesStatus(RolesId: any): any {
  return this.http.put(`${this.apiURL}Roles/UpdateRolesStatus/` + RolesId, this.httpOptions)
}


searchRoles(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchRoles?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getStates(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllStates`)
}

getStatesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}States?Id=` + id)
}

getStatesLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getStatesLookup`)
}

  addStates(addStates: any): any {
    return this.http.post(`${this.apiURL}addStates`, addStates, this.httpOptions)
}

updateStates(StatesId: any, StatesDetails: any): any {
  return this.http.put(`${this.apiURL}States/` + StatesId, StatesDetails, this.httpOptions)
}

updateStatesStatus(StatesId: any): any {
  return this.http.put(`${this.apiURL}States/UpdateStatesStatus/` + StatesId, this.httpOptions)
}


searchStates(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchStates?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getTraining_Videos(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllTraining_Videos`)
}

getTraining_VideosById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Training_Videos?Id=` + id)
}

getTraining_VideosLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getTraining_VideosLookup`)
}

  addTraining_Videos(addTraining_Videos: any): any {
    return this.http.post(`${this.apiURL}addTraining_Videos`, addTraining_Videos, this.httpOptions)
}

updateTraining_Videos(Training_VideosId: any, Training_VideosDetails: any): any {
  return this.http.put(`${this.apiURL}Training_Videos/` + Training_VideosId, Training_VideosDetails, this.httpOptions)
}

updateTraining_VideosStatus(Training_VideosId: any): any {
  return this.http.put(`${this.apiURL}Training_Videos/UpdateTraining_VideosStatus/` + Training_VideosId, this.httpOptions)
}


searchTraining_Videos(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchTraining_Videos?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getVillages(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllVillages`)
}

getVillagesById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Villages?Id=` + id)
}

// getVillagesLookup(): Observable<any> {
//     return this.http.get<any>(`${this.apiURL}getVillagesLookup`)
// }

  addVillages(addVillages: any): any {
    return this.http.post(`${this.apiURL}addVillages`, addVillages, this.httpOptions)
}

updateVillages(VillagesId: any, VillagesDetails: any): any {
  return this.http.put(`${this.apiURL}Villages/` + VillagesId, VillagesDetails, this.httpOptions)
}

updateVillagesStatus(VillagesId: any): any {
  return this.http.put(`${this.apiURL}Villages/UpdateVillagesStatus/` + VillagesId, this.httpOptions)
}


searchVillages(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchVillages?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

 getWorkflow(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getAllWorkflow`)
}

getWorkflowById(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Workflow?Id=` + id)
}

getWorkflowLookup(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}getWorkflowLookup`)
}

  addWorkflow(addWorkflow: any): any {
    return this.http.post(`${this.apiURL}addWorkflow`, addWorkflow, this.httpOptions)
}

updateWorkflow(WorkflowId: any, WorkflowDetails: any): any {
  return this.http.put(`${this.apiURL}Workflow/` + WorkflowId, WorkflowDetails, this.httpOptions)
}

updateWorkflowStatus(WorkflowId: any): any {
  return this.http.put(`${this.apiURL}Workflow/UpdateWorkflowStatus/` + WorkflowId, this.httpOptions)
}


searchWorkflow(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}SearchWorkflow?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}

getNursary_Activity(): Observable<any> {
  return this.http.get<any>(`${this.apiURL}getAllNursary_Activity`)
}

getNursary_ActivityById(id: any): Observable<any> {
return this.http.get<any>(`${this.apiURL}Nursary_Activity?Id=` + id)
}

getNursary_ActivityLookup(): Observable<any> {
  return this.http.get<any>(`${this.apiURL}getNursary_ActivityLookup`)
}

addNursary_Activity(addNursary_Activity: any): any {
  return this.http.post(`${this.apiURL}addNursary_Activity`, addNursary_Activity, this.httpOptions)
}

updateNursary_Activity(Nursary_ActivityId: any, Nursary_ActivityDetails: any): any {
return this.http.put(`${this.apiURL}Nursary_Activity/` + Nursary_ActivityId, Nursary_ActivityDetails, this.httpOptions)
}

updateNursary_ActivityStatus(Nursary_ActivityId: any): any {
return this.http.put(`${this.apiURL}Nursary_Activity/UpdateNursary_ActivityStatus/` + Nursary_ActivityId, this.httpOptions)
}


searchNursary_Activity(searchText: any, pageNumber: any, pageSize: any, sortColumn: any, sortOrder: any,
isColumnSearch: boolean, columnName: string, columnDataType: string, operator: string, value1: string, value2: string): Observable<any> {
  return this.http.get<any>(`${this.apiURL}SearchNursary_Activity?searchText=` + searchText + `&pageNumber=` + pageNumber + `&pageSize=` + pageSize + `&sortColumn=` + sortColumn + `&sortOrder=` + sortOrder + '&isColumnSearch=' + isColumnSearch + "&columnName=" + columnName + "&columnDataType=" + columnDataType + "&operator=" + operator + "&value1=" + value1 + "&value2=" + value2)
}


uploadImage(formData: any) {
  // let headers = new Headers();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');

    // let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.apiURL}Util/UploadImage`, formData);
       
}
getImageByName(name: any): string {
  // return this.http.get<any>(`${this.apiURL}GetImageByName?name=` + name)
  return "" + this.apiURL + "Util/GetImageByName?fileName=" + name;
  }

getFarmFieldLookupByFarmer(farmerId: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Util/GetFarmFieldByFarmerLookup?farmerId=`+ farmerId)
}

getFarmersLookup(searchString: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Util/GetFarmersLookup?searchString=` + searchString
    + `&pageNumber=1&pageSize=50&sortColumn=Name&sortDirection=ASC`
  )
}

GetVillagesLookup(searchString: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Util/GetVillagesLookup?searchString=` + searchString
    + `&pageNumber=1&pageSize=50&sortColumn=Name&sortDirection=ASC`
  )
}

getMandalByVillage(villageId: any): Observable<any> {
  return this.http.get<any>(`${this.apiURL}Util/GetMandalByVillage?villageId=` + villageId)
}
}