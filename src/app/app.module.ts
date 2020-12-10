import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FirstStepsComponent} from './first-steps/first-steps.component';
import {TryComponent} from './try/try.component';
import { VideosComponent } from './videos/videos.component';
import { StructurDirectivenComponent } from './structur-directiven/structur-directiven.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstStepsComponent,
    TryComponent,
    VideosComponent,
    StructurDirectivenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
