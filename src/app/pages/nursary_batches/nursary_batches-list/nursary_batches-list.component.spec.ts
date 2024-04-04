import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FarmService } from '../Farm.service';
import { VNursary_BatchesComponent } from './v-Nursary_Batches.component';

describe('VNursary_BatchesComponent', () => {
  let component: VNursary_BatchesComponent;
  let fixture: ComponentFixture<VNursary_BatchesComponent>;

  beforeEach(() => {
    const nzDrawerServiceStub = () => ({
      create: object => ({
        afterOpen: { subscribe: f => f({}) },
        afterClose: { subscribe: f => f({}) }
      })
    });
    const nzModalServiceStub = () => ({ confirm: object => ({}) });
    const nzNotificationServiceStub = () => ({
      create: (string, string1, fetch<<Nursary_Batches>>ErrorMessage) => ({})
    });
    const appsServiceStub = () => ({
      validatePermissionWithRole: editTaskAcivity => ({}),
      get<<Nursary_Batches>>: () => ({ pipe: () => ({ subscribe: f => f({}) }) }),
      deleteRecord: (string, guid) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [VNursary_BatchesComponent],
      providers: [
        { provide: NzDrawerService, useFactory: nzDrawerServiceStub },
        { provide: NzModalService, useFactory: nzModalServiceStub },
        {
          provide: NzNotificationService,
          useFactory: nzNotificationServiceStub
        },
        { provide: FarmService, useFactory: nursary_batchesServiceStub }
      ]
    });
    fixture = TestBed.createComponent(VNursary_BatchesComponent);
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
      const nursary_batchesServiceStub: Nursary_BatchesService = fixture.debugElement.injector.get(
        FarmService
      );
      spyOn(nursary_batchesServiceStub, 'validatePermissionWithRole').and.callThrough();
      component.fetchPermissions();
      expect(nursary_batchesServiceStub.validatePermissionWithRole).toHaveBeenCalled();
    });
  });

  describe('fetchData', () => {
    it('makes expected calls', () => {
      const nzNotificationServiceStub: NzNotificationService = fixture.debugElement.injector.get(
        NzNotificationService
      );
      const nursary_batchesServiceStub: Nursary_BatchesService = fixture.debugElement.injector.get(
        FarmService
      );
      spyOn(nzNotificationServiceStub, 'create').and.callThrough();
      spyOn(nursary_batchesServiceStub, 'getNursary_Batches').and.callThrough();
      component.fetchData();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(nursary_batchesServiceStub.getNursary_Batches).toHaveBeenCalled();
    });
  });
});
