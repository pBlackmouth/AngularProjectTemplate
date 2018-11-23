import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppFirebaseModule } from './app-firebase/app-firebase.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppFirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
