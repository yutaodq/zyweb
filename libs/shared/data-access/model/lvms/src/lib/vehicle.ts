import { VehicleUseState } from './vehicle-use-state';

export class VehicleRowViewModel {
  id: string;
  name: string;
  pz: string;
  nbpz: string;
  useType: string;
  useState?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  ggxh : string ;  //规格型号
  pz: string;
  nbpz: string;
  sccj : string ;  //生产厂家
  ccrq: Date ;  //出厂日期
  tcrq: Date ;  //投产日期
  yz: number ;  //车辆原值
  csys : string ;  //车身颜色
  fdjxh : string ;  //发动机型号
  fdjbh : string ;  //发动机编号
  dpxh : string ;  //底盘型号
  dpbh : string ;  //底盘编号
  description?: string; // 备注

  typeName?: string;
  stateName?: string;
  updateType?: string
}

// export interface VehicleList {
//   id: string;
//   name: string;
//   pz: string;
//   nbpz: string;
//   type: string;
//   zt: string;
//   description: string;
//
// }
//
// export function generateMockVehicle(): Vehicle {
//   return {
//     id: '1',
//     name: '车辆名称',
//     pz: '车辆牌照',
//     nbpz: '内部牌照',
//     typeName: '车辆类型',
//     stateName: 'aaaa',
//     description: '备注'
//   };
// }
//
