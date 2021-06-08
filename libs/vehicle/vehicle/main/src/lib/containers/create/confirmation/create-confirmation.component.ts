import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable,  } from 'rxjs';
import {
  CreateConfirmationForm,
  CreateConfirmationFormActions,
  CreateConfirmationFormDataProvider,
} from './providers';
import { CreateVehicleService } from '../../../services';

/*
https://github.com/vladeye/druo-dashboard-app/tree/master/src/app/content/pages
D:\学习案例\druo-dashboard\src\app\content\pages\components\invoices\invoices-routing.module.ts
 */
@Component({
  selector: 'zyweb-vehicle-create-confirmation',
  templateUrl: './create-confirmation.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateConfirmationComponent  implements OnInit  {

  ageIsGreaterThanTen: Observable<boolean>;
  formIsValid: Observable<boolean>;

  constructor(
    private _createService: CreateVehicleService,
    public form: CreateConfirmationForm,
    public formDataProvider: CreateConfirmationFormDataProvider,
    public formActions: CreateConfirmationFormActions
  ) {
    this.formIsValid = this.form.isValid();
  }

  ngOnInit(): void {

  }


}
