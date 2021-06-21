import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable,  } from 'rxjs';
import {
  CreateInformationForm,
  CreateInformationFormActions,
  CreateInformationFormDataProvider, CreateInformationFormFactory
} from './providers';
import { MenuItem } from 'primeng/api';
import { CreateVehicleService } from '../../../services';
import { CreateForm, CreateFormActions } from '../providers';

/*
https://github.com/vladeye/druo-dashboard-app/tree/master/src/app/content/pages
D:\学习案例\druo-dashboard\src\app\content\pages\components\invoices\invoices-routing.module.ts
 */
@Component({
  selector: 'zyweb-vehicle-create-information',
  templateUrl: './create-information.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateInformationComponent  implements OnInit  {

  ageIsGreaterThanTen: Observable<boolean>;
  formIsValid: Observable<boolean>;

  constructor(
    public form: CreateForm,
    public formActions: CreateFormActions,

) {
    // this.ageIsGreaterThanTen = this.form.ageIsGreaterThan(10);
    this.formIsValid = this.form.isInformationValid();
  }

  ngOnInit(): void {  }


}
