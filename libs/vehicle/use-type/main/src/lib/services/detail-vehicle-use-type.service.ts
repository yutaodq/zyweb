import { Injectable } from '@angular/core';
import { VehicleUseTypeFacade } from '@zyweb/vehicle/use-type/data-access/store';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { DialogDeleteComponent } from '@zyweb/shared/ui/base';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UpdateMainFormComponent } from '../components/update-form/main/update-main-form.component';
import { UpdateNameFormComponent } from '../components/update-form/name/update-name-form.component';

@Injectable()
export class DetailVehicleUseTypeService {
  private _ref: DynamicDialogRef | null = null;

  constructor(
    private _vehicleUseTypeFacade: VehicleUseTypeFacade,
    private _dialogService: DialogService
  ) {
  }


  get detail$() {
    return this._vehicleUseTypeFacade.detail$;

  }

  create() {
    this._vehicleUseTypeFacade.create();
  }

  toList() {
    this._vehicleUseTypeFacade.returnToList();

  }

  public delete(vehicleUseType: VehicleUseType): void {
    this._ref = this._dialogService.open(DialogDeleteComponent, {
      header: '删除车辆使用类型',
      width: '30%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000,
      // data: "您确定要删除车辆使用类型为："+ vehicleUseType.name + "的记录？"
      data: {'title': "您确定要删除车辆使用类型为：",
        'details': vehicleUseType.name + "的记录？"}

    });

    this._ref.onClose.subscribe((isDelete) => {

      if (isDelete) {
        this.removeDetail(vehicleUseType);
      }
    });
  }
  private removeDetail(vehicleUseType: VehicleUseType) {
    this._vehicleUseTypeFacade.removeDetail(vehicleUseType);
  }

  public update(entity: VehicleUseType): void {
    this._ref = this._dialogService.open(UpdateMainFormComponent, {
      header: '修改车辆使用状态说明',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000,
      data: entity
    });

    this._ref.onClose.subscribe((vehicleUseType) => {
      if (vehicleUseType) {
        this._vehicleUseTypeFacade.update(vehicleUseType);
      }
    });
  }

  public updateName(entity: VehicleUseType): void {
    this._ref = this._dialogService.open(UpdateNameFormComponent, {
      header: '修改车辆使用状态说明',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000,
      data: entity
    });

    this._ref.onClose.subscribe((vehicleUseType) => {
      if (vehicleUseType) {
        this._vehicleUseTypeFacade.updateName(vehicleUseType);
      }
    });
  }

}
