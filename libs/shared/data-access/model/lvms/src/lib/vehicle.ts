import { VehicleUseState } from './vehicle-use-state';

export class VehicleRowViewModel {
  id: string;
  name: string;
  pz: string;
  nbpz: string;
  type: string;
  useStateName?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  pz: string;
  nbpz: string;
  type?: string;
  useState?: VehicleUseState;
  description?: string;

}

export interface VehicleList {
  id: string;
  name: string;
  pz: string;
  nbpz: string;
  type: string;
  zt: string;
  description: string;

}

export function generateMockVehicle(): Vehicle {
  return {
    id: '1',
    name: '车辆名称',
    pz: '车辆牌照',
    nbpz: '内部牌照',
    type: '车辆类型',
    useState: {id: 'ffffff',  name: 'fff', description: 'dddd'},
    description: '备注'
  };
}

