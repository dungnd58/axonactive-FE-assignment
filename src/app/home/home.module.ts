import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HomeChartComponent } from './home-chart/home-chart.component';
import { HomeSelectionBoxComponent } from './home-selection-box/home-selection-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeChartComponent,
    HomeSelectionBoxComponent
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
