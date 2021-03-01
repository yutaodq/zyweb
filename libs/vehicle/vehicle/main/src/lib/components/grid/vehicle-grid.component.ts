import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input, OnDestroy, OnInit, Output
} from '@angular/core';

import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { VehicleGridPresenter } from './vehicle-grid.presenter';
import { IDataGridOptions } from '@zyweb/shared/grid/ui';
import { VehicleUseTypeSearchNgrxGridService } from '@zyweb/shared/data-access/facade/lvms';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'zyweb-wehicle-grid',
  templateUrl: './vehicle-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleGridComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() selectDataEvent = new EventEmitter<Vehicle>();
  private _items: Vehicle[];

  private subscriptions: Array<Subscription> = [];

  public gridOptions: IDataGridOptions;
  public columnDefs;

  constructor(private _gridPresenter: VehicleGridPresenter,
              private _searchNgrxGridService: VehicleUseTypeSearchNgrxGridService
  ) {
  }

  ngOnInit() {
    this.gridOptions = this._gridPresenter.gridOptions();
    this.columnDefs = [...this._gridPresenter.columnDefs()];
    this.registerEvents();


  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this._gridPresenter.select$.subscribe(vehicle => this.selectDataEvent.emit(vehicle))
    );
  }

  public ngAfterViewInit(): void {
    let vale;
    this._searchNgrxGridService.query$.pipe(
      map(query => vale = query))
      .subscribe(query => this.quickFilter(query));
    this.quickFilter(vale);
  }

  private quickFilter(filterValue: any) {
    if (!!this.gridOptions.api) {
      this.gridOptions.api.setQuickFilter(filterValue);
    }
  }


  @Input()
  public set items(value: Vehicle[]) {
    this._items = value;
  }

  public get items(): Vehicle[] {
    return this._items;
  }
}

