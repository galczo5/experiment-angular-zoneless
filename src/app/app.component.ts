import {ApplicationRef, ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div style="padding: 4px 25px;">
      <router-outlet></router-outlet>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {

  private readonly onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    router: Router,
    applicationRef: ApplicationRef
  ) {
    this.zonelessRouterStarter(router, applicationRef);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private zonelessRouterStarter(router: Router, applicationRef: ApplicationRef): void {
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => {
        applicationRef.tick();
      });
  }

}
