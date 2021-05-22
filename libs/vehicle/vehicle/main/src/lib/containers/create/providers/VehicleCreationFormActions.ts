import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { VehicleCreationForm } from './VehicleCreationForm';

@Injectable()
export class VehicleCreationFormActions {
  searchButtonClicked = new Subject<void>();

  constructor(
    private form: VehicleCreationForm,
    // private urlStore: UrlStore<PersonSearchCriteria>
  ) {
    this.handleSearchButtonClick();
  }

  private handleSearchButtonClick() {
    // const searchAction = this.searchButtonClicked.pipe(
    //   map(() => this.form.asFormGroup.value)
    // );
    // this.urlStore.setSource(searchAction);
  }
}
