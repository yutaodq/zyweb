import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { MasterDetailCommand } from '@zyweb/shared/util/utility';

import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { DetailVehicleUseTypeService } from '../../services/';

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
  public vehicleUseType: VehicleUseType;

  constructor(
    private changeDetector: ChangeDetectorRef,
    // private _dialogService: DialogService,
    private _detailVehicleUseTypeService: DetailVehicleUseTypeService
  ) {
  }

  get detail$() {
    return this._detailVehicleUseTypeService.detail$;

  }

  public toList(): void {
    this._detailVehicleUseTypeService.toList();
  }

  public create(): void {
    this._detailVehicleUseTypeService.create();
  }


  public delete(): void {
    this._detailVehicleUseTypeService.delete(this.vehicleUseType);
  }

  public update(): void {
    this._detailVehicleUseTypeService.update(this.vehicleUseType);
  }

  public updateName(): void {
    this._detailVehicleUseTypeService.updateName(this.vehicleUseType);
  }


  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this._detailVehicleUseTypeService.detail$.subscribe((vehicleUseType: any) => {
        if (vehicleUseType) {
          this.changeDetector.markForCheck();
          this.vehicleUseType = vehicleUseType;
        }
      })
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
