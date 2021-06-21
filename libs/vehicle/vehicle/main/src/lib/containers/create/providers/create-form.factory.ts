import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateForm } from './create.form';
import { BaseFormControl } from '@zyweb/shared/ui/base';
import { CreateFormDataProvider } from './create-form-data.provider';
import { CreateStructureForm } from '../structure/providers';

@Injectable()
export class CreateFormFactory {

  constructor(private readonly _fb: FormBuilder,
              private _formDataProvider: CreateFormDataProvider
  ) {
  }

  create(): CreateForm {
    return new CreateForm(this.createInformationFormGroup(),
      this.createStructureFormGroup(),
      this.createParameterFormGroup(),
      this.createSpecialFormGroup()
      );
  }

  private createInformationFormGroup() {
    return this._fb.group({
      pz: ['牌照号：123456', [], [this._formDataProvider.isPzExists()]],
      nbpz: ['内部牌照123', [Validators.required]],
      name: ['车辆名称'],
      ggxh: ['规格型号'],
      sccj: ['生产厂家'],
      ccrq: [null],
      tcrq: [null],
      yz: [123],
      csys: ['车身颜色'],
      fdjxh: ['发动机型号'],
      fdjbh: ['发动机编号'],
      dpxh: ['底盘型号'],
      dpbh: ['底盘编号'],
      description: ['备注']
    });
  }
  private createStructureFormGroup() {
    return this._fb.group({
      cc: [],  //车长
      ck: [],  //车宽
      cg: [],  //车高
      zj: [],  //轴距
      qlj: [],  //前轮距
      hlj: [],  //后轮距
      qdxs: [],  //驱动形式
      fxpwz: [],  //方向盘位置
      bsqxs: []  //变数器形式
    });

  }
  private createParameterFormGroup() {
    return this._fb.group({
      zczbzl: [], //整车装备质量
      zdzzzl: [],   //最大装载质量
      rylx: [],   //燃油类型
      pjyh: [],   //平均油耗
      edgl: [],   //额定功率
      zdnj: [],   //最大扭矩
      zxzwbj: [],   //最小转弯半径
      zgcs: []   //最高车速

    });
  }
  private createSpecialFormGroup() {
    return this._fb.group({
      zdqzl: [],  //最大起重量
      gjbj: [],   //工作半径
      zb: [],   //主笔
      zbc: [],   //主臂长
      fbc: [],   //副臂长
      fdjxh: [],   //发动机型号
      edgl: [],   //额定功率
      zdnj: [],   //最大扭矩
      zgzs: [],   //最高转速
      rylx: [],   //燃油类型
      pjyh: [],   //平均油耗
      glxh: [],   //锅炉型号
      ysjxh: [],   //压缩机型号
      bxh: [],   //泵型号
      csyq: [],   //测试仪器
      dr: [],   //斗容
      bsqxs: []   //变数器形式

    });
  }

}
