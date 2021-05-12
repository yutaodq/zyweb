import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { MasterCreateCommand } from '@zyweb/shared/util/utility';
import { CreateVehicleUseTypeService } from '../../services';

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
    private _createService: CreateVehicleUseTypeService,
  ) {}

  ngOnInit() {
    this.registerEvents();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onCancel() {
    this._createService.cancel()
  }

  onAdd(vehicleUseType: VehicleUseType) {
    this._createService.add(vehicleUseType)
  }

  /**
   * Registers events
   */
  private registerEvents(): void {
  }
}
