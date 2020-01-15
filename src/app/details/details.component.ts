import {AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, Injector} from '@angular/core';
import {DomPortalOutlet, ComponentPortal} from '@angular/cdk/portal';

import {DetailsHeaderActionComponent} from '../details-header-action/details-header-action.component';

@Component({
  selector: 'app-details',
  template: `
    <div id="details">
      <div>Details works</div>
    </div>
  `,
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements AfterViewInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private appRef: ApplicationRef) {
  }

  ngAfterViewInit() {
    const portalTag = document.querySelector('#portal-outlet');
    const portalOutlet = new DomPortalOutlet(
      portalTag,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );
    portalTag.innerHTML = '';
    portalOutlet.attach(new ComponentPortal(DetailsHeaderActionComponent));
  }
}
