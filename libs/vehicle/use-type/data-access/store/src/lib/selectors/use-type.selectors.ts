import { createSelector } from '@ngrx/store';


import * as fromFeature from '../reducers/index-old';
import * as fromVehicleUseType from '../reducers/use-type.reducer';
// import { selectVehiclesState } from '@zy/shared/vehicle/data-acces';

export const getVehicleUseTypesEntities = createSelector(
  fromFeature.getVehicleUseTypesState,
  fromVehicleUseType.selectEntities
);

export const selectAllVehicleUseTypes = createSelector(
  fromFeature.getVehicleUseTypesState,
  fromVehicleUseType.selectAll
);

export const selectVehicleUseTypesLoaded = createSelector(
  fromFeature.getVehicleUseTypesState,
  fromVehicleUseType.getVehicleUseTypesLoaded
);

export const selectVehicleUseTypesLoading = createSelector(
  fromFeature.getVehicleUseTypesState,
  fromVehicleUseType.getVehicleUseTypesLoading
);

export const selectCollectionQuery = createSelector(
  fromFeature.getVehicleUseTypesState,
  fromVehicleUseType.getVehicleUseTypesQuery
);

// export const getSelectedPagoDeMorralla = createSelector(
//   getPagoDeMorrallasEntities,
//   fromRoot.getRouterState,
//   (entities, router): PagoDeMorralla => {
//     return router.state && entities[router.state.params.pagoId];
//   }
// );
//
// export const getPagoDeMorrallasFilter = createSelector(
//   getPagoDeMorrallasState,
//   fromPagosMorralla.getPagoDeMorrallasFilter
// );
//
// export const getPagoDeMorrallasSearchTerm = createSelector(
//   getPagoDeMorrallasState,
//   fromPagosMorralla.getPagoDeMorrallasSearchTerm
// );
