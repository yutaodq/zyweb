import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CreateParameterForm } from './create-parameter.form';
import { CreateVehicleService } from '../../../../services';
import { Vehicle, VehicleParameter, VehicleStructure } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class CreateParameterFormActions implements  OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  resetButtonClicked = new Subject<void>();
  cancelButtonClicked = new Subject<void>();
  createParameterFormNextClicked = new Subject<void>();
  createParameterFormPreviousClicked = new Subject<void>();

  constructor(
    private _createService: CreateVehicleService,
    private _form: CreateParameterForm
  ) {
    this.registerEvents();

  }

  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    this._subscriptions.push(
      this.createParameterFormPreviousClicked
        .subscribe(() => this.creatreParameterFormPrevious()
        ),

      this.createParameterFormNextClicked
        .subscribe(() => this.creatreParameterFormNext()
        ),
      this.resetButtonClicked
        .subscribe(() => this._form.reset()
        ),

      this.cancelButtonClicked
        .subscribe(() => this._createService.cancel()
        )
    );
  }

  private creatreParameterFormNext() {
    this._createService.createParameterFormNext(this.getParameter());
  }
  private getParameter() {
    return this._form.asFormGroup.value as VehicleParameter;
  }

  private creatreParameterFormPrevious() {
    this._createService.createParameterFormPrevious(this.getParameter());

  }
}
