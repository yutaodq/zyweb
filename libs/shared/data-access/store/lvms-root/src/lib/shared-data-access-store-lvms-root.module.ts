import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot({}),

    StoreDevtoolsModule.instrument({
      name: '作业大队应用程序',

    }),

    EffectsModule.forRoot()]
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

