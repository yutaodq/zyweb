import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { VehicleCreateForm } from './VehicleCreateForm';

@Injectable()
export class VehicleCreateFormActions {
  searchButtonClicked = new Subject<void>();

  constructor(
    private form: VehicleCreateForm,
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
