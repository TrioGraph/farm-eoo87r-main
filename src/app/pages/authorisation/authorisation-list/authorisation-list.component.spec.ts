import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FarmService } from '../Farm.service';
import { VAuthorisationComponent } from './v-Authorisation.component';

describe('VAuthorisationComponent', () => {
  let component: VAuthorisationComponent;
  let fixture: ComponentFixture<VAuthorisationComponent>;

  beforeEach(() => {
    const nzDrawerServiceStub = () => ({
      create: object => ({
        afterOpen: { subscribe: f => f({}) },
        afterClose: { subscribe: f => f({}) }
      })
    });
    const nzModalServiceStub = () => ({ confirm: object => ({}) });
    const nzNotificationServiceStub = () => ({
      create: (string, string1, fetch<<Authorisation>>ErrorMessage) => ({})
    });
    const appsServiceStub = () => ({
      validatePermissionWithRole: editTaskAcivity => ({}),
      get<<Authorisation>>: () => ({ pipe: () => ({ subscribe: f => f({}) }) }),
      deleteRecord: (string, guid) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [VAuthorisationComponent],
      providers: [
        { provide: NzDrawerService, useFactory: nzDrawerServiceStub },
        { provide: NzModalService, useFactory: nzModalServiceStub },
        {
          provide: NzNotificationService,
          useFactory: nzNotificationServiceStub
        },
        { provide: FarmService, useFactory: authorisationServiceStub }
      ]
    });
    fixture = TestBed.createComponent(VAuthorisationComponent);
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
      const authorisationServiceStub: AuthorisationService = fixture.debugElement.injector.get(
        FarmService
      );
      spyOn(authorisationServiceStub, 'validatePermissionWithRole').and.callThrough();
      component.fetchPermissions();
      expect(authorisationServiceStub.validatePermissionWithRole).toHaveBeenCalled();
    });
  });

  describe('fetchData', () => {
    it('makes expected calls', () => {
      const nzNotificationServiceStub: NzNotificationService = fixture.debugElement.injector.get(
        NzNotificationService
      );
      const authorisationServiceStub: AuthorisationService = fixture.debugElement.injector.get(
        FarmService
      );
      spyOn(nzNotificationServiceStub, 'create').and.callThrough();
      spyOn(authorisationServiceStub, 'getAuthorisation').and.callThrough();
      component.fetchData();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(authorisationServiceStub.getAuthorisation).toHaveBeenCalled();
    });
  });
});
