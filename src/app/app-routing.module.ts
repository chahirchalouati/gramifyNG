import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardServiceService} from "./services/auth-guard-service.service";
import {SettingsComponent} from "./pages/settings/settings.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {WatchComponent} from "./pages/watch/watch.component";
import {SigninComponent} from "./pages/signin/signin.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {MarketplaceComponent} from "./pages/marketplace/marketplace.component";

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [ AuthGuardServiceService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardServiceService ]
  },
  {
    path: 'watch',
    component: WatchComponent,
    canActivate: [ AuthGuardServiceService ]
  },
  {
    path: 'watch',
    component: WatchComponent,
    canActivate: [ AuthGuardServiceService ]
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent,
    canActivate: [ AuthGuardServiceService ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
