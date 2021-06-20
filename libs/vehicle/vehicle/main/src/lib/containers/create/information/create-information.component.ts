import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Observable,  } from 'rxjs';
import {
  CreateInformationForm,
  CreateInformationFormActions,
  CreateInformationFormDataProvider, CreateInformationFormFactory
} from './providers';
import { MenuItem } from 'primeng/api';
import { CreateVehicleService } from '../../../services';

/*
https://github.com/vladeye/druo-dashboard-app/tree/master/src/app/content/pages
D:\学习案例\druo-dashboard\src\app\content\pages\components\invoices\invoices-routing.module.ts
 */
@Component({
  selector: 'zyweb-vehicle-create-information',
  templateUrl: './create-information.component.html',
  providers: [
    CreateInformationFormFactory,
    { provide: CreateInformationForm,
      useFactory: (factory: CreateInformationFormFactory) => factory.create(),
      deps: [CreateInformationFormFactory]
    },
    CreateInformationFormDataProvider,
    CreateInformationFormActions,

  ],

  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateInformationComponent  implements OnInit  {

  ageIsGreaterThanTen: Observable<boolean>;
  formIsValid: Observable<boolean>;

  constructor(
    private _createService: CreateVehicleService,
    public form: CreateInformationForm,
    public formDataProvider: CreateInformationFormDataProvider,
    public formActions: CreateInformationFormActions,

) {
    console.log("CreateInformationComponentCreateInformationComponentCreateInformationComponent");
    this.ageIsGreaterThanTen = this.form.ageIsGreaterThan(10);
    this.formIsValid = this.form.isValid();
  }

  ngOnInit(): void {

  }


}
