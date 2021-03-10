import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { DialogDeleteComponent } from '@zyweb/shared/ui/base';
import { MasterDetailCommand } from '@zyweb/shared/util/utility';

import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseTypeFacade } from '@zyweb/vehicle/use-type/data-access/store';
import { UpdateNameFormComponent } from '../../components/update-form/update/update-name-form.component';

@Component({
  selector: 'zyweb-vehicle-use-type-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailComponent implements MasterDetailCommand<VehicleUseType>, OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  private _ref: DynamicDialogRef | null = null;

  commands = this;
  public vehicleUseType$: Observable<VehicleUseType>;
  public vehicleUseType: VehicleUseType;

  constructor(
    public _facade: VehicleUseTypeFacade,
    private changeDetector: ChangeDetectorRef,
    private _dialogService: DialogService,
  ) {
  }

  public toList(): void {
    this._facade.returnToList();
  }

  public create(): void {
    this._facade.createVehicleUseType();
  }


  public delete(): void {
    this._ref = this._dialogService.open(DialogDeleteComponent, {
      header: '删除车辆使用状态',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000
    });

    this._ref.onClose.subscribe((isDelete) => {

      if (isDelete) {
        this._facade.removeDetail(this.vehicleUseType);
      }
    });
  }

  // public update(): void {
  //   this._ref = this._dialogService.open(UpdateMainFormComponent, {
  //     header: '修改车辆使用状态说明',
  //     width: '70%',
  //     contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
  //     baseZIndex: 10000,
  //     data: this.vehicleUseType
  //   });
  //
  //   this._ref.onClose.subscribe((vehicle) => {
  //     if (vehicle) {
  //       this._facade.updateVehicle(vehicle);
  //     }
  //   });
  // }
  public updateName(): void {
    this._ref = this._dialogService.open(UpdateNameFormComponent, {
      header: '修改车辆使用状态',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000,
      data: this.vehicleUseType
    });

    this._ref.onClose.subscribe((vehicleUseType) => {
      if (vehicleUseType) {
        this._facade.updateVehicleUseType(vehicleUseType);
      }
    });
  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this._facade.vehicleUseTypeDetail$.subscribe((vehicleUseType: any) => {
        if (vehicleUseType) {
          this.changeDetector.markForCheck();
          this.vehicleUseType = vehicleUseType;
          this.vehicleUseType$ = of(vehicleUseType);
        }
      }),
    );
  }

  /*
   * angular 方法
   */
  ngOnInit() {
    this.registerEvents();
  }

  ngOnDestroy() {
    if (this._ref) {
      this._ref.close();
    }
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
