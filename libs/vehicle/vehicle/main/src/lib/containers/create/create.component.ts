import { ChangeDetectionStrategy, Component,  OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CreateVehicleService } from '../../services/create-vehicle.service';
import { MenuItem } from 'primeng/api';
import { CreateForm, CreateFormActions, CreateFormDataProvider, CreateFormFactory } from './providers';

/*
https://github.com/vladeye/druo-dashboard-app/tree/master/src/app/content/pages
D:\学习案例\druo-dashboard\src\app\content\pages\components\invoices\invoices-routing.module.ts
 */
@Component({
  selector: 'zyweb-vehicle-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [
    CreateFormFactory,
    { provide: CreateForm,
      useFactory: (factory: CreateFormFactory) => factory.create(),
      deps: [CreateFormFactory]
    },
    CreateFormDataProvider,
    CreateFormActions,

  ],

  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateComponent  implements OnInit  {
  items: MenuItem[];

  ageIsGreaterThanTen: Observable<boolean>;
  formIsValid: Observable<boolean>;

  constructor(
    private _createService: CreateVehicleService,
    // public form: CreateForm,
    // public formDataProvider: CreateFormDataProvider,
    // public formActions: CreateFormActions
  ) {
    // this.ageIsGreaterThanTen = this.form.ageIsGreaterThan(10);
    // this.formIsValid = this.form.isValid();
  }

  ngOnInit(): void {
    this.items = [{
      label: '基础信息',
      routerLink: 'createInformation'
    },
      {
        label: '车身结构',
        routerLink: 'createStructure'
      },
      {
        label: '技术参数',
        routerLink: 'createParameter'
      },
      {
        label: '特种设备',
        routerLink: 'createSpecial'
      },
      {
        label: '保存确认',
        routerLink: 'confirmation'
      }
    ];

  }


}
