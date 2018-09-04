import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module'
import { DashboardComponent } from './dashboard/dashboard.component';
import { OffersListComponent } from './components/offers-list/offers-list.component';
import { OffersDatatableComponent } from './components/offers-datatable/offers-datatable.component';
//import { OffersDatatableDataSource } from './components/offers-datatable/offers-datatable-datasource';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, OffersListComponent, OffersDatatableComponent, 
    ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
