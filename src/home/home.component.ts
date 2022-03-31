import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <app-mock></app-mock>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
