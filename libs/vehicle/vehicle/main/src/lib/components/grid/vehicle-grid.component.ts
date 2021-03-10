import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input, OnDestroy, OnInit, Output
} from '@angular/core';

import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { VehicleGridPresenter } from './vehicle-grid.presenter';
import { VehicleSearchNgrxGridService } from '@zyweb/shared/data-access/facade/lvms';
import { GridComponentClass, SearchNgrxGridService } from '@zyweb/shared/grid/core';

@Component({
  selector: 'zyweb-vehicle-grid',
  templateUrl: './vehicle-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleGridComponent extends GridComponentClass<Vehicle> {
  constructor( vehicleGridPresenter: VehicleGridPresenter,
               searchNgrxGridService: SearchNgrxGridService
  ) {
    super();
    this.gridPresenter = vehicleGridPresenter;
    this.searchNgrxGridService = searchNgrxGridService
  }

  // constructor( vehicleGridPresenter: VehicleGridPresenter,
  //              vehicleSearchNgrxGridService: VehicleSearchNgrxGridService
  // ) {
  //   super();
  //   this.gridPresenter = vehicleGridPresenter;
  //   this.searchNgrxGridService = vehicleSearchNgrxGridService
  // }

}


// export class VehicleUseStateGridComponent implements OnInit, AfterViewInit, OnDestroy {
//   @Output() selectDataEvent = new EventEmitter<Vehicle>();
//   private _items: Vehicle[];
//
//   private subscriptions: Array<Subscription> = [];
//
//   public gridOptions: IDataGridOptions;
//   public columnDefs;
//
//   constructor(private _gridPresenter: VehicleUseStateGridPresenter,
//               private _searchNgrxGridService: VehicleUseTypeSearchNgrxGridService
//   ) {
//   }
//
//   ngOnInit() {
//     this.gridOptions = this._gridPresenter.gridOptions();
//     this.columnDefs = [...this._gridPresenter.columnDefs()];
//     this.registerEvents();
//
//
//   }
//
//   ngOnDestroy() {
//     this.subscriptions.forEach(sub => sub.unsubscribe());
//   }
//
//   private registerEvents(): void {
//     // 订阅车辆详情
//     this.subscriptions.push(
//       this._gridPresenter.select$.subscribe(vehicle => this.selectDataEvent.emit(vehicle))
//     );
//   }
//
//   public ngAfterViewInit(): void {
//     let vale;
//     this._searchNgrxGridService.query$.pipe(
//       map(query => vale = query))
//       .subscribe(query => this.quickFilter(query));
//     this.quickFilter(vale);
//   }
//
//   private quickFilter(filterValue: any) {
//     if (!!this.gridOptions.api) {
//       this.gridOptions.api.setQuickFilter(filterValue);
//     }
//   }
//
//
//   @Input()
//   public set items(value: Vehicle[]) {
//     this._items = value;
//   }
//
//   public get items(): Vehicle[] {
//     return this._items;
//   }
// }
//
