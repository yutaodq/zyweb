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

@Component({
  selector: 'zyweb-vehicle-use-type-details-toolbar',
  templateUrl: './vehicle-use-type-details-toolbar.component.html',
  styleUrls: ['./vehicle-use-type-details-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleUseTypeDetailsToolbarComponent  {
  @Output()
  public onDelete: EventEmitter<any> = new EventEmitter();
  @Output()
  public onList: EventEmitter<any> = new EventEmitter();
  constructor(  ) {  }

  public delete(event: Event): void {
      this.onDelete.emit();
  }

  toList(event: Event): void {
    this.onList.emit();
  }
}

