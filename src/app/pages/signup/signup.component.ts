import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignUpRequest} from "../../model/request/sign-up-request";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent {

  formRequest: FormGroup;

  constructor(private authenticationService: AuthenticationService) {
    this.formRequest = new FormGroup({
      username: new FormControl(null, [ Validators.required ]),
      fullName: new FormControl(null, [ Validators.required ]),
      email: new FormControl(null, [ Validators.required ]),
      password: new FormControl(null, [ Validators.required ]),
    });
  }

  register() {
    const signupRequest: SignUpRequest = this.formRequest.value as SignUpRequest;
    this.authenticationService.signUp(signupRequest)
  }

}
