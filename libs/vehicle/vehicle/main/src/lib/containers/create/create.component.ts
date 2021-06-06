import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { Vehicle, VehicleUseState } from '@zyweb/shared/data-access/model/lvms';
import { CreateVehicleService } from '../../services/create-vehicle.service';
import { MasterCreateCommand } from '@zyweb/shared/util/utility';
import {
  VehicleCreateForm,
  VehicleCreateFormActions,
  VehicleCreateFormDataProvider,
  VehicleCreateFormFactory
} from './providers';
import { MenuItem } from 'primeng/api';

/*
https://github.com/vladeye/druo-dashboard-app/tree/master/src/app/content/pages
D:\学习案例\druo-dashboard\src\app\content\pages\components\invoices\invoices-routing.module.ts
 */
@Component({
  selector: 'zyweb-vehicle-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  // providers: [
  //   VehicleCreateFormFactory,
  //   {
  //     provide: VehicleCreateForm,
  //     useFactory: (factory: VehicleCreateFormFactory) => factory.create(),
  //     deps: [VehicleCreateFormFactory]
  //   },
  //   VehicleCreateFormDataProvider,
  //   VehicleCreateFormActions
  // ],

  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateComponent  implements OnInit  {
  items: MenuItem[];

  ageIsGreaterThanTen: Observable<boolean>;
  formIsValid: Observable<boolean>;

  constructor(
    private _createService: CreateVehicleService,
    public form: VehicleCreateForm,
    public formDataProvider: VehicleCreateFormDataProvider,
    public formActions: VehicleCreateFormActions
  ) {
    this.ageIsGreaterThanTen = this.form.ageIsGreaterThan(10);
    this.formIsValid = this.form.isValid();
  }

  ngOnInit(): void {
    this.items = [{
      label: '基础信息',
      routerLink: 'createVehicle'
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
