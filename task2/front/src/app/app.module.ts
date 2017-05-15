import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpService } from './service/http.service'; 
import { SearchService } from './service/search.service'; 

import { MdButtonModule, MdCheckboxModule, MdToolbarModule , MdMenuModule , MdIconModule , MdGridListModule } from '@angular/material';

import { RoutingModule } from './routing/routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CalculateModule } from './calculate/calculate.module';
import { FormModule } from './form/form.module';

//  MdButtonModule,
//     MdCheckboxModule,
//     MdToolbarModule,
//     MdMenuModule,
//     MdIconModule,
//     MdGridListModule,

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RoutingModule,
    DashboardModule,
    CalculateModule,
    FormModule
  ],
  providers: [HttpService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
