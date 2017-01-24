import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { appRoutes } from './routing'
import { firebaseConfig } from '../consts/firebase'
import { HomePageComponent } from './home-page/home-page.component'
import { EncryptPageComponent } from './encrypt-page/encrypt-page.component'
import { DecryptPageComponent } from './decrypt-page/decrypt-page.component'
import { NotFoundPageComponent } from './not-found-page/not-found-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    EncryptPageComponent,
    DecryptPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
