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
              required: true
            },
            modelOptions: {
              updateOn: 'blur' //失去焦点后验证
            },
            asyncValidators: {
              // uniqueName: this._createVehicleService.isNameExists()
            }
          },
          {
            className: 'col-md-2',
            key: 'nbpz',
            type: 'input',
            templateOptions: {
              label: '内部牌照号'
            },
            modelOptions: {
              updateOn: 'blur' //失去焦点后验证
            },
            asyncValidators: {
              // uniqueName: this._createVehicleService.isNameExists()
            }
          },
          {
            className: 'col-md-4',
            key: 'name',
            type: 'input',
            templateOptions: {
              label: '车辆名称',
              required: true
            }
          },
          {
            className: 'col-md-4',
            key: 'ggxh',
            type: 'input',
            templateOptions: {
              label: '规格型号'
            }
          }
        ]
      },
      { template: '<hr /> ' },

      {
        type: 'tabsZy',
        fieldGroup: [
          {
            templateOptions: {
              label: '基础信息'
              // icon: 'pi-apple'
            },
            fieldGroup: loadFormsBase(service)
          },
          {
            templateOptions: { label: '车身结构和技术参数' },
            fieldGroup: loadFormsCsjg(service)
          },
          {
            templateOptions: { label: '特种设备' },
            fieldGroup: loadFormsTzsb(service)
          }
        ]
      }
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
            label: '生产厂家'
          }
        },
        {
          className: 'col-md-4',
          key: 'ccrq',
          type: 'dateZy',
          templateOptions: {
            label: '出厂日期',
            attributes: {
              readonlyInput: false
            }
          }
        },
        {
          className: 'col-md-4',
          key: 'tcrq',
          type: 'dateZy',
          templateOptions: {
            label: '投产日期'
          }
        }
      ]
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
            label: '发动机型号'
          }
        },
        {
          className: 'col-md-4',
          key: 'fdjbh',
          type: 'input',
          templateOptions: {
            label: '发动机编号'
          }
        },
        {
          className: 'col-md-4',
          key: 'yz',
          type: 'numberZy',
          templateOptions: {
            label: '车辆原值',
            disabled: false,
            attributes: {
              prefix: 'abc',
              suffix: 'mm',
              minFractionDigits: '3',
              maxFractionDigits: '5',
              min: '6',
              max: '9',
              mode: 'currency',
              showButtons: false
            }
          }
        }
      ]
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
            label: '底盘型号'
          }
        },
        {
          className: 'col-md-4',
          key: 'dpbh',
          type: 'input',
          templateOptions: {
            label: '底盘编号'
          }
        },
        {
          className: 'col-md-4',
          key: 'csys',
          type: 'input',
          templateOptions: {
            label: '车身颜色'
          }
        }
      ]
    }
  ];
}

function loadFormsCsjg(service: CreateVehicleService) {
  return [];
}

function loadFormsTzsb(service: CreateVehicleService) {
  return [];
}



// public fields: FormlyFieldConfig[] =
//   [
//     {
//       fieldGroupClassName: 'row',
//       fieldGroup: [
//         {
//           className: 'col-md-6',
//           key: 'name',
//           type: 'input',
//           focus: true,
//           templateOptions: {
//             label: '车辆名称',
//             // placeholder: '车辆名称',
//             required: true,
//             minLength: 2,
//           },
//           modelOptions: {
//             updateOn: 'blur' //失去焦点后验证
//           },
//           asyncValidators: {
//             // uniqueName: this._createVehicleService.isNameExists()
//           }
//         },
//         {
//           className: 'col-md-6',
//           key: 'zt',
//           type: 'select',
//           templateOptions: {
//             label: '使用状态',
//             // placeholder: 'Placeholder',
//             options: this._createVehicleService.getVehiclesUseState(),
//             valueProp: 'id',
//             labelProp: 'name',
//             change: (field, $event, ) => {
//             // change: (field, formControl: AbstractControl) => {
//               console.log( {field, $event});
//               const ad: any[] | Observable<any[]> = field.templateOptions.options;
//               console.log( {ad});
//               console.log( 'ddddddddddddddddddddddddddddddddddd');
//
//               const id = field.formControl.value;
//               // let named: VehicleUseState;
//               let named;
//
//               // this._createVehicleService.getVehiclesUseState()
//               //    .subscribe((a) =>
//               //   { named = a[2].name}
//               // )
//
//               this._createVehicleService.getVehiclesUseState().pipe(
//                 concatAll(),
//                 filter(stated => stated.id===id),
//                 first()
//               ).subscribe((avd) =>
//                 { named = avd.name}
//               )
//               console.log(named);
//
//               // this.form.get('pz').setValue('aaadddddddd');
//               field.form.get('pz').setValue(named);
//             }
//             // change: (field, $event) => {
//             //   const value = $event.srcElement.value;
//             //   const durationValue = value / 5;
//             //   const newModel = { ...this.model1, durationValue };
//             //   this.model1 = newModel;
//             //   console.log({ field, $event });
//             // },
//
//           },
//           expressionProperties: {
//             // apply expressionProperty for disabled based on formState
//             // 'pz.templateOptions.value' : 'daff'
//           },
//           hooks: {
//             onChanges: (data) => {
//               console.log({ data });
//             },
//           //   onChanges: field => {
//           //     // field.formControl.setValue(field.templateOptions.options[0].name);
//           //     field.templateOptions.options = this._createVehicleService.getVehiclesUseState();
//           //     console.log('afsfsfsdddddsfdsfds:' + field.templateOptions.options.pipe(map( a => a[name])))
//           //     this.form.get('pz').setValue(field.templateOptions.options[0]);
//           //     // this._model = {
//           //     //   ...this._model,
//           //     //   pz: 'value',
//           //     // };
//           //   }
//           }
//         }
//       ]
//     },
//
//     { template: '<hr /> ' },
//     {
//       fieldGroupClassName: 'row',
//       fieldGroup: [
//         {
//           className: 'col-md-4',
//           key: 'type',
//           type: 'input',
//           templateOptions: {
//             label: '车辆用途',
//           }
//         },
//         {
//           className: 'col-md-4',
//           key: 'pz',
//           type: 'input',
//           templateOptions: {
//             label: '外部牌照',
//             minLength: 2
//           }
//         },
//         {
//           className: 'col-md-4',
//           key: 'nbpz',
//           type: 'input',
//           templateOptions: {
//             label: '内部牌照',
//             minLength: 2
//           }
//         }
//       ]
//     },
//     { template: '<hr /> ' }, {
//     key: 'description',
//     type: 'textarea',
//     templateOptions: {
//       label: '车辆备注',
//       rows: 4,
//       placeholder: ''
//     }
//   },
//     {
//       type: 'tabs',
//       fieldGroup:
//         [
//           {
//             templateOptions: {
//               label: '练习一',
//               // icon: 'pi-apple'
//             },
//             fieldGroup: [
//               {
//                 key: 'firstname',
//                 type: 'input',
//                 templateOptions: {
//                   label: 'First name',
//                   required: true
//                 }
//               },
//               {
//                 key: 'age',
//                 type: 'input',
//                 templateOptions: {
//                   type: 'number',
//                   label: 'Age',
//                   required: true
//                 }
//               }
//             ]
//           },
//           {
//             templateOptions: { label: 'Destination' },
//             fieldGroup: [
//               {
//                 key: 'country',
//                 type: 'input',
//                 templateOptions: {
//                   label: 'Country',
//                   required: true
//                 }
//               }
//             ]
//           },
//           {
//             templateOptions: { label: 'Day of the trip' },
//             fieldGroup: [
//               {
//                 key: 'day',
//                 type: 'input',
//                 templateOptions: {
//                   type: 'date',
//                   label: 'Day of the trip',
//                   required: true
//                 }
//               }
//             ]
//           }
//         ],
//     }
//
//   ];
