import {
  ChangeDetectionStrategy,
  Component, Injectable,
  Input
} from '@angular/core';

import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { GridOptionsModel } from '@zyweb/shared/grid/ui';

@Injectable()
export class VehicleUseTypeGridPresenter extends GridOptionsModel<VehicleUseType> {
  col =
    [
      {
        'field': 'name',
        'headerName': '车辆用途'
      },
      {
        'field': 'description',
        'headerName': '备注'
      },
      {
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
      }

    ];

  constructor() {
    super();
  }

  public columnDefs() {
    return this.col;
  }

}

