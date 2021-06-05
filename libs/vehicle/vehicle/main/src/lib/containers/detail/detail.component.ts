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

  private subscriptions: Array<Subscription> = [];
  private _ref: DynamicDialogRef | null = null;

  commands = this;
  public vehicle: Vehicle;

  constructor(
    private changeDetector: ChangeDetectorRef,
    // private _dialogService: DialogService,
    private _detailService: DetailVehicleService,
  ) {
  }

  get detail$() {
    return this._detailService.detail$;

  }

  public toList(): void {
    this._detailService.toList();
  }

  public create(): void {
    this._detailService.create();
  }


  public delete(): void {
    this._detailService.delete(this.vehicle);
  }

  // public update(): void {
  //   this._detailService.update(this.information);
  // }


  /**
   * Registers events
   */
  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this._detailService.detail$.subscribe((vehicle: any) => {
        if (vehicle) {
          this.changeDetector.markForCheck();
          this.vehicle = vehicle;
        }
      })
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
