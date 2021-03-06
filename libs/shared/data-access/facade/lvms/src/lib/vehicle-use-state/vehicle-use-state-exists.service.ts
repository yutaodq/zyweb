/*
学习ngrx官网案例 book
D:\学习案例\ngrx-master\projects\example-app\src\app\books\guards\book-exists.guard.ts
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, filter, first, map, switchMap, take, tap } from 'rxjs/operators';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import {  Router } from '@angular/router';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class VehicleUseStateExistsService  {
  private _collectionService: EntityCollectionService<Vehicle>
  constructor(
    entityServices: EntityServices,
    private _router: Router,
  ) {
    this._collectionService = entityServices.getEntityCollectionService(this.entityName);

  }

get entityName() {
    return 'Vehicle'
}
  canActivate(id: string): Observable<boolean> {
    return this.waitForCollectionToLoad().pipe(
      switchMap(() => this.hasEntity(id))
    );
  }

  /**
   * 这个方法创建了一个可观察对象，它等待集合状态的' loaded '属性变为' true '，
   * 在加载完成后发出一次响应.
   */
  waitForCollectionToLoad(): Observable<boolean> {
    return this._collectionService.loaded$.pipe(
      tap(loaded => {
        if (!loaded) {
          this._collectionService.getAll()
        }
      }),
      filter(loaded => loaded),
      first()
    )
  }
  /**
   * ' hasBook '由' hasbookstore '和' hasBookInApi '组成。
   * 它首先检查图书是否在存储中，如果没有，则检查它是否在API中。
   */
  hasEntity(id: string): Observable<boolean> {
    return this.hasEntityInStore(id).pipe(
      switchMap((inStore) => {
        if (inStore) {
          return of(inStore);
        }
        return this.hasEntityInApi(id);
      })
    );
  }
  /**
   * 该方法检查具有给定ID的图书是否已经在存储中注册
   */
  hasEntityInStore(id: string): Observable<boolean> {
    return this._collectionService.keys$.pipe(
      map((entities) => !!entities[id]),
      take(1)
    );
  }

  /**
   * 该方法从API中加载具有给定ID的图书，并将其缓存到存储中，
   * 如果找到它则返回' true '或' false '。
   */

  hasEntityInApi(id: string): Observable<boolean> {
    return this._collectionService.getByKey(id).pipe(
      map(entity => !!entity),
      catchError(() => {
        this._router.navigate(['/404']);
        return of(false)
      })
    )
  }

}
