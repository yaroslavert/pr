import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routing } from './routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }
