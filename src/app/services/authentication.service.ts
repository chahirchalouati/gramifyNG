import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {SignUpRequest} from "../model/request/sign-up-request";
import {SignInRequest} from "../model/request/sign-in-request";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  constructor(private httpClient: HttpClient) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

  signUp(signupRequest: SignUpRequest) {
    this.httpClient.post<SignUpRequest>("signup",signupRequest).subscribe(value => {
      console.log(value)
    })
  }

  signIn(request: SignInRequest) {
    this.httpClient.post<SignUpRequest>("signin",request).subscribe(value => {
    })
  }
}
