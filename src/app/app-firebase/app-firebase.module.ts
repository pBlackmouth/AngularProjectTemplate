import { NgModule } from '@angular/core';
import { environment } from './../../environments/environment';
import { AngularFireModule } from 'angularfire2';


@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [

  ],

})
export class AppFirebaseModule { }
