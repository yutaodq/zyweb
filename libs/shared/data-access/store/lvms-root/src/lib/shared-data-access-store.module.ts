// import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '@zy/environments';
//
// import { metaReducers, ROOT_REDUCERS } from './reducers';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';
// import { RouterEffects } from './effects';
// @NgModule({
//   imports: [
//     StoreModule.forRoot({}),
//     // StoreModule.forRoot(ROOT_REDUCERS, {
//     //   metaReducers,
//     //   runtimeChecks: {
//     //     // strictStateImmutability and strictActionImmutability are enabled by default
//     //     strictStateSerializability: true,
//     //     strictActionSerializability: true,
//     //     strictActionWithinNgZone: true,
//     //     strictActionTypeUniqueness: true,
//     //   },
//     // }),
//
//     /**
//      * @ngrx/router-store keeps router state up-to-date in the store.
//      */
//     // StoreRouterConnectingModule.forRoot(),
//
//     /**
//      * Store devtools instrument the store retaining past versions of state
//      * and recalculating new states. This enables powerful time-travel
//      * debugging.
//      *
//      * To use the debugger, install the Redux Devtools extension for either
//      * Chrome or Firefox
//      *
//      * See: https://github.com/zalmoxisus/redux-devtools-extension
//      */
//     StoreDevtoolsModule.instrument({
//       name: '作业大队应用程序',
//
//       // In a production build you would want to disable the Store Devtools
//       // logOnly: environment.production,
//     }),
//     /**
//      * EffectsModule.forRoot() is imported once in the root module and
//      * sets up the effects class to be initialized immediately when the
//      * application starts.
//      *
//      * See: https://ngrx.io/guide/effects#registering-root-effects
//      */
//     // EffectsModule.forRoot([ RouterEffects]),  ],
//     EffectsModule.forRoot()]
// })
// export class SharedDataAccessStoreModule {
//   static forRoot(): ModuleWithProviders<any> {
//     return {
//       ngModule: SharedDataAccessStoreModule
//     };
//   }
//
//   constructor(
//     @Optional()
//     @SkipSelf()
//       parentModule: SharedDataAccessStoreModule
//   ) {
//     if (parentModule) {
//       throw new Error(
//         `${parentModule} has already been loaded. Import StateModule in the AppModule only.`
//       );
//     }
//   }
// }
