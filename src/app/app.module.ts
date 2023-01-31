import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleModule } from './people/people.module';
import { MinValidatorDirective } from './shared/directives/min-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    MinValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
