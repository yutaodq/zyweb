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
  public onRemoveEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public onListEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public onCreateEvent: EventEmitter<any> = new EventEmitter();

  constructor(  ) {  }

  public delete(event: Event): void {
      this.onRemoveEvent.emit();
  }

  public list(event: Event): void {
    this.onListEvent.emit();
  }
  public create(event: Event): void {
    this.onCreateEvent.emit();
  }


}

