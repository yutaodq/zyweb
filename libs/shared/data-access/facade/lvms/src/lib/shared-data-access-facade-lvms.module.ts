import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityServices } from '@ngrx/data';
import { AppEntityServices } from './app-entities.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    AppEntityServices,
    { provide: EntityServices, useExisting: AppEntityServices }
  ]
})
export class SharedDataAccessFacadeLvmsModule {
}
