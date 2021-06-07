import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CreateSpecialForm } from './create-special.form';
import { CreateVehicleService } from '../../../../services';
import { Vehicle, VehicleSpecial } from '@zyweb/shared/data-access/model/lvms';

@Injectable()
export class CreateSpecialFormActions implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  validateButtonClicked = new Subject<void>();
  resetButtonClicked = new Subject<void>();
  cancelButtonClicked = new Subject<void>();
  creatreSpecialFormNextClicked = new Subject<void>();

  constructor(
    private _createService: CreateVehicleService,
    private _form: CreateSpecialForm
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
      this.creatreSpecialFormNextClicked
        .subscribe(() => this.creatreSpecialFormNext()
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

  private creatreSpecialFormNext() {
    const vehicleSpecial = this._form.asFormGroup.value as VehicleSpecial;
    this._createService.createSpecialFormNext(vehicleSpecial);
  }

  private save() {
    this._createService.add(this._form.asFormGroup.value);
  }
}
