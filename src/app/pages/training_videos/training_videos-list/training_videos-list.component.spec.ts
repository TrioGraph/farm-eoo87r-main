import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FarmService } from '../Farm.service';
import { VTraining_VideosComponent } from './v-Training_Videos.component';

describe('VTraining_VideosComponent', () => {
  let component: VTraining_VideosComponent;
  let fixture: ComponentFixture<VTraining_VideosComponent>;

  beforeEach(() => {
    const nzDrawerServiceStub = () => ({
      create: object => ({
        afterOpen: { subscribe: f => f({}) },
        afterClose: { subscribe: f => f({}) }
      })
    });
    const nzModalServiceStub = () => ({ confirm: object => ({}) });
    const nzNotificationServiceStub = () => ({
      create: (string, string1, fetch<<Training_Videos>>ErrorMessage) => ({})
    });
    const appsServiceStub = () => ({
      validatePermissionWithRole: editTaskAcivity => ({}),
      get<<Training_Videos>>: () => ({ pipe: () => ({ subscribe: f => f({}) }) }),
      deleteRecord: (string, guid) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [VTraining_VideosComponent],
      providers: [
        { provide: NzDrawerService, useFactory: nzDrawerServiceStub },
        { provide: NzModalService, useFactory: nzModalServiceStub },
        {
          provide: NzNotificationService,
          useFactory: nzNotificationServiceStub
        },
        { provide: FarmService, useFactory: training_videosServiceStub }
      ]
    });
    fixture = TestBed.createComponent(VTraining_VideosComponent);
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
      const training_videosServiceStub: Training_VideosService = fixture.debugElement.injector.get(
        FarmService
      );
      spyOn(training_videosServiceStub, 'validatePermissionWithRole').and.callThrough();
      component.fetchPermissions();
      expect(training_videosServiceStub.validatePermissionWithRole).toHaveBeenCalled();
    });
  });

  describe('fetchData', () => {
    it('makes expected calls', () => {
      const nzNotificationServiceStub: NzNotificationService = fixture.debugElement.injector.get(
        NzNotificationService
      );
      const training_videosServiceStub: Training_VideosService = fixture.debugElement.injector.get(
        FarmService
      );
      spyOn(nzNotificationServiceStub, 'create').and.callThrough();
      spyOn(training_videosServiceStub, 'getTraining_Videos').and.callThrough();
      component.fetchData();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(training_videosServiceStub.getTraining_Videos).toHaveBeenCalled();
    });
  });
});
