import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input, OnInit, Output
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
  @Output() selectDataEvent = new EventEmitter<VehicleUseType>();

  public gridOptions: IDataGridOptions ;
  public columnDefs;
  constructor(private _gridPresenter: GridPresenter,
              private _searchNgrxGridService: VehicleUseTypeSearchNgrxGridService,
  ) {
  }

  ngOnInit() {
    this.gridOptions = this._gridPresenter.gridOptions;
    this.columnDefs = [... require('./grid.json'), {
      headerName: '',
      editable: false,
      sortable: false,
      filter: false,
      width: 65,
      fixedWidth: true,
      lockPinned: true,
      pinned: 'right',
      cellRenderer: 'actionsColRendered',
      cellRendererParams: {
        onClick: this.onSelectData.bind(this),
        fa: 'fa fa-info-circle',
        iconClass: 'detail-icon'
      }
    }];
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
  // cellRenderer: 'buttonRendered',

  public onSelectData(params: any): void {
    this.selectDataEvent.emit(params.rowData);
  }

  @Input()
  public set items(value: VehicleUseType[]) {
    this._items = value;
  }

  public get items(): VehicleUseType[] {
    return this._items;
  }
}

