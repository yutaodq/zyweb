import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseTypesFacade } from '@zyweb/shared/data-access/facade/lvms';

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

export class CreateComponent implements OnInit, OnDestroy {

  public vehicleUseType:        Vehicle;
  private subscriptions: Array<Subscription> = [];

  constructor(
    private _facade: VehicleUseTypesFacade,
    ) {}

  ngOnInit() {
    this.registerEvents();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onCancel() {
    this._facade.cancelCreate()
  }

  onAdd(vehicleUseType: Vehicle) {
    this._facade.addVehicleUseType(vehicleUseType)
 }

  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    // this.subscriptions.push(this.vehicleUseTypesSandbox.vehicleUseTypeDetails$.subscribe((vehicleUseType: any) => {
    //   if (vehicleUseType) {
    //     this.changeDetector.markForCheck();
    //     this.vehicleUseType = vehicleUseType;
    //   }
    // }));
  }
}
