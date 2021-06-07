import {
  Component,
  Input,
} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { CreateInformationFormDataProvider } from '../../containers/create/information/providers';


@Component({
  selector: 'zyweb-vehicle-create-information-form',
  templateUrl: './create-vehicle-form.component.html',
  styleUrls: []
})


export class CreateVehicleForm {

  @Input()
  form: FormGroup;

  constructor(
    public formDataProvider: CreateInformationFormDataProvider,
  ) {
  }


}

