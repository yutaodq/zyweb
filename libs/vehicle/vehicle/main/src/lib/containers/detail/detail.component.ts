import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { DialogDeleteComponent } from '@zyweb/shared/ui/base';
import { MasterDetailCommand } from '@zyweb/shared/util/utility';
import { UpdateZtFormComponent } from '../../components/update-form/zt/update-zt-form.component';
import { DetailVehicleService } from '../../services/detail-vehicle.service';

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
    private changeDetector: ChangeDetectorRef,
    private _dialogService: DialogService,
    private _route: ActivatedRoute,
    private detailService: DetailVehicleService,
  ) {
  }

  public toList(): void {
    this.detailService.toList();
  }

  public create(): void {
    this.detailService.create();
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
        this.detailService.removeDetail(this.vehicle);
      }
    });
  }

  public updateZt(): void {
    this._ref = this._dialogService.open(UpdateZtFormComponent, {
      header: '删除车辆信息档案',
      width: '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000,
      data: this.vehicle
    });

    this._ref.onClose.subscribe((vehicle) => {
      if (vehicle) {
        this.detailService.updateVehicle(vehicle);
      }
    });
  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this.detailService.detail$.subscribe((vehicle: any) => {
        if (vehicle) {
          this.changeDetector.markForCheck();
          this.vehicle = vehicle;
          this.vehicle$ = of(vehicle);
          console.log('asdffffffffffffffff');
        }
      }),
      this._actionsSubscription = this._route.params
        .pipe(map((params) => params.id))
        .subscribe((id) => console.log('iiiiiiiiiiiii' + id))
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
