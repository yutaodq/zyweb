// /*
// https://github.com/wswaileh/pharmacy-v2
// pharmacy-v2\pharmacy-fe\src\app\_services\facade-services\base-entity.service.ts
//  */
// import { createEntityCacheSelector, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
// import { createSelector, select } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { filter, first, map, tap, delay } from 'rxjs/operators';
// import { RouteSelectors } from '@zyweb/shared/data-access/store/ngrx-router';
//
// export abstract class BaseEntityService<T> extends EntityCollectionServiceBase<T> {
// //
//   private getSelectedId = createSelector(
//     RouteSelectors.getMergedRoute,
//     (mergedRoute) => <string>mergedRoute.params.id
//   );
//
//   selectedId$ = this.store.pipe(select(this.getSelectedId))
//
//   private getSelected = createSelector(
//     this.selectors.selectEntityMap,
//     this.getSelectedId,
//     (entities, selectedId) => <T>(selectedId && entities[selectedId])
//   );
//
//   selected$ = this.store.pipe(select(this.getSelected))
//
//   /*
//     以下十学习：https://github.com/wswaileh/pharmacy-v2
//    */
//
//   protected entityCacheSelecter = createEntityCacheSelector('entityCache');
//
//   constructor(
//     entityName: string,
//     protected serviceElementsFactory: EntityCollectionServiceElementsFactory
//   ) {
//     super(entityName, serviceElementsFactory);
//   }
//
//   byIdSelector = createSelector(
//     this.selectors.selectEntityMap,
//     entities => (id: string) => entities[id]
//   );
//
//   byIdsSelector = createSelector(
//     this.selectors.selectEntityMap,
//     entities => (ids: string[]) => ids.map(id => entities[id])
//   );
//
//   getAllEntities() {
//     this.loaded$.pipe(
//       tap(loaded => {
//         if (!loaded) {
//           return this.getAll();
//         }
//         return null;
//       }),
//       filter(loaded => !!loaded),
//       first()
//     ).subscribe();
//   }
//
//   selectEntityById(id: string): Observable<T> {
//     return this.store.pipe(
//       select(this.byIdSelector),
//       map(e => e[id]),
//     );
//   }
//
//   selectEntitiesByIds(ids: string[]): Observable<T[]> {
//     return this.store.pipe(
//       select(this.byIdsSelector),
//       map(f => f(ids)),
//     );
//   }
//
//
//   public selectAllEntityListExcept(key: string, value: any): Observable<T[]> {
//     return this.entities$.pipe(
//       map(arr => arr.filter(e => e[key] !== value)),
//     );
//   }
//
//   duplicate(entity: T){
//     return super.add(entity);
//   }
//
// }
