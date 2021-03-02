import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { VehicleFacade } from '@zyweb/shared/data-access/facade/lvms';
import { DialogDeleteComponent } from '@zyweb/shared/ui/base';
import { MasterDetailCommand } from '@zyweb/shared/util/utility';

@Component({
  selector: 'zyweb-vehicle-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailComponent implements MasterDetailCommand<Vehicle>, OnInit, OnDestroy {

  private _actionsSubscription: Subscription;
  private subscriptions: Array<Subscription> = [];
  private _ref: DynamicDialogRef | null = null;

  commands = this;
  public vehicle$: Observable<Vehicle>;
  public vehicle: Vehicle;

  constructor(
    public _facade: VehicleFacade,
    private changeDetector: ChangeDetectorRef,
    private _dialogService: DialogService,
    private _route: ActivatedRoute,
  ) {
    this.vehicle$ = this._facade.vehicleDetail$;
  }

  public toList(): void {
    this._facade.returnToList();
  }

  public create(): void {
    this._facade.createVehicle();
  }

  public update(): void {
    console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu');
  }

  public delete(): void {
    this._ref = this._dialogService.open(DialogDeleteComponent, {
      header: '删除车辆信息档案',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000
    });

    this._ref.onClose.subscribe((isDelete) => {

      if (isDelete) {
        this._facade.removeDetail(this.vehicle);
      }
    });
  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this.vehicle$.subscribe((vehicle: any) => {
        if (vehicle) {
          this.vehicle = vehicle;
        }
      }));
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
