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

import {CreateFormPresenter} from './create-form.presenter';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
@Component({
  selector: 'zyweb-vehicle-use-type-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: [CreateFormPresenter],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateFormComponent   implements OnInit {
  @Output() addEvent: EventEmitter<VehicleUseType> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<string> = new EventEmitter();

  private _model: {};
  private _form: FormGroup;

  constructor( private _formPresenter: CreateFormPresenter) {

  }

  ngOnInit(): void {
    this._formPresenter.add$.subscribe(vehicleUseType => this.addEvent.emit(vehicleUseType));
    this._formPresenter.cancel$.subscribe(name => this.cancelEvent.emit(name));
    this._model = this._formPresenter.model
    this._form = this._formPresenter.form;
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa");
  }

  onSubmit(model: any) {
    this._formPresenter.save();
  }

  public cancelCreate(): void{
    this._formPresenter.cancel();
  }

  get options(): FormlyFormOptions {
    return this._formPresenter.options;
  }

  get form(): FormGroup {
    return this._form;
  }
  get model() {
    return this._model;
  }
  get fields(): FormlyFieldConfig[] {
    return this._formPresenter.fields;
  }
}

