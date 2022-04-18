import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SigninComponent} from './pages/signin/signin.component';
import {SignupComponent} from './pages/signup/signup.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {WatchComponent} from './pages/watch/watch.component';
import {MarketplaceComponent} from './pages/marketplace/marketplace.component';
import {NotificationComponent} from './pages/notification/notification.component';
import {HomeComponent} from './pages/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {APIInterceptor} from "./services/apiinterceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    SettingsComponent,
    WatchComponent,
    MarketplaceComponent,
    NotificationComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
