import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {RouterModule} from "@angular/router";
import {MockModule} from "../mock/mock.module";


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent
      }
    ]),
    MockModule
  ]
})
export class AboutModule {
}
