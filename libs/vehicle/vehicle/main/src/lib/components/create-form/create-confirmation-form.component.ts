import {
  Component, Input
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'zyweb-vehicle-create-confirmation-form',
  templateUrl: './create-confirmation-form.component.html',
  styleUrls: []
})


export class CreateConfirmationFormComponent {
  @Input()
  form: FormGroup;

  constructor(
  ) {
  }


}

