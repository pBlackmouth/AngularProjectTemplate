import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.scss']
})
export class SigninSignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private commonSvc: CommonService,
    private fb: FormBuilder,
    public authSvc: AuthService
  ) { 

    this.signUpForm = fb.group({
      email: ['', [ Validators.required ]],
      password: ['', [ Validators.required ]]
    });
    
  }

  ngOnInit() {
  }

  signInOrSignUp() {
    let email = this.commonSvc.getFormValue(this.signUpForm, 'email');
    let password = this.commonSvc.getFormValue(this.signUpForm, 'password');
    
    this.authSvc.signInOrSignUp(email, password);
  }

}
