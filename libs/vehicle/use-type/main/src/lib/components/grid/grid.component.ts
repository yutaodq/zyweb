import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input, OnInit
} from '@angular/core';

import { Vehicle, VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { GridPresenter } from './grid.presenter';
import { IDataGridOptions } from '@zyweb/shared/grid/ui';
import { VehicleUseTypeSearchNgrxGridService } from '@zyweb/shared/data-access/facade/lvms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'zyweb-grid',
  templateUrl: './grid.component.html',
  providers: [ GridPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class GridComponent implements OnInit, AfterViewInit {
  private _items: VehicleUseType[];
  public gridOptions: IDataGridOptions ;
  constructor(private _gridPresenter: GridPresenter,
              private _searchNgrxGridService: VehicleUseTypeSearchNgrxGridService,
  ) {
  }

  ngOnInit() {
    this.gridOptions = this._gridPresenter.gridOptions;
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
  public set items(value: VehicleUseType[]) {
    this._items = value;
  }

  public get items(): VehicleUseType[] {
    return this._items;
  }
}

