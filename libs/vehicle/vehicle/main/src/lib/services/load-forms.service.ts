import { Observable } from 'rxjs';
import { CreateVehicleService } from './create-vehicle.service';
import { concatAll, filter, first } from 'rxjs/operators';

export function loadForms(service: CreateVehicleService): Observable<any> {
  return new Observable<any>((observer) => {
    observer.next([
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-md-2',
            key: 'pz',
            type: 'input',
            focus: true,
            templateOptions: {
              label: '牌照号',
              required: true,
            },
            modelOptions: {
              updateOn: 'blur', //失去焦点后验证
            },
            asyncValidators: {
              // uniqueName: this._createVehicleService.isNameExists()
            },
          },
          {
            className: 'col-md-2',
            key: 'nbpz',
            type: 'input',
            templateOptions: {
              label: '内部牌照号',
            },
            modelOptions: {
              updateOn: 'blur', //失去焦点后验证
            },
            asyncValidators: {
              // uniqueName: this._createVehicleService.isNameExists()
            },
          },
          {
            className: 'col-md-4',
            key: 'name',
            type: 'input',
            templateOptions: {
              label: '车辆名称',
              required: true,
            },
          },
          {
            className: 'col-md-4',
            key: 'ggxh',
            type: 'input',
            templateOptions: {
              label: '规格型号',
            },
          },
        ],
      },
      { template: '<hr /> ' },

      {
        type: 'tabsZy',
        fieldGroup: [
          {
            templateOptions: {
              label: '基础信息',
              // icon: 'pi-apple'
            },
            fieldGroup: loadFormsBase(service),
          },
          {
            templateOptions: { label: '车身结构和技术参数' },
            fieldGroup: loadFormsCsjg(service),
          },
          {
            templateOptions: { label: '特种设备' },
            fieldGroup: loadFormsTzsb(service),
          },
        ],
      },
    ]);
  });
}

function loadFormsBase(service: CreateVehicleService) {
  return [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-4',
          key: 'sccj',
          type: 'input',
          templateOptions: {
            label: '生产厂家',
          },
        },
        {
          className: 'col-md-4',
          key: 'ccrq',
          type: 'dateZy',
          templateOptions: {
            label: '出厂日期',
          },
        },
        {
          className: 'col-md-4',
          key: 'tcrq',
          type: 'dateZy',
          templateOptions: {
            label: '投产日期',
          },
        },
      ],
    },
    { template: '<hr /> ' },

    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-4',
          key: 'fdjxh',
          type: 'input',
          templateOptions: {
            label: '发动机型号',
          },
        },
        {
          className: 'col-md-4',
          key: 'fdjbh',
          type: 'input',
          templateOptions: {
            label: '发动机编号',
          },
        },
        {
          className: 'col-md-4',
          key: 'yz',
          type: 'numberZy',
          templateOptions: {
            label: '车辆原值',
            disabled: false,
            attributes: {
              prefix: "abc",
              suffix: "mm",
              minFractionDigits: "3",
              maxFractionDigits: "5",
              min: "6",
              max: "9",
              mode: 'currency',
              showButtons: true,
            }
          },
        },
      ],
    },
    { template: '<hr /> ' },

    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-4',
          key: 'dpxh',
          type: 'input',
          templateOptions: {
            label: '底盘型号',
          },
        },
        {
          className: 'col-md-4',
          key: 'dpbh',
          type: 'input',
          templateOptions: {
            label: '底盘编号',
          },
        },
        {
          className: 'col-md-4',
          key: 'csys',
          type: 'input',
          templateOptions: {
            label: '车身颜色',
          },
        },
      ],
    },
  ];
}

function loadFormsCsjg(service: CreateVehicleService) {
  return [];
}

function loadFormsTzsb(service: CreateVehicleService) {
  return [];
}
