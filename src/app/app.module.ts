import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {RoutesProvider} from './app.routes';
import {AuthService} from './auth.service';
import { User2Component } from './user2/user2.component';
import { User1Component } from './user1/user1.component'


@NgModule({
  declarations: [
    AppComponent,
    User2Component,
    User1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutesProvider
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }