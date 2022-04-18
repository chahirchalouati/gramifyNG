import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {SignUpRequest} from "../model/request/sign-up-request";
import {SignInRequest} from "../model/request/sign-in-request";
import {SignUpResponse} from "../model/response/sign-up-response";
import {SignInResponse} from "../model/response/sign-in-response";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  constructor(private httpClient: HttpClient,
              private localStorageService: LocalStorageService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

  signUp(signupRequest: SignUpRequest) {
    this.httpClient.post<SignUpResponse>("signup", signupRequest).subscribe(response => {
      this.router.navigate([ "signin" ], {queryParams: {...response}})
    })
  }

  signIn(request: SignInRequest) {
    this.httpClient.post<SignInResponse>("signin", request).subscribe((response: SignInResponse) => {
      this.localStorageService.storeToken(response.token);
      this.router.navigate([ "home" ], {queryParams: {username: response.user.username}})
    })
  }
}
