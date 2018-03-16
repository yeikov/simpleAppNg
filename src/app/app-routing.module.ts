import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { DetailComponent } from './user/detail.component';
import { UserAddComponent } from './user/user-add.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
/* import { UserDetailComponent } from './user/user-detail.component'; */

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent},
 { path: 'login', component: LoginComponent},
 { path: 'users/add', component: UserAddComponent },
 { path: 'users/:id', component: DetailComponent },
 { path: 'users', component: UserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
