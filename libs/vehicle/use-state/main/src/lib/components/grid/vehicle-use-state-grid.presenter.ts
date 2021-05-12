import {
  ChangeDetectionStrategy,
  Component, Injectable,
  Input
} from '@angular/core';

import { VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { GridOptionsModel } from '@zyweb/shared/grid/ui';

@Injectable()
export class VehicleUseStateGridPresenter extends GridOptionsModel<VehicleUseState> {

  col =
    [
      {
        field: 'name',
        headerName: '车辆状态'
      },
      {
        field: 'description',
        headerName: '备注'
      },
      {
        headerName: '选择',
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
          fa: 'fa fa-bars',
          iconClass: 'p-button-rounded p-button-success'
        }
      }
    ];

  /*
  一定要有构造函数，否则无法注入
   */
  constructor() {
    super();
  }

  public columnDefs() {
    return this.col;
  }

}

