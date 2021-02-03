import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, of, Subscription } from 'rxjs';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService  } from 'primeng/api';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseTypesFacade } from '@zyweb/shared/data-access/facade/lvms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { NotificationService } from '@zyweb/shared/util/message';
import { DialogDeleteComponent } from '@zyweb/shared/ui/base';

@Component({
  selector: 'zyweb-vehicle-use-type-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [DialogService, ConfirmationService, VehicleUseTypesFacade],
})

export class DetailsComponent implements OnInit, OnDestroy {

  public vehicleUseType$: Observable<VehicleUseType>;
  public vehicleUseType: VehicleUseType;
  private _actionsSubscription: Subscription;
  private subscriptions: Array<Subscription> = [];
  private _ref: DynamicDialogRef;

  constructor(
    public vehicleUseTypesFacade: VehicleUseTypesFacade,
    private changeDetector: ChangeDetectorRef,
    private _dialogService: DialogService,
    private _route: ActivatedRoute,
    private notification: NotificationService
  ) {

  }

  public returnList(): void {
    this.vehicleUseTypesFacade.returnToList();
   }

  public delete(): void {
    this.notification.showMessage({severity: 'success', summary: '提示信息：', detail: '您已经删除了一台车辆信息' });
    this._ref = this._dialogService.open(DialogDeleteComponent, {
    // this.ref = this._dialogService.open(VehicleUseTypeDeleteDialogComponent, {
      header: '删除车辆信息档案',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000
    });

    this._ref.onClose.subscribe((isDelete) => {
      if (isDelete) {
        this.vehicleUseTypesFacade.removeDetail(this.vehicleUseType);
      }
    });

  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this.vehicleUseTypesFacade.vehicleUseTypeDetails$.subscribe((vehicleUseType: any) => {
        if (vehicleUseType) {
          this.changeDetector.markForCheck();
          this.vehicleUseType = vehicleUseType;
          this.vehicleUseType$ = of(vehicleUseType);
        }
      }),
      this._actionsSubscription = this._route.params
        .pipe(map((params) =>  params.id))
        .subscribe((id) => this.vehicleUseTypesFacade.dispatchSelectVehicleUseType(id)),

      // this.vehiclesFacade.vehicleDetailsRemoveSuccess$.subscribe((removeSuccess) => {
      //   if (removeSuccess) {
      //     this.returnList()
      //   },
      //   }
      //
      // )
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
