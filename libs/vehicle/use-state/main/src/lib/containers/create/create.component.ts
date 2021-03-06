import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';

/*
https://github.com/vladeye/druo-dashboard-app/tree/master/src/app/content/pages
D:\学习案例\druo-dashboard\src\app\content\pages\components\invoices\invoices-routing.module.ts
 */
@Component({
  selector: 'zyweb-vehicle-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  public vehicleUseState:        VehicleUseState;
  public commands = this;

  constructor(
    private _facade: VehicleUseStateFacade,
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

  onAdd(vehicleUseState: VehicleUseState) {
    this._facade.addVehicle(vehicleUseState)
 }

  /**
   * Registers events
   */
  private registerEvents(): void {
  }
}
