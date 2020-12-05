import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FirstStepsComponent} from './first-steps/first-steps.component';
import {TryComponent} from './try/try.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstStepsComponent,
    TryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
