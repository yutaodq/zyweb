import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { VehicleCreateForm } from './VehicleCreateForm';
import { CreateVehicleService } from '../../../services';

@Injectable()
export class VehicleCreateFormActions implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  validateButtonClicked = new Subject<void>();
  resetButtonClicked = new Subject<void>();
  cancelButtonClicked = new Subject<void>();

  constructor(
    private _createService: CreateVehicleService,
    private _form: VehicleCreateForm
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
      this.validateButtonClicked
        .subscribe(() => alert('The form is validated!')),
      // this._createService.add(vehicle)
      this.resetButtonClicked
        .subscribe(() => this._form.reset()),

      this.cancelButtonClicked
        .subscribe(() => this._createService.cancel())
    );
  }

}
