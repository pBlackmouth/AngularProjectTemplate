import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppFirebaseModule } from './app-firebase/app-firebase.module';

import { AppComponent } from './app.component';
import { WindowService } from './services/window.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppFirebaseModule
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
