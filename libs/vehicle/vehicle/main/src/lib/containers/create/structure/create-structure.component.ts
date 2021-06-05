import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable,  } from 'rxjs';
import {
  VehicleCreateForm,
  VehicleCreateFormActions,
  VehicleCreateFormDataProvider,
  VehicleCreateFormFactory
} from '../providers';
import { MenuItem } from 'primeng/api';
import { CreateVehicleService } from '../../../services';

/*
https://github.com/vladeye/druo-dashboard-app/tree/master/src/app/content/pages
D:\学习案例\druo-dashboard\src\app\content\pages\components\invoices\invoices-routing.module.ts
 */
@Component({
  selector: 'zyweb-vehicle-create-structure-form',
  templateUrl: './create-structure.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateStructureComponent  implements OnInit  {

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

  }


}
