import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-mock',
  template: `
    <div *ngFor="let size of mock"
         style="margin-top: 20px; background: aliceblue; border-radius: 20px; width: 966px;"
         [style.height.rem]="size"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MockComponent {

  mock = new Array(10)
    .fill(0)
    .map(() => {
      return Math.ceil(Math.random() * 30);
    });

}
