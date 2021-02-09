import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Injector,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';


@Component({
  selector: 'zyweb-shared-ui-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CreateFormComponent  {
  @Input()   public form:        FormGroup;
  @Input()   public model:        {};
  @Input()   public options:        FormlyFormOptions;
  @Input()   public fields:        FormlyFieldConfig[];

  constructor() {
  }

}

