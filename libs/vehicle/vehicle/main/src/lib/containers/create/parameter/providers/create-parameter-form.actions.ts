import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CreateParameterForm } from './create-parameter.form';
import { CreateVehicleService } from '../../../../services';
import { Vehicle, VehicleParameter } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class CreateParameterFormActions implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  validateButtonClicked = new Subject<void>();
  resetButtonClicked = new Subject<void>();
  cancelButtonClicked = new Subject<void>();
  creatreParameterFormNextClicked = new Subject<void>();

  constructor(
    private _createService: CreateVehicleService,
    private _form: CreateParameterForm
  ) {
    this.registerEvents();

  }

  ngOnInit() {
    // this.registerEvents();
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Registers events
   */
  private registerEvents(): void {
    this._subscriptions.push(
      this.creatreParameterFormNextClicked
        .subscribe(() => this.creatreParameterFormNext()
        ),
      this.validateButtonClicked
        .subscribe(() => this.save()
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
    const vehicleParameter = this._form.asFormGroup.value as VehicleParameter;
    this._createService.createParameterFormNext(vehicleParameter);
  }

  private save() {
    this._createService.add(this._form.asFormGroup.value);
  }
}
