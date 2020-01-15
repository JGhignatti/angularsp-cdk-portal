import {Injectable} from '@angular/core';
import {ComponentPortal, TemplatePortal} from '@angular/cdk/portal';

import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private portal$ = new BehaviorSubject<ComponentPortal<any> | TemplatePortal>(undefined);

  get portal(): Observable<ComponentPortal<any> | TemplatePortal> {
    return this.portal$.asObservable();
  }

  setPortal(portal: ComponentPortal<any> | TemplatePortal) {
    this.portal$.next(portal);
  }
}
