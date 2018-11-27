import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { WindowService } from 'src/app/services/window.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-phone-signin',
  templateUrl: './phone-signin.component.html',
  styleUrls: ['./phone-signin.component.scss']
})
export class PhoneSigninComponent implements OnInit, AfterViewInit {
  signPhoneForm: FormGroup;
  winRef: any;
  disableOTPSendButton = true;

  constructor(
    private commonSvc: CommonService,
    private fb: FormBuilder,
    private winSvc: WindowService,
    public afAuth: AngularFireAuth,
    public authSvc : AuthService

  ) { 
    this.signPhoneForm = fb.group({
      phoneNumber: ['', [Validators.required]],
      otp: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.winRef = this.winSvc.windowRef;
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
        .signInWithPhoneNumber(this.commonSvc.getFormValue(this.signPhoneForm,'phoneNumber'),this.winRef.recaptchaVerifier)
        .then((confirmationResult) => {
          this.winRef.confirmationResult = confirmationResult;
        });
  }

  verifyOTP() {
    this.winRef.confirmationResult
        .confirm(this.commonSvc.getFormValue(this.signPhoneForm,'otp'))
        .then((userCredentials) => console.log(userCredentials));
  } 



}
