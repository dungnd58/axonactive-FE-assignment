import { Component, OnInit } from '@angular/core';
import { HomeSymbolService } from './home-symbol.service';
import { HomeChartService } from '../home-chart/home-chart.service';

@Component({
  selector: 'app-home-symbol',
  templateUrl: './home-symbol.component.html',
  styleUrls: ['./home-symbol.component.scss']
})
export class HomeSymbolComponent implements OnInit {
  currentSymbol: string;
  symbols: string[];
  isLoading: boolean;

  constructor(private _SymbolService: HomeSymbolService,
    private _ChartService: HomeChartService) { }

  ngOnInit() {
    this.getSymbols();
  }

  getSymbols() {
    this.isLoading = true;
    this._SymbolService.getSymbols().subscribe(
      data => {
        this.isLoading = false;
        this.symbols = data;
        this.currentSymbol = this.symbols[0];
        this._ChartService.resetChart.emit(this.currentSymbol);
      },
      error => {
        this.isLoading = false;
      }
    )
  }

  selectSymbol(e: any) {
    this._ChartService.resetChart.emit(this.currentSymbol);
  }
}
