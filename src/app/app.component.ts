import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div style="padding: 4px 25px;">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
}
