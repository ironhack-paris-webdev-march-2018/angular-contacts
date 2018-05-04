import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CounterUiComponent } from './counter-ui/counter-ui.component';
import { CounterService } from './counter-ui/counter.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactListComponent,
    NotFoundComponent,
    ContactDetailsComponent,
    CounterUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
