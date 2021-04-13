import { Injectable } from '@angular/core';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import {  VehicleUseStateApiClient } from '@zyweb/shared/data-access/api/lvms';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { DialogDeleteComponent } from '@zyweb/shared/ui/base';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Injectable()
export class DetailVehicleUseStateService {
  private _ref: DynamicDialogRef | null = null;

  constructor(
              private _vehicleUseStateFacade: VehicleUseStateFacade,
              // private _vehicleApiClient: VehicleUseStateApiClient
  ) {
  }


  get detail$() {
    return this._vehicleUseStateFacade.detail$;

  }

  create() {
    this._vehicleUseStateFacade.create();
  }

  toList() {
    this._vehicleUseStateFacade.returnToList();

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
        this._detailVehicleUseStateService.removeDetail(this.vehicleUseState);
      }
    });
  }

  removeDetail(vehicleUseState: VehicleUseState) {
    this._vehicleUseStateFacade.removeDetail(vehicleUseState);

  }

  update(vehicleUseState: any) {
    this._vehicleUseStateFacade.update(vehicleUseState);

  }
}
