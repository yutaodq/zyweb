import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, of, Subscription } from 'rxjs';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { VehicleDeleteDialogComponent } from '../../components/delete-dialog/vehicle-delete-dialog.component';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseTypesFacade } from '@zyweb/shared/data-access/facade/lvms';
import { RouterFacade } from '@zyweb/shared/data-access/store/ngrx-router';
// import { NotificationService } from '@zy/shared/locale-text';
// import { RouterFacade } from '@zy/shared/utils/ngrx-router';

@Component({
  selector: 'zyweb-vehicle-use-type-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [DialogService, ConfirmationService],
})

export class DetailsComponent implements OnInit, OnDestroy {

  public vehicleUseType$: Observable<VehicleUseType>;
  public vehicleUseType: VehicleUseType;
  private subscriptions: Array<Subscription> = [];
  private ref: DynamicDialogRef;

  constructor(
    public vehiclesFacade: VehicleUseTypesFacade,
    private changeDetector: ChangeDetectorRef,
    private _dialogService: DialogService,
    private _routerFacade: RouterFacade,
    // private _messageService: MessageService,
    // private notification: NotificationService
  ) {
  }

  public returnList(): void {
    this._routerFacade.goTo({ path: ['vehicles', 'list'] } );
    // this.vehiclesFacade.returnToList();

  }

  public delete(): void {
    // this.notification.showMessage({severity: 'success', summary: '提示信息：', detail: '您已经删除了一台车辆信息' });
    // // this._messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    // this.ref = this._dialogService.open(VehicleDeleteDialogComponent, {
    //   header: '删除车辆信息档案',
    //   width: '70%',
    //   contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
    //   baseZIndex: 10000
    // });
    //
    // this.ref.onClose.subscribe((isDelete) => {
    //   if (isDelete) {
    //     this.vehiclesFacade.removeVehicle(this.vehicle);
    //   }
    // });

  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this.vehiclesFacade.vehicleUseTypeDetails$.subscribe((vehicleUseType: any) => {
        if (vehicleUseType) {
          this.changeDetector.markForCheck();
          this.vehicleUseType = vehicleUseType;
          this.vehicleUseType$ = of(vehicleUseType);
        }
      }),
      // this.vehiclesFacade.vehicleDetailsRemoveSuccess$.subscribe((removeSuccess) => {
      //   if (removeSuccess) {
      //     this.returnList()
      //   }
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
    if (this.ref) {
      this.ref.close();
    }
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
