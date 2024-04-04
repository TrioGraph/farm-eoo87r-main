import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FarmService } from '../farm.service';
import { CCampaign_TypesComponent } from './c-campaign_types.component';

describe('CCampaign_TypesComponent', () => {
  let component: CCampaign_TypesComponent;
  let fixture: ComponentFixture<CCampaign_TypesComponent>;

  beforeEach(() => {
    const untypedFormBuilderStub = () => ({ group: object => ({}) });
    const nzDrawerRefStub = () => ({ close: data => ({}) });
    const nzNotificationServiceStub = () => ({
      create: (string, string1, fetchCampaign_TypesErrorMessage) => ({})
    });
    const FarmServiceStub = () => ({
      getCampaign_TypesById: value => ({ subscribe: f => f({}) }),
      updateCampaign_Types: (value, value1) => ({ subscribe: f => f({}) }),
      addCampaign_Types: value => ({ subscribe: f => f({}) }),
      resetForm: (e, appsForm) => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CCampaign_TypesComponent],
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
    fixture = TestBed.createComponent(CCampaign_TypesComponent);
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
      spyOn(appsServiceStub, 'getCampaign_TypesById').and.callThrough();
      component.setFormData();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(<<ProjecteInstanceName>>ServiceStub.getCampaign_TypesById).toHaveBeenCalled();
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
      spyOn(appsServiceStub, 'updateCampaign_Types').and.callThrough();
      spyOn(appsServiceStub, 'addCampaign_Types').and.callThrough();
      component.submitForm();
      expect(nzDrawerRefStub.close).toHaveBeenCalled();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(<<ProjecteInstanceName>>ServiceStub.updateCampaign_Types).toHaveBeenCalled();
      expect(<<ProjecteInstanceName>>ServiceStub.addCampaign_Types).toHaveBeenCalled();
    });
  });
});
