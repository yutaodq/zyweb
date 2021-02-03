// import { Injectable } from '@angular/core';
// import { BaseGridColumnsBuilder, DataGridColumns } from '@zyweb/shared/grid/core';
// // import { BaseGridColumnsBuilder, DataGridColumns } from '@zyweb/shared/ui/grid';
//
//
// @Injectable()
// export class VehicleUseTypeColumnsBuilder extends BaseGridColumnsBuilder {
//   constructor() {
//     super();
//   }
//
//   public build(): DataGridColumns {
//     this.getVehicleGridColumns();
//     return this.columns;
//   }
//
//   private getVehicleGridColumns(): void {
//     this.addColumn({
//       headerName: '车辆用途',
//       field: VehicleUseTypeFields.name,
//       minWidth: 200
//     });
//      this.addColumn( {
//       headerName: '备注',
//       field: VehicleUseTypeFields.description
//     });
//
//   }
// }
//
// const VehicleUseTypeFields = {
//   id: 'id',
//   name: 'name',
//   description: 'description',
// };
