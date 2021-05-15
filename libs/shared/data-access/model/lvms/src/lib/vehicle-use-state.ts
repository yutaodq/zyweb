export interface VehicleUseState {
  id: string;
  name: string;
  description?: string;
  updateType?: string
}

export const emptyState: VehicleUseState = {
  id: '',
  name: '不选择',
};
// export function generateMockVehicle(): VehicleUseType {
//   return {
//     id: '1',
//     name: '车辆名称',
//     description: '车辆牌照'
//
//   };
// }
