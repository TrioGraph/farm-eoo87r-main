import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FarmService } from '../farm.service';
import { CEmployee_RolesComponent } from './c-employee_roles.component';

describe('CEmployee_RolesComponent', () => {
  let component: CEmployee_RolesComponent;
  let fixture: ComponentFixture<CEmployee_RolesComponent>;

  beforeEach(() => {
    const untypedFormBuilderStub = () => ({ group: object => ({}) });
    const nzDrawerRefStub = () => ({ close: data => ({}) });
    const nzNotificationServiceStub = () => ({
      create: (string, string1, fetchEmployee_RolesErrorMessage) => ({})
    });
    const FarmServiceStub = () => ({
      getEmployee_RolesById: value => ({ subscribe: f => f({}) }),
      updateEmployee_Roles: (value, value1) => ({ subscribe: f => f({}) }),
      addEmployee_Roles: value => ({ subscribe: f => f({}) }),
      resetForm: (e, appsForm) => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CEmployee_RolesComponent],
      providers: [
        { provide: UntypedFormBuilder, useFactory: untypedFormBuilderStub },
        { provide: NzDrawerRef, useFactory: nzDrawerRefStub },
        {
          provide: NzNotificationService,
          useFactory: nzNotificationServiceStub
        },
        { provide: FarmService, useFactory: FarmServiceStub }
      ]
    });
    fixture = TestBed.createComponent(CEmployee_RolesComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`isSpinning has default value`, () => {
    expect(component.isSpinning).toEqual(true);
  });

  it(`isDropDownLoading has default value`, () => {
    expect(component.isDropDownLoading).toEqual(false);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const untypedFormBuilderStub: UntypedFormBuilder = fixture.debugElement.injector.get(
        UntypedFormBuilder
      );
      spyOn(component, 'setFormData').and.callThrough();
      spyOn(untypedFormBuilderStub, 'group').and.callThrough();
      component.ngOnInit();
      expect(component.setFormData).toHaveBeenCalled();
      expect(untypedFormBuilderStub.group).toHaveBeenCalled();
    });
  });

  describe('setFormData', () => {
    it('makes expected calls', () => {
      const nzNotificationServiceStub: NzNotificationService = fixture.debugElement.injector.get(
        NzNotificationService
      );
      const <<ProjecteInstanceName>>ServiceStub: FarmService = fixture.debugElement.injector.get(
        FarmService
      );
      spyOn(nzNotificationServiceStub, 'create').and.callThrough();
      spyOn(appsServiceStub, 'getEmployee_RolesById').and.callThrough();
      component.setFormData();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(<<ProjecteInstanceName>>ServiceStub.getEmployee_RolesById).toHaveBeenCalled();
    });
  });

  describe('submitForm', () => {
    it('makes expected calls', () => {
      const nzDrawerRefStub: NzDrawerRef = fixture.debugElement.injector.get(
        NzDrawerRef
      );
      const nzNotificationServiceStub: NzNotificationService = fixture.debugElement.injector.get(
        NzNotificationService
      );
      const <<ProjecteInstanceName>>ServiceStub: FarmService = fixture.debugElement.injector.get(
        FarmService
      );
      spyOn(nzDrawerRefStub, 'close').and.callThrough();
      spyOn(nzNotificationServiceStub, 'create').and.callThrough();
      spyOn(appsServiceStub, 'updateEmployee_Roles').and.callThrough();
      spyOn(appsServiceStub, 'addEmployee_Roles').and.callThrough();
      component.submitForm();
      expect(nzDrawerRefStub.close).toHaveBeenCalled();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(<<ProjecteInstanceName>>ServiceStub.updateEmployee_Roles).toHaveBeenCalled();
      expect(<<ProjecteInstanceName>>ServiceStub.addEmployee_Roles).toHaveBeenCalled();
    });
  });
});
