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
export interface VehicleInformation{
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
  parameter: VehicleParameter;
  structure: VehicleStructure;
  special: VehicleSpecial;

}

export interface VehicleParameter {

  zczbzl: number; //整车装备质量
  zdzzzl: number;  //最大装载质量
  rylx: string ;  //燃油类型
  pjyh: number;  //平均油耗
  edgl: number;  //额定功率
  zdnj: number;  //最大扭矩
  zxzwbj: number;  //最小转弯半径
  zgcs: number;  //最高车速
  description: string; // 备注
}

export interface VehicleStructure {
  cc: number;  //车长
  ck: number;  //车宽
  cg: number;  //车高
  zj: number;  //轴距
  qlj: number;  //前轮距
  hlj: number;  //后轮距
  qdxs: number;  //驱动形式
  fxpwz: string;  //方向盘位置
  bsqxs: string;  //变数器形式
  description: string; // 备注
}
export interface  VehicleSpecial{
  zdqzl: number;  //最大起重量
  gjbj: number;  //工作半径
  zb: number;  //主臂
  zbc: number;  //主臂长
  fbc: number;  //副臂长
  fdjxh: string;  //发动机型号
  edgl: number;  //额定功率
  zdnj: number;  //最大扭矩
  zgzs: number;  //最高转速  =====
  rylx: string;  //燃油类型
  pjyh: number;  //平均油耗
  glxh: string;  //锅炉型号
  ysjxh: string;  //压缩机型号
  bxh: string;  //泵型号
  csyq: string;  //测试仪器
  dr: number;  //斗容
  bsqxs: string;  //变数器形式
  description: string; // 备注
}
