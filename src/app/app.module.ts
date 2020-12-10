import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {StructurDirectivenComponent} from './structur-directiven/structur-directiven.component';
import {BindingsAndPropertiesComponent} from './bindings-and-properties/bindings-and-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    StructurDirectivenComponent,
    BindingsAndPropertiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
