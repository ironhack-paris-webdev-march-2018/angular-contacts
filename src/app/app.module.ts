import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CounterUiComponent } from './counter-ui/counter-ui.component';
import { CounterService } from './counter-ui/counter.service';
import { ContactService } from './contact-list/contact.service';
import { ChuckComponent } from './chuck/chuck.component';
import { IcndbService } from './api/icndb.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactListComponent,
    NotFoundComponent,
    ContactDetailsComponent,
    CounterUiComponent,
    ChuckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CounterService,
    ContactService,
    IcndbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
