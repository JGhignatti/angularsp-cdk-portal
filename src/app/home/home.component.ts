import {AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, Injector, ViewChild} from '@angular/core';
import {CdkPortal, DomPortalOutlet, TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-home',
  template: `
    <div id="home">
      <div>Home works</div>
    </div>

    <div class="home-portal" *cdkPortal>
        <span>This section is a template at home component and it is being rendered via portal.</span>
      <a [routerLink]="'./details'">Go to details</a>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(CdkPortal, {static: false}) homePortal: TemplatePortal;

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
    this.homePortal.attach(portalOutlet);
  }
}
