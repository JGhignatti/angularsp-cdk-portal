import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CdkPortal, TemplatePortal} from '@angular/cdk/portal';

import {PortalService} from '../portal.service';

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

  constructor(private portalService: PortalService) {
  }

  ngAfterViewInit() {
    this.portalService.setPortal(this.homePortal);
  }
}
