import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './containers';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: NotFoundPageComponent,
    data: { title: 'Page Not Found' }
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
