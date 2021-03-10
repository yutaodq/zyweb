/*
学习ngrx官网案例 book
D:\学习案例\ngrx-master\projects\example-app\src\app\books\guards\book-exists.guard.ts
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { VehicleUseTypesExistsService } from '@zyweb/vehicle/use-type/data-access/store';



@Injectable({
  providedIn: 'root',
})
export class VehicleUseTypeExistsGuard implements CanActivate {
  constructor(
    private vehicleUseTypesExistsService: VehicleUseTypesExistsService,
    private router: Router
  ) {}

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
    return this.vehicleUseTypesExistsService.canActivate(route.params['id']);
  }
}
