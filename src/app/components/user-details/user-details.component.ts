import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private authSvc: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authSvc.logout();
  }

}
