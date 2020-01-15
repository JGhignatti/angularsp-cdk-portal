import {AfterViewInit, Component} from '@angular/core';
import {ComponentPortal} from '@angular/cdk/portal';

import {DetailsHeaderActionComponent} from '../details-header-action/details-header-action.component';
import {PortalService} from '../portal.service';

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

  constructor(private portalService: PortalService) {
  }

  ngAfterViewInit() {
    this.portalService.setPortal(new ComponentPortal(DetailsHeaderActionComponent));
  }
}
