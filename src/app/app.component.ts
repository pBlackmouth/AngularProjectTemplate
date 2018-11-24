import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  signUpForm: FormGroup;
  signInMode = false;

  constructor(
    public afAuth: AngularFireAuth,
    private fb: FormBuilder
  ) {
    this.signUpForm = fb.group({
      email: ['', [ Validators.required ]],
      password: ['', [ Validators.required ]]
    })
  }

  ngOnInit() {
    this.afAuth.authState
        .subscribe((user) => {
          console.log(user);
        });
  }

  googleSignInViaPopup() {
    this.afAuth.auth
        .signInWithPopup(new auth.GoogleAuthProvider())
        .then((userCredentials) => console.log(userCredentials));
  }

  googleSignInViaRedirect() {
    this.afAuth.auth
        .signInWithRedirect(new auth.GoogleAuthProvider())
        .then((userCredentials) => console.log(userCredentials));
  }

  facebookSignInViaPopup() {
    this.afAuth.auth
        .signInWithPopup(new auth.FacebookAuthProvider())
        .then((userCredentials) => console.log(userCredentials));
  }

  facebookSignInViaRedirect() {
    this.afAuth.auth
        .signInWithRedirect(new auth.FacebookAuthProvider())
        .then((userCredentials) => console.log(userCredentials));
  }

  twitterSignInViaPopup() {
    this.afAuth.auth
        .signInWithPopup(new auth.TwitterAuthProvider())
        .then((userCredentials) => console.log(userCredentials));
  }

  twitterSignInViaRedirect() {
    this.afAuth.auth
        .signInWithRedirect(new auth.TwitterAuthProvider())
        .then((userCredentials) => console.log(userCredentials));
  }

  githubSignInViaPopup() {
    this.afAuth.auth
        .signInWithPopup(new auth.GithubAuthProvider())
        .then((userCredentials) => console.log(userCredentials));
  }

  githubSignInViaRedirect() {
    this.afAuth.auth
        .signInWithRedirect(new auth.GithubAuthProvider())
        .then((userCredentials) => console.log(userCredentials));
  }

  signInAnonymously() {
    this.afAuth.auth
        .signInAnonymously()
        .then((userCredentials) => console.log(userCredentials));
  }  

  signInOrSignUp() {
    let email = this.getFormValue('email');
    let password = this.getFormValue('password');

    this.signInMode ? this.afAuth.auth.signInWithEmailAndPassword(email,password)
                    : this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  toggleSignInMode() {
    this.signInMode = !this.signInMode;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getFormValue( controlName: string) {
    let value = null;

    if(this.signUpForm)
      value = this.signUpForm.get(controlName).value;

    return value;
  }

}
