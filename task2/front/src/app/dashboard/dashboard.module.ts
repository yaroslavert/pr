import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, DashboardDetailComponent]
})
export class DashboardModule { }
