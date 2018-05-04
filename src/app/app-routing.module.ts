import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CounterUiComponent } from './counter-ui/counter-ui.component';
import { ChuckComponent } from './chuck/chuck.component';

const routes: Routes = [
  // router.get('/', ...
  { path: '', component: LandingPageComponent },

  // router.get('/contacts', ...
  { path: 'contacts', component: ContactListComponent },

  // router.get('/contact/:blahId', ...
  { path: 'contact/:blahId', component: ContactDetailsComponent },

  // router.get('/counter', ...
  { path: 'counter', component: CounterUiComponent },

  // router.get('/chuck', ...
  { path: 'chuck', component: ChuckComponent },

  // Handle all other URLs (MUST BE LAST)
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
