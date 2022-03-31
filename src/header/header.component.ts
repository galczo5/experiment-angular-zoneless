import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div style="background: black; color: white; display: flex; gap: 50px; align-items: center; padding: 4px 25px;">
      <h1>
        Navigation
      </h1>
      <div style="display: flex; gap: 10px;">
        <h2>
          <a style="color: white;" routerLink="/home">Home</a>
        </h2>
        <h2>
          <a style="color: white;" routerLink="/about">About</a>
        </h2>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
}
