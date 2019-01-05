import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HomeChartComponent } from './home-chart/home-chart.component';
import { HomeSymbolComponent } from './home-symbol/home-symbol.component';
import { HomeChartService } from './home-chart/home-chart.service';
import { HomeSymbolService } from './home-symbol/home-symbol.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeChartComponent,
    HomeSymbolComponent
  ],
  providers: [HomeChartService,HomeSymbolService],
  bootstrap: []
})
export class HomeModule { }
