import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { environment } from 'src/environments/environment';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signInMode = false;
  phoneSignIn = false;

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  private getProviderInstance(provider: string) {
    let providerInstance;

    switch(provider) {
      case environment.providers.GOOGLE:
          providerInstance = new auth.GoogleAuthProvider();
          break;
        case environment.providers.FACEBOOK:
          providerInstance = new auth.FacebookAuthProvider();
          break;
        case environment.providers.TWITTER:
          providerInstance = new auth.TwitterAuthProvider();
          break;
        case environment.providers.GITHUB:
          providerInstance = new auth.GithubAuthProvider();
          break;
        default:
          providerInstance = new auth.GoogleAuthProvider();
          break;
    }

    return providerInstance;
  }

  signIn(mode: string, provider: string) {
    mode === environment.modes.POPUP  ? this.afAuth.auth.signInWithPopup(this.getProviderInstance(provider))
                                      : this.afAuth.auth.signInWithRedirect(this.getProviderInstance(provider));
  }

  signInOrSignUp( email: string, password: string) {    

    this.signInMode ? this.afAuth.auth.signInWithEmailAndPassword(email,password)
                    : this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signInAnonymously() {
    this.afAuth.auth
        .signInAnonymously()
        .then((userCredentials) => console.log(userCredentials));
  }  

  logout() {
    this.afAuth.auth.signOut();
  }

  togglePhoneSignIn() {
    this.phoneSignIn = !this.phoneSignIn;
  }

  toggleSignInMode() {
    this.signInMode = !this.signInMode;
  }
}
