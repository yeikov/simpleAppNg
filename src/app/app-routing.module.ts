import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
/* import { UserDetailComponent } from './user/user-detail.component'; */

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent},
 { path: 'login', component: LoginComponent},
 /*  { path: 'detail/:id', component: UserDetailComponent }, */
  { path: 'users', component: UserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
