import { Component, OnInit } from '@angular/core';
import { auth } from "firebase";
import { AngularFireAuth } from "angularfire2/auth";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { WindowService } from './services/window.service';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    public afAuth: AngularFireAuth,
    public authSvc: AuthService
  ) {}

  ngOnInit() {
    this.afAuth.authState
        .subscribe((user) => {
          console.log(user);
        });       
  }

  

  
  

  
  
  
  
  

 

  

}
