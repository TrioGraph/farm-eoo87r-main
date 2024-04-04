import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FarmService } from '../Farm.service';
import { VMandal_BlocksComponent } from './v-Mandal_Blocks.component';

describe('VMandal_BlocksComponent', () => {
  let component: VMandal_BlocksComponent;
  let fixture: ComponentFixture<VMandal_BlocksComponent>;

  beforeEach(() => {
    const nzDrawerServiceStub = () => ({
      create: object => ({
        afterOpen: { subscribe: f => f({}) },
        afterClose: { subscribe: f => f({}) }
      })
    });
    const nzModalServiceStub = () => ({ confirm: object => ({}) });
    const nzNotificationServiceStub = () => ({
      create: (string, string1, fetch<<Mandal_Blocks>>ErrorMessage) => ({})
    });
    const appsServiceStub = () => ({
      validatePermissionWithRole: editTaskAcivity => ({}),
      get<<Mandal_Blocks>>: () => ({ pipe: () => ({ subscribe: f => f({}) }) }),
      deleteRecord: (string, guid) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [VMandal_BlocksComponent],
      providers: [
        { provide: NzDrawerService, useFactory: nzDrawerServiceStub },
        { provide: NzModalService, useFactory: nzModalServiceStub },
        {
          provide: NzNotificationService,
          useFactory: nzNotificationServiceStub
        },
        { provide: FarmService, useFactory: mandal_blocksServiceStub }
      ]
    });
    fixture = TestBed.createComponent(VMandal_BlocksComponent);
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
      const mandal_blocksServiceStub: Mandal_BlocksService = fixture.debugElement.injector.get(
        FarmService
      );
      spyOn(mandal_blocksServiceStub, 'validatePermissionWithRole').and.callThrough();
      component.fetchPermissions();
      expect(mandal_blocksServiceStub.validatePermissionWithRole).toHaveBeenCalled();
    });
  });

  describe('fetchData', () => {
    it('makes expected calls', () => {
      const nzNotificationServiceStub: NzNotificationService = fixture.debugElement.injector.get(
        NzNotificationService
      );
      const mandal_blocksServiceStub: Mandal_BlocksService = fixture.debugElement.injector.get(
        FarmService
      );
      spyOn(nzNotificationServiceStub, 'create').and.callThrough();
      spyOn(mandal_blocksServiceStub, 'getMandal_Blocks').and.callThrough();
      component.fetchData();
      expect(nzNotificationServiceStub.create).toHaveBeenCalled();
      expect(mandal_blocksServiceStub.getMandal_Blocks).toHaveBeenCalled();
    });
  });
});
