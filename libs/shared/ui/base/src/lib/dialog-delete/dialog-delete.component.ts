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
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'zyweb-vehicle-delete-dialog',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DialogDeleteComponent  {

  constructor( private _ref: DynamicDialogRef) {
  }
  public delete(): void{
    this._ref.close(true)

  }
  public cancel(): void{
    this._ref.close(false)

  }

}

