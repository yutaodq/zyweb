import { EntityMetadataMap } from '@ngrx/data';


export const entityMetadata: EntityMetadataMap = {
  Vehicle: {},
  VehicleUseState: {},
};

export const pluralNames = {
  Vehicle: 'Vehicles',
};

// export const entityConfig = {
//   entityMetadata,
//   pluralNames
// };

// const entityMetadata: EntityMetadataMap = {
//   Case: {
//     selectId: (item: CaseDto) => item.caseId,
//     sortComparer: sortByLastName,
//     filterFn: caseTypeFilter,
//   },
// };
