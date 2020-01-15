import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PortalModule} from '@angular/cdk/portal';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {DetailsHeaderActionComponent} from './details-header-action/details-header-action.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailsComponent,
    DetailsHeaderActionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DetailsHeaderActionComponent],
})
export class AppModule {
}
