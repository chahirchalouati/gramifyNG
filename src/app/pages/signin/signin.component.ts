import {Component} from '@angular/core';
import {SignInRequest} from "../../model/request/sign-in-request";

import {AuthenticationService} from "../../services/authentication.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.scss' ]
})
export class SigninComponent {
  formRequest: FormGroup;

  constructor(private authenticationService: AuthenticationService) {
    this.formRequest = new FormGroup({
      param: new FormControl(null, [ Validators.required ]),
      password: new FormControl(null, [ Validators.required ]),
    });
  }

  login() {
    const request: SignInRequest = this.formRequest.value as SignInRequest;
    this.authenticationService.signIn(request);
  }
}
