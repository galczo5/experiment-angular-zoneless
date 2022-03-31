import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>About</h1>
    <app-mock></app-mock>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {

}
