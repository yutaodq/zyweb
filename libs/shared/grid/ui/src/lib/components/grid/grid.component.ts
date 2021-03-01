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
  selector: 'zyweb-shared-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GridComponent  {
  @Input()   public rowData;
  @Input()   public gridOptions;
  @Input()   public columnDefs;


  constructor() {
  }

}

