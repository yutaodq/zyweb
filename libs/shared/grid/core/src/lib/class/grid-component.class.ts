import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input, OnDestroy, OnInit, Output
} from '@angular/core';

import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { SearchNgrxGridService } from '../services';
import { IDataGridOptions } from '../options';
import { IGridOptionsModel } from '../view-model';

@Component({
  template: ''
})

export abstract class GridComponentClass<T> implements OnInit, AfterViewInit, OnDestroy {
  @Output() selectDataEvent = new EventEmitter<T>();

  private _items: T[];

  private subscriptions: Array<Subscription> = [];

  public gridOptions: IDataGridOptions;
  public columnDefs;
  protected gridPresenter: IGridOptionsModel<T>

  constructor( private _searchNgrxGridService: SearchNgrxGridService
  ) {
  }

  ngOnInit() {
    this.gridOptions = this.gridPresenter.gridOptions();
    this.columnDefs = [...this.gridPresenter.columnDefs()];
    this.registerEvents();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private registerEvents(): void {
    // 订阅车辆详情
    this.subscriptions.push(
      this.gridPresenter.select$.subscribe(entity => this.selectDataEvent.emit(entity))
    );
  }

  public ngAfterViewInit(): void {
    let vale;
    this._searchNgrxGridService.query$.pipe(
      map(query => vale = query))
      .subscribe(query => this.quickFilter(query));
    this.quickFilter(vale);
  }

  private quickFilter(filterValue: any) {
    if (!!this.gridOptions.api) {
      this.gridOptions.api.setQuickFilter(filterValue);
    }
  }


  @Input()
  public set items(value: T[]) {
    this._items = value;
  }

  public get items(): T[] {
    return this._items;
  }
}

