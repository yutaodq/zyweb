import { Component, AfterViewChecked } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'zyweb-ui-grid-actions-column-renderer',
  templateUrl: './actions-column-renderer.component.html',
  styleUrls: ['./actions-column-renderer.component.css']
})
export class ActionsColumnRendererComponent implements ICellRendererAngularComp {
  // public params: ICellRendererParams;
  private _params;
  fa: string;
  iconClass: string;

  constructor() {
  }

  agInit(params): void {
    this._params = params;
    this.fa = params.fa || null;
    this.iconClass = params.iconClass || null;
  }


  public onClick($event) {
      if (this._params.onClick instanceof Function) {
        const params = {
          event: $event,
          rowData: this._params.node.data,
          id:  this._params.node.data.id
        };
        this._params.onClick(params);
      }
  }

  refresh(params?: any): boolean {
    return true;
  }
}
