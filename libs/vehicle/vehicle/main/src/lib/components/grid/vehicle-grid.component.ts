import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input, OnInit, Output
} from '@angular/core';

import { Vehicle } from '@zyweb/shared/data-access/model/lvms';
import { VehicleGridPresenter } from './vehicle-grid.presenter';
import { IDataGridOptions } from '@zyweb/shared/grid/ui';
import { VehicleUseTypeSearchNgrxGridService } from '@zyweb/shared/data-access/facade/lvms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'zyweb-wehicle-use-type-grid',
  templateUrl: './vehicle-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleGridComponent implements OnInit, AfterViewInit {
  private _items: Vehicle[];
  @Output() selectDataEvent = new EventEmitter<Vehicle>();

  public gridOptions: IDataGridOptions ;
  public columnDefs;
  constructor(private _gridPresenter: VehicleGridPresenter,
              private _searchNgrxGridService: VehicleUseTypeSearchNgrxGridService,
  ) {
  }

  ngOnInit() {
    this.gridOptions = this._gridPresenter.gridOptions;
    this.columnDefs = [... require('./vehicle-grid.json'), {
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
  public set items(value: Vehicle[]) {
    this._items = value;
  }

  public get items(): Vehicle[] {
    return this._items;
  }
}

