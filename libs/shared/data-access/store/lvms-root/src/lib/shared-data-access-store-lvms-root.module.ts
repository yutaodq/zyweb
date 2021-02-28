import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DefaultDataServiceConfig, EntityDataModule, EntityServices } from '@ngrx/data';
import {  entityConfig } from './data';
import { SharedDataAccessFacadeLvmsModule } from '@zyweb/shared/data-access/facade/lvms';
import { SharedDataAccessApiLvmsModule } from '@zyweb/shared/data-access/api/lvms';

@NgModule({
  imports: [
    StoreModule.forRoot({}),

    StoreDevtoolsModule.instrument({
      name: '作业大队应用程序'

    }),
    EffectsModule.forRoot(),
    EntityDataModule.forRoot(entityConfig),
    SharedDataAccessFacadeLvmsModule,
    SharedDataAccessApiLvmsModule
  ],
  providers: [
  ]
})

export class SharedDataAccessStoreLvmsRootModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedDataAccessStoreLvmsRootModule
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
      parentModule: SharedDataAccessStoreLvmsRootModule
  ) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import StateModule in the AppModule only.`
      );
    }
  }
}

