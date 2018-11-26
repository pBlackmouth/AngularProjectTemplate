import { Component, OnInit, AfterViewInit } from '@angular/core';

import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { WindowService } from './services/window.service';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  signUpForm: FormGroup;
  signPhoneForm: FormGroup;
  signInMode = false;
  phoneSignIn = true;
  winRef: any;
  disableOTPSendButton = true;
  providers = environment.providers;
  modes = environment.modes;

  constructor(
    public afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private winSvc: WindowService,
    private authSvc: AuthService
  ) {
    this.signUpForm = fb.group({
      email: ['', [ Validators.required ]],
      password: ['', [ Validators.required ]]
    });

    this.signPhoneForm = fb.group({
      phoneNumber: ['', [Validators.required]],
      otp: ['', [Validators.required]]
    });

    this.winRef = this.winSvc.windowRef;
  }

  ngOnInit() {
    this.afAuth.authState
        .subscribe((user) => {
          console.log(user);
        });       
  }

  ngAfterViewInit() {

    // if(this.phoneSignIn){
      this.winRef.recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container',{
        size: 'normal',
        callback: (response) => {
          console.log("Recaptcha response: ",response);
          this.disableOTPSendButton = false;
        }
      });

      this.winRef.recaptchaVerifier.render();
    // }
  }

  sendOTP() {
    this.afAuth.auth
        .signInWithPhoneNumber(this.getFormValue(this.signPhoneForm,'phoneNumber'),this.winRef.recaptchaVerifier)
        .then((confirmationResult) => {
          this.winRef.confirmationResult = confirmationResult;
        });
  }

  verifyOTP() {
    this.winRef.confirmationResult
        .confirm(this.getFormValue(this.signPhoneForm,'otp'))
        .then((userCredentials) => console.log(userCredentials));
  }

  signInWithModeAndProvider(mode: string, provider: string) {
    this.authSvc.signIn(mode,provider);
  }
  

  signInAnonymously() {
    this.afAuth.auth
        .signInAnonymously()
        .then((userCredentials) => console.log(userCredentials));
  }  

  signInOrSignUp() {
    let email = this.getFormValue(this.signUpForm, 'email');
    let password = this.getFormValue(this.signUpForm, 'password');

    this.signInMode ? this.afAuth.auth.signInWithEmailAndPassword(email,password)
                    : this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  toggleSignInMode() {
    this.signInMode = !this.signInMode;
  }

  togglePhoneSignIn() {
    this.phoneSignIn = !this.phoneSignIn;
  }

  

  logout() {
    this.afAuth.auth.signOut();
  }

  getFormValue(formGroup:FormGroup, controlName: string) {
    let value = null;

    if(this.signUpForm)
      value = formGroup.get(controlName).value;

    return value;
  }

}
