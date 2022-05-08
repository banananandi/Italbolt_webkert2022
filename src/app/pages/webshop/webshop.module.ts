import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebshopRoutingModule } from './webshop-routing.module';
import { WebshopComponent } from './webshop.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    WebshopComponent
  ],
  imports: [
    CommonModule,
    WebshopRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ]
})
export class WebshopModule { }
