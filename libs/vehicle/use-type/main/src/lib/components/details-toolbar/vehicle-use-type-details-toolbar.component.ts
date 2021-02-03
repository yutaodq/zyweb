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
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { VehicleUseTypeDeleteDialogComponent } from '../delete-dialog/vehicle-use-type-delete-dialog.component';

@Component({
  selector: 'zyweb-vehicle-use-type-details-toolbar',
  templateUrl: './vehicle-use-type-details-toolbar.component.html',
  styleUrls: ['./vehicle-use-type-details-toolbar.component.scss'],
  providers: [DialogService, MessageService, ConfirmationService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleUseTypeDetailsToolbarComponent  {

  @Output()
  public onDelete: EventEmitter<any> = new EventEmitter();

  @Output()
  public onList: EventEmitter<any> = new EventEmitter();

  constructor(
  ) {
  }

  public delete(event: Event): void {
    // console.log('Awesomeness Ensures!!!');
    //   // event.stopPropagation();
      this.onDelete.emit();
  }

  toList(event: Event): void {
    this.onList.emit();
  }
}

