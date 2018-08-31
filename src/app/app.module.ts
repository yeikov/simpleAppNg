import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from './app.service';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './user/detail.component';
import { UserAddComponent } from './user/user-add.component';
import { UserService } from './user/user.service';

// offers center
import { CenterComponent } from './offer/center/center.component';
import { CenterAddComponent } from './offer/center/center-add.component';
import { CentersComponent } from './offer/center/centers.component';
import { CenterService } from './offer/center/center.service';


import { AppRoutingModule } from './app-routing.module';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    UserAddComponent,
    DetailComponent,
    CentersComponent,
    CenterComponent,
    CenterAddComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService, UserService, CenterService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
