import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CreateConfirmationForm } from './create-confirmation.form';
import { CreateVehicleService } from '../../../../services';

@Injectable()
export class CreateConfirmationFormActions implements OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  saveButtonClicked = new Subject<void>();
  resetButtonClicked = new Subject<void>();
  cancelButtonClicked = new Subject<void>();
  createConfirmationFormPreviousClicked = new Subject<void>();

  constructor(
    private _createService: CreateVehicleService,
    private _form: CreateConfirmationForm
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
      this.createConfirmationFormPreviousClicked
        .subscribe(() => this.createConfirmationFormPrevious()
        ),
      this.saveButtonClicked
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

  private createConfirmationFormPrevious() {
    this._createService.createConfirmationFormPrevious();
  }

  private save() {
    this._createService.add(this._form.asFormGroup.value);
  }
}
