import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkPortalOutlet, ComponentPortal, TemplatePortal} from '@angular/cdk/portal';

import {PortalService} from '../portal.service';

@Component({
  selector: 'app-header',
  template: `
    <div id="header">
        <span>This is a header</span>
        <ng-container *cdkPortalOutlet></ng-container>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild(CdkPortalOutlet, {static: false}) portalOutlet: CdkPortalOutlet;

  constructor(private portalService: PortalService) {
  }

  ngOnInit() {
    this.portalService.portal
      .subscribe((portal: ComponentPortal<any> | TemplatePortal) => {
        if (!!this.portalOutlet) {
          this.portalOutlet.detach();
        }
        if (!!portal) {
          this.portalOutlet.attach(portal);
        }
      });
  }
}
