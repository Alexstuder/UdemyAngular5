import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {StructurDirectivenComponent} from './structur-directiven/structur-directiven.component';
import {BindingsAndPropertiesComponent} from './bindings-and-properties/bindings-and-properties.component';
import {DependencyInjectionComponent} from './dependency-injection/dependency-injection.component';
import {VideoDBService} from './shared/video-db.service';
import {RouterModule, Routes} from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {RoutesComponent} from './routes/routes.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {StartPageComponent} from './start-page/start-page.component';

const webSiteRoutes: Routes = [
  {path: 'NavigationComponent', component: NavigationComponent},
  {path: '', component: StartPageComponent},
  {path: 'RoutesComponent/:linkArgument', component: RoutesComponent},
  {path: 'StructurDirectivenComponent', component: StructurDirectivenComponent},
  {path: 'BindingsAndPropertiesComponent', component: BindingsAndPropertiesComponent},
  {path: 'DependencyInjectionComponent', component: DependencyInjectionComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StructurDirectivenComponent,
    BindingsAndPropertiesComponent,
    DependencyInjectionComponent,
    NavigationComponent,
    RoutesComponent,
    ErrorPageComponent,
    StartPageComponent
  ],
  imports: [
    RouterModule.forRoot(webSiteRoutes),
    BrowserModule
  ],
  providers: [VideoDBService, {provide : 'InjectString', useValue: '-- das hier ist der Injizierter Wert --'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
