import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FarmService } from '../farm.service';
import { CFarmer_GroupComponent } from './c-farmer_group.component';

describe('CFarmer_GroupComponent', () => {
  let component: CFarmer_GroupComponent;
  let fixture: ComponentFixture<CFarmer_GroupComponent>;

  beforeEach(() => {
    const untypedFormBuilderStub = () => ({ group: object => ({}) });
    const nzDrawerRefStub = () => ({ close: data => ({}) });
    const nzNotificationServiceStub = () => ({
      create: (string, string1, fetchFarmer_GroupErrorMessage) => ({})
    });
    const FarmServiceStub = () => ({
      getFarmer_GroupById: value => ({ subscribe: f => f({}) }),
      updateFarmer_Group: (value, value1) => ({ subscribe: f => f({}) }),
      addFarmer_Group: value => ({ subscribe: f => f({}) }),
      resetForm: (e, appsForm) => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CFarmer_GroupComponent],
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
    fixture = TestBed.createComponent(CFarmer_GroupComponent);
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
      spyOn(appsServiceStub, 'getFarmer_GroupById').and.callThrough();
      component.setFormData();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(<<ProjecteInstanceName>>ServiceStub.getFarmer_GroupById).toHaveBeenCalled();
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
      spyOn(appsServiceStub, 'updateFarmer_Group').and.callThrough();
      spyOn(appsServiceStub, 'addFarmer_Group').and.callThrough();
      component.submitForm();
      expect(nzDrawerRefStub.close).toHaveBeenCalled();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(<<ProjecteInstanceName>>ServiceStub.updateFarmer_Group).toHaveBeenCalled();
      expect(<<ProjecteInstanceName>>ServiceStub.addFarmer_Group).toHaveBeenCalled();
    });
  });
});
