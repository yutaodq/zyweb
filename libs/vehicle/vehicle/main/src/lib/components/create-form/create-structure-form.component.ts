import {
  Component, Input
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'zyweb-vehicle-create-structure-form',
  templateUrl: './create-structure-form.component.html',
  styleUrls: []
})


export class CreateStructureFormComponent {
  @Input()
  form: FormGroup;

  constructor(
  ) {
  }


}

