import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { VehicleFacade } from '@zyweb/shared/data-access/facade/lvms';

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
  public vehicle:        Vehicle;
  public commands = this;

  constructor(
    private _facade: VehicleFacade,
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

  onAdd(vehicle: Vehicle) {
    this._facade.addVehicle(vehicle)
 }

  /**
   * Registers events
   */
  private registerEvents(): void {
  }
}
