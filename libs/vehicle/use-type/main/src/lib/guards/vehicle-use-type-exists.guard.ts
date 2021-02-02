/*
学习ngrx官网案例 book
D:\学习案例\ngrx-master\projects\example-app\src\app\books\guards\book-exists.guard.ts
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';

import { VehicleUseTypesExistsService, VehicleUseTypesFacade } from '@zyweb/shared/data-access/facade/lvms';
import * as fromVehicleUseTypes from '@zyweb/vehicle/use-type/data-access/store';


@Injectable({
  providedIn: 'root',
})
export class VehicleUseTypeExistsGuard implements CanActivate {
  constructor(
    private vehicleUseTypesExistsService: VehicleUseTypesExistsService,
    private router: Router
  ) {}

  // /**
  //  * 这个方法创建了一个可观察对象，它等待集合状态的' loaded '属性变为' true '，
  //  * 在加载完成后发出一次响应.
  //  */
  // waitForCollectionToLoad(): Observable<boolean> {
  //   return this.store.pipe(
  //     select(fromBooks.selectCollectionLoaded),
  //     filter((loaded) => loaded),
  //     take(1)
  //   );
  // }
  //
  // /**
  //  * 该方法检查具有给定ID的图书是否已经在存储中注册
  //  */
  // hasBookInStore(id: string): Observable<boolean> {
  //   return this.store.pipe(
  //     select(fromBooks.selectBookEntities),
  //     map((entities) => !!entities[id]),
  //     take(1)
  //   );
  // }
  //
  // /**
  //  * 该方法从API中加载具有给定ID的图书，并将其缓存到存储中，
  //  * 如果找到它则返回' true '或' false '。
  //  */
  // hasBookInApi(id: string): Observable<boolean> {
  //   return this.googleBooks.retrieveBook(id).pipe(
  //     map((bookEntity) => BookActions.loadBook({ book: bookEntity })),
  //     tap((action) => this.store.dispatch(action)),
  //     map((book) => !!book),
  //     catchError(() => {
  //       this.router.navigate(['/404']);
  //       return of(false);
  //     })
  //   );
  // }
  //
  // /**
  //  * ' hasBook '由' hasbookstore '和' hasBookInApi '组成。
  //  * 它首先检查图书是否在存储中，如果没有，则检查它是否在API中。
  //  */
  // hasBook(id: string): Observable<boolean> {
  //   return this.hasBookInStore(id).pipe(
  //     switchMap((inStore) => {
  //       if (inStore) {
  //         return of(inStore);
  //       }
  //
  //       return this.hasBookInApi(id);
  //     })
  //   );
  // }

  /**
   * 这是我们的守卫运行时路由器会调用的实际方法。
   *
   * Our guard waits for the collection to load, then it checks if we need
   * to request a book from the API or if we already have it in our cache.
   * If it finds it in the cache or in the API, it returns an Observable
   * of `true` and the route is rendered successfully.
   *
   * If it was unable to find it in our cache or in the API, this guard
   * will return an Observable of `false`, causing the router to move
   * on to the next candidate route. In this case, it will move on
   * to the 404 page.
   */
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params['id'];
    return this.vehicleUseTypesExistsService.canActivate(id);
    // return this.waitForCollectionToLoad().pipe(
    //   switchMap(() => this.hasBook(route.params['id']))
    // );
  }
}
