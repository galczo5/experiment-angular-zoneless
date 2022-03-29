import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MockComponent} from './mock.component';


@NgModule({
  declarations: [
    MockComponent
  ],
  exports: [
    MockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MockModule {
}
