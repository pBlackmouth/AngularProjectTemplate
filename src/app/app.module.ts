import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppFirebaseModule } from './app-firebase/app-firebase.module';

import { AppComponent } from './app.component';
import { WindowService } from './services/window.service';
import { AuthService } from './services/auth.service';
import { LoginOptionsComponent } from './components/login-options/login-options.component';
import { SigninSignupComponent } from './components/signin-signup/signin-signup.component';
import { PhoneSigninComponent } from './components/phone-signin/phone-signin.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CommonService } from './services/common.service';
import { NavbarSigninSignupComponent } from './app-layout/components/navbar-signin-signup/navbar-signin-signup.component';
import { AppLayoutModule } from './app-layout/app-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginOptionsComponent,
    SigninSignupComponent,
    PhoneSigninComponent,
    UserDetailsComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppFirebaseModule,
    AppLayoutModule
  ],
  providers: [WindowService, AuthService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
