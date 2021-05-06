import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { DialogDeleteComponent } from '@zyweb/shared/ui/base';
import { MasterDetailCommand } from '@zyweb/shared/util/utility';

import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { UpdateNameFormComponent } from '../../components/update-form/name/update-name-form.component';
import { UpdateMainFormComponent } from '../../components/update-form/main/update-main-form.component';
import { DetailVehicleUseStateService } from '../../services/detail-vehicle-use-state.service';

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
    // public _facade: VehicleUseStateFacade,
    private changeDetector: ChangeDetectorRef,
    private _dialogService: DialogService,
    private _detailVehicleUseStateService: DetailVehicleUseStateService,
  ) {
  }
  get detail$() {
    return this._detailVehicleUseStateService.detail$;

  }

  public toList(): void {
    this._detailVehicleUseStateService.toList();
  }

  public create(): void {
    this._detailVehicleUseStateService.create();
  }


  public delete(): void {
    this._detailVehicleUseStateService.delete(this.vehicleUseState);
  }
  public update(): void {
    this._detailVehicleUseStateService.update(this.vehicleUseState);
  }

  // public update(): void {
  //   this._ref = this._dialogService.open(UpdateMainFormComponent, {
  //     header: '修改车辆使用状态说明',
  //     width: '70%',
  //     contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
  //     baseZIndex: 10000,
  //     data: this.vehicleUseState
  //   });
  //
  //   this._ref.onClose.subscribe((vehicle) => {
  //     if (vehicle) {
  //       this._detailVehicleUseStateService.update(vehicle);
  //     }
  //   });
  // }
  public updateName(): void {
    this._detailVehicleUseStateService.update(this.vehicleUseState);
  }

  // public updateName(): void {
  //   this._ref = this._dialogService.open(UpdateNameFormComponent, {
  //     header: '修改车辆使用状态',
  //     width: '70%',
  //     contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
  //     baseZIndex: 10000,
  //     data: this.vehicleUseState
  //   });
  //
  //   this._ref.onClose.subscribe((vehicle) => {
  //     if (vehicle) {
  //       this._detailVehicleUseStateService.update(vehicle);
  //     }
  //   });
  // }

  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this._detailVehicleUseStateService.detail$.subscribe((vehicleUseState: any) => {
        if (vehicleUseState) {
          this.changeDetector.markForCheck();
          this.vehicleUseState = vehicleUseState;
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
