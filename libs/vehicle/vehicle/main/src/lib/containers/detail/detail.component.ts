import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { VehicleFacade } from '@zyweb/shared/data-access/facade/lvms';
import { NotificationService } from '@zyweb/shared/util/message';
import { DialogDeleteComponent } from '@zyweb/shared/ui/base';

@Component({
  selector: 'zyweb-vehicle-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DetailComponent implements OnInit, OnDestroy {

  public vehicle$: Observable<Vehicle>;
  public vehicle: Vehicle;
  private _actionsSubscription: Subscription;
  private subscriptions: Array<Subscription> = [];
  private _ref: DynamicDialogRef | null = null;

  constructor(
    public _facade: VehicleFacade,
    private changeDetector: ChangeDetectorRef,
    private _dialogService: DialogService,
    private _route: ActivatedRoute,
    private notification: NotificationService
  ) {
    this.vehicle$ = this._facade.vehicleDetail$;
  }

  public returnList(): void {
    this._facade.returnToList();
   }

  public create(): void {
    this._facade.createVehicle();
  }

  public delete(): void {
    this.notification.showMessage({severity: 'success', summary: '提示信息：', detail: '您已经删除了一台车辆信息' });
    this._ref = this._dialogService.open(DialogDeleteComponent, {
      header: '删除车辆信息档案',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000,
    });

    this._ref.onClose.subscribe((isDelete) => {

      if (isDelete) {
        // this._facade.removeDetail(this.vehicle);
      }
    });
  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    // this.subscriptions.push(
    //   this._facade.vehicles$.subscribe((vehicle: any) => {
    //     if (vehicle) {
    //       this.changeDetector.markForCheck();
    //       this.vehicle = vehicle;
    //       this.vehicle$ = of(vehicle);
    //     }
    //   }),
    //   this._actionsSubscription = this._route.params
    //     .pipe(map((params) =>  params.id))
    //     .subscribe((id) => this._facade.dispatchSelectVehicleUseType(id)),
    // );
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
