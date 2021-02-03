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
  templateUrl: './grid.html',
  styleUrls: ['./grid.scss'],
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

