import { Observable } from 'rxjs';
import { CreateVehicleUseTypeService } from './create-vehicle-use-type.service';

export function loadForms(service: CreateVehicleUseTypeService): Observable<any>{
  return new Observable<any>(observer => {
      observer.next([
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-md-6',
              key: 'name',
              type: 'input',
              focus: true,
              templateOptions: {
                label: '类型名称',
                required: true,
                minLength: 2
              },
              modelOptions: {
                updateOn: 'blur' //失去焦点后验证
              },
              asyncValidators: {
                uniqueName: service.isNameExists()
              }
            }
          ]
        },
        { template: '<hr /> ' },
        {
          key: 'description',
          type: 'textarea',
          templateOptions: {
            label: '车辆类型备注',
            rows: 4,
            placeholder: ''
          }
        }
      ]);
    }
  );
}
