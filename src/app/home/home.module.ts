import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HomeComponent } from './home.component';
import { HomeChartComponent } from './home-chart/home-chart.component';
import { HomeSymbolComponent } from './home-symbol/home-symbol.component';
import { HomeChartService } from './home-chart/home-chart.service';
import { HomeSymbolService } from './home-symbol/home-symbol.service';
import { ChartTableComponent } from './home-chart/chart-table/chart-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeChartComponent,
    HomeSymbolComponent,
    ChartTableComponent
  ],
  providers: [HomeChartService,HomeSymbolService],
  bootstrap: []
})
export class HomeModule { }
