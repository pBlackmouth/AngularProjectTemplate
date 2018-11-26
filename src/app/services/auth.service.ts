import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { environment } from 'src/environments/environment';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
}
