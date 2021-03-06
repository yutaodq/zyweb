import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { DialogDeleteComponent } from '@zyweb/shared/ui/base';
import { MasterDetailCommand } from '@zyweb/shared/util/utility';

import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';

@Component({
  selector: 'zyweb-vehicle-use-state-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailComponent implements MasterDetailCommand<VehicleUseState>, OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  private _ref: DynamicDialogRef | null = null;

  commands = this;
  public vehicleUseState$: Observable<VehicleUseState>;
  public vehicleUseState: VehicleUseState;

  constructor(
    public _facade: VehicleUseStateFacade,
    private changeDetector: ChangeDetectorRef,
    private _dialogService: DialogService,
  ) {
  }

  public toList(): void {
    this._facade.returnToList();
  }

  public create(): void {
    this._facade.createVehicle();
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
        this._facade.removeDetail(this.vehicleUseState);
      }
    });
  }

  // public updateZt(): void {
  //   this._ref = this._dialogService.open(UpdateZtFormComponent, {
  //     header: '删除车辆信息档案',
  //     width: '70%',
  //     contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
  //     baseZIndex: 10000,
  //     data: this.vehicle
  //   });
  //
  //   this._ref.onClose.subscribe((vehicle) => {
  //     if (vehicle) {
  //       this._facade.updateVehicle(vehicle);
  //     }
  //   });
  // }

  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this._facade.vehicleUseStateDetail$.subscribe((vehicleUseState: any) => {
        if (vehicleUseState) {
          this.changeDetector.markForCheck();
          this.vehicleUseState = vehicleUseState;
          this.vehicleUseState$ = of(vehicleUseState);
        }
      }),
      // this._actionsSubscription = this._route.params
      //   .pipe(map((params) => params.id))
      //   .subscribe((id) => console.log('iiiiiiiiiiiii' + id))
    );
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
