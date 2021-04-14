import { Injectable } from '@angular/core';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { DialogDeleteComponent } from '@zyweb/shared/ui/base';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UpdateMainFormComponent } from '../components/update-form/main/update-main-form.component';

@Injectable()
export class DetailVehicleUseStateService {
  private _ref: DynamicDialogRef | null = null;

  constructor(
    private _vehicleUseStateFacade: VehicleUseStateFacade,
    private _dialogService: DialogService
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

  public delete(vehicleUseState: VehicleUseState): void {
    this._ref = this._dialogService.open(DialogDeleteComponent, {
      header: '删除车辆使用状态',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000
    });

    this._ref.onClose.subscribe((isDelete) => {

      if (isDelete) {
        this.removeDetail(vehicleUseState);
      }
    });
  }
  private removeDetail(vehicleUseState: VehicleUseState) {
    this._vehicleUseStateFacade.removeDetail(vehicleUseState);
  }

  public update(entity: VehicleUseState): void {
    this._ref = this._dialogService.open(UpdateMainFormComponent, {
      header: '修改车辆使用状态说明',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000,
      data: entity
    });

    this._ref.onClose.subscribe((vehicleUseState) => {
      if (vehicleUseState) {
        this._vehicleUseStateFacade.update(vehicleUseState);
      }
    });
  }

  // private update(vehicleUseState: any) {
  //   this._vehicleUseStateFacade.update(vehicleUseState);
  //
  // }
}
