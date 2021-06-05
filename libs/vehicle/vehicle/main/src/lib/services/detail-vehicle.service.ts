import { Injectable } from '@angular/core';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogDeleteComponent } from '@zyweb/shared/ui/base';

@Injectable()
export class DetailVehicleService {
  private _ref: DynamicDialogRef | null = null;

  constructor(
    private _vehicleFacade: VehicleFacade,
    private _dialogService: DialogService
  ) {
  }


  get detail$() {
    return this._vehicleFacade.detail$;

  }

  create() {
    this._vehicleFacade.create();
  }

  toList() {
    this._vehicleFacade.returnToList();

  }

  public delete(vehicle: Vehicle): void {
    this._ref = this._dialogService.open(DialogDeleteComponent, {
      header: '删除车辆基础信息',
      width: '30%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000,
      data: {'title': "您确定要删除车辆为：",
        'details': vehicle.name + "的基础信息？"}

    });

    this._ref.onClose.subscribe((isDelete) => {

      if (isDelete) {
        this.removeDetail(vehicle);
      }
    });
  }
  private removeDetail(vehicle: Vehicle) {
    this._vehicleFacade.removeDetail(vehicle);
  }

  // public update(entity: Vehicle): void {
  //   this._ref = this._dialogService.open(UpdateMainFormComponent, {
  //     header: '修改车辆使用状态说明',
  //     width: '70%',
  //     contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
  //     baseZIndex: 10000,
  //     data: entity
  //   });
  //
  //   this._ref.onClose.subscribe((information) => {
  //     if (information) {
  //       this._vehicleFacade.update(information);
  //     }
  //   });
  // }

}
