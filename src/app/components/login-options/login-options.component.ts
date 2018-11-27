import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.component.html',
  styleUrls: ['./login-options.component.scss']
})
export class LoginOptionsComponent implements OnInit {

  providers = environment.providers;
  modes = environment.modes;



  constructor(
    public authSvc: AuthService
  ) { }

  ngOnInit() {
  }

  signInWithModeAndProvider(mode: string, provider: string) {
    this.authSvc.signIn(mode,provider);
  }

  signInAnonymously() {
    this.authSvc.signInAnonymously();
  }  
  
  

  

}
