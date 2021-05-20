import { CreateVehicleService } from './create-vehicle.service';
import { Observable } from 'rxjs';

export function loadSteps(service: CreateVehicleService): Observable<any> {
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
        fieldGroup: [
          { type: 'stepsZy',
            templateOptions: {
              items: [
                { label: 'Carrinho', routerLink: '' },
                { label: 'Endereço', routerLink: '' }
              ]
            },
            fieldGroup: [
              {
                className: 'col-md-2',
                key: 'nbpz',
                type: 'input',
                templateOptions: {
                  label: '内部牌照号'
                },
               },

            ]
          }
        ]
      }
    ])
  })
}
