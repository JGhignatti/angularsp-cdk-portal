import {Component} from '@angular/core';

@Component({
  selector: 'app-details-header-action',
  template: `
    <div class="details-portal">
      <span>This section is a template at details component and it is being rendered via portal.</span>
      <a [routerLink]="'/'">Go to home</a>
    </div>
  `,
  styleUrls: ['./details-header-action.component.scss']
})
export class DetailsHeaderActionComponent {
}
