import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FarmService } from '../farm.service';
import { CVillagesComponent } from './c-villages.component';

describe('CVillagesComponent', () => {
  let component: CVillagesComponent;
  let fixture: ComponentFixture<CVillagesComponent>;

  beforeEach(() => {
    const untypedFormBuilderStub = () => ({ group: object => ({}) });
    const nzDrawerRefStub = () => ({ close: data => ({}) });
    const nzNotificationServiceStub = () => ({
      create: (string, string1, fetchVillagesErrorMessage) => ({})
    });
    const FarmServiceStub = () => ({
      getVillagesById: value => ({ subscribe: f => f({}) }),
      updateVillages: (value, value1) => ({ subscribe: f => f({}) }),
      addVillages: value => ({ subscribe: f => f({}) }),
      resetForm: (e, appsForm) => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CVillagesComponent],
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
    fixture = TestBed.createComponent(CVillagesComponent);
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
      spyOn(appsServiceStub, 'getVillagesById').and.callThrough();
      component.setFormData();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(<<ProjecteInstanceName>>ServiceStub.getVillagesById).toHaveBeenCalled();
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
      spyOn(appsServiceStub, 'updateVillages').and.callThrough();
      spyOn(appsServiceStub, 'addVillages').and.callThrough();
      component.submitForm();
      expect(nzDrawerRefStub.close).toHaveBeenCalled();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(<<ProjecteInstanceName>>ServiceStub.updateVillages).toHaveBeenCalled();
      expect(<<ProjecteInstanceName>>ServiceStub.addVillages).toHaveBeenCalled();
    });
  });
});
