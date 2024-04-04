import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FarmService } from '../Farm.service';
import { VFarmer_login_visit_logsComponent } from './v-Farmer_login_visit_logs.component';

describe('VFarmer_login_visit_logsComponent', () => {
  let component: VFarmer_login_visit_logsComponent;
  let fixture: ComponentFixture<VFarmer_login_visit_logsComponent>;

  beforeEach(() => {
    const nzDrawerServiceStub = () => ({
      create: object => ({
        afterOpen: { subscribe: f => f({}) },
        afterClose: { subscribe: f => f({}) }
      })
    });
    const nzModalServiceStub = () => ({ confirm: object => ({}) });
    const nzNotificationServiceStub = () => ({
      create: (string, string1, fetch<<Farmer_login_visit_logs>>ErrorMessage) => ({})
    });
    const appsServiceStub = () => ({
      validatePermissionWithRole: editTaskAcivity => ({}),
      get<<Farmer_login_visit_logs>>: () => ({ pipe: () => ({ subscribe: f => f({}) }) }),
      deleteRecord: (string, guid) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [VFarmer_login_visit_logsComponent],
      providers: [
        { provide: NzDrawerService, useFactory: nzDrawerServiceStub },
        { provide: NzModalService, useFactory: nzModalServiceStub },
        {
          provide: NzNotificationService,
          useFactory: nzNotificationServiceStub
        },
        { provide: FarmService, useFactory: farmer_login_visit_logsServiceStub }
      ]
    });
    fixture = TestBed.createComponent(VFarmer_login_visit_logsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`isLoading has default value`, () => {
    expect(component.isLoading).toEqual(false);
  });

  it(`quickViewVisible has default value`, () => {
    expect(component.quickViewVisible).toEqual(false);
  });

  it(`listOfColumns has default value`, () => {
    expect(component.listOfColumns).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'configureColumns').and.callThrough();
      spyOn(component, 'fetchData').and.callThrough();
      component.ngOnInit();
      expect(component.configureColumns).toHaveBeenCalled();
      expect(component.fetchData).toHaveBeenCalled();
    });
  });

  describe('fetchPermissions', () => {
    it('makes expected calls', () => {
      const farmer_login_visit_logsServiceStub: Farmer_login_visit_logsService = fixture.debugElement.injector.get(
        FarmService
      );
      spyOn(farmer_login_visit_logsServiceStub, 'validatePermissionWithRole').and.callThrough();
      component.fetchPermissions();
      expect(farmer_login_visit_logsServiceStub.validatePermissionWithRole).toHaveBeenCalled();
    });
  });

  describe('fetchData', () => {
    it('makes expected calls', () => {
      const nzNotificationServiceStub: NzNotificationService = fixture.debugElement.injector.get(
        NzNotificationService
      );
      const farmer_login_visit_logsServiceStub: Farmer_login_visit_logsService = fixture.debugElement.injector.get(
        FarmService
      );
      spyOn(nzNotificationServiceStub, 'create').and.callThrough();
      spyOn(farmer_login_visit_logsServiceStub, 'getFarmer_login_visit_logs').and.callThrough();
      component.fetchData();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(farmer_login_visit_logsServiceStub.getFarmer_login_visit_logs).toHaveBeenCalled();
    });
  });
});
