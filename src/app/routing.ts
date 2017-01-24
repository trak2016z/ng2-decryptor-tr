import { Routes } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component'
import { EncryptPageComponent } from './encrypt-page/encrypt-page.component'
import { DecryptPageComponent } from './decrypt-page/decrypt-page.component'
import { NotFoundPageComponent } from './not-found-page/not-found-page.component'

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'encrypt', component: EncryptPageComponent},
  { path: 'decrypt/:id', component: DecryptPageComponent },
  { path: '**', component: NotFoundPageComponent }
];
