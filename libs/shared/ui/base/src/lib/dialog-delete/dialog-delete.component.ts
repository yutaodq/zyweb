import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Injector,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MasterDetailCommand } from '@zyweb/shared/util/utility';

@Component({
  selector: 'zyweb-vehicle-delete-dialog',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DialogDeleteComponent  {
  title = "删除";
  details= "";
  // logo = require('../../../../assets/images/logo.svg').default;
  logo = require('./delete.jpg').default;

  constructor( private _ref: DynamicDialogRef,
               private _config: DynamicDialogConfig,
  ) {
    // this.title = this._config.data
    this.title = this._config.data.title;
    this.details  = this._config.data.details

  }

  public delete(): void{
    this._ref.close(true)

  }

  public cancel(): void{
    this._ref.close(false)

  }

}

