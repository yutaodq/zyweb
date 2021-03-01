import {
  Component,
   Output,
  EventEmitter,
} from '@angular/core';


@Component({
  selector: 'zyweb-ui-base-button-list-new',
  templateUrl: './list-new-button.component.html',
  providers: []
})
export class ListNewButtonComponent  {
  @Output()
  public click: EventEmitter<any> = new EventEmitter();

  constructor() {}

  // ------------------------------

  public onButtonClick(event: Event): void {
    // event.stopPropagation();
    this.click.emit(event);
  }

}
