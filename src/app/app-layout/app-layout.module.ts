import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSigninSignupComponent } from './components/navbar-signin-signup/navbar-signin-signup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarSigninSignupComponent
  ],
  exports: [
    NavbarSigninSignupComponent
  ]
})
export class AppLayoutModule { }
