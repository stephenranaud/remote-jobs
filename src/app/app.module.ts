import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationsModule } from './navigations/navigations.module';
import { Page404Component } from './page404/page404.component';
import { JobsModule } from './jobs/jobs.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationsModule,
    HttpClientModule,
    JobsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
