import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseTypeFacade } from '@zyweb/vehicle/use-type/data-access/store';
import { MasterCreateCommand } from '@zyweb/shared/util/utility';

/*
https://github.com/vladeye/druo-dashboard-app/tree/master/src/app/content/pages
D:\学习案例\druo-dashboard\src\app\content\pages\components\invoices\invoices-routing.module.ts
 */
@Component({
  selector: 'zyweb-vehicle-use-type-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateComponent implements MasterCreateCommand<VehicleUseType>, OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  public vehicleUseType:        VehicleUseType;
  public commands = this;

  constructor(
    private _facade: VehicleUseTypeFacade,
    ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onCancel() {
    this._facade.cancelCreate()
  }

  onAdd(vehicleUseType: VehicleUseType) {
    this._facade.addVehicleUseType(vehicleUseType)
 }


}
