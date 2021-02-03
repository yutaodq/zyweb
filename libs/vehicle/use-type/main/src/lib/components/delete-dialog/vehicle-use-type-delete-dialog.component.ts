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
  templateUrl: './vehicle-use-type-delete-dialog.component.html',
  styleUrls: ['./vehicle-use-type-delete-dialog.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleUseTypeDeleteDialogComponent  {

  constructor( private _ref: DynamicDialogRef) {
  }
  public delete(): void{
    this._ref.close(true)

  }
  public cancel(): void{
    this._ref.close(false)

  }

}

