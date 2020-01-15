import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div id="header">
        <span>This is a header</span>
        <div id="portal-outlet"></div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
}
