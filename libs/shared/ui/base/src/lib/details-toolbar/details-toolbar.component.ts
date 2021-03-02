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
import { MasterDetailCommand } from '@zyweb/shared/util/utility';

@Component({
  selector: 'zyweb-ui-base-details-toolbar',
  templateUrl: './details-toolbar.component.html',
  styleUrls: ['./details-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetailsToolbarComponent  {
  @Output()
  public onRemoveEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public onListEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  public onCreateEvent: EventEmitter<any> = new EventEmitter();

  @Input() commands: MasterDetailCommand<any>;

  constructor(  ) {  }

  public delete(event: Event): void {
      this.onRemoveEvent.emit();
  }

  public list(event: Event): void {
    this.commands.toList();
    this.onListEvent.emit();
  }
  public create(event: Event): void {
    this.onCreateEvent.emit();
  }


}

