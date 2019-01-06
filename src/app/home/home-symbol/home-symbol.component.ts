import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeSymbolService } from './home-symbol.service';
import { HomeChartService } from '../home-chart/home-chart.service';

@Component({
  selector: 'app-home-symbol',
  templateUrl: './home-symbol.component.html',
  styleUrls: ['./home-symbol.component.scss']
})
export class HomeSymbolComponent implements OnInit {
  currentSymbols: string[];
  symbols: string[];
  isLoading: boolean;

  constructor(private _SymbolService: HomeSymbolService,
    private _ChartService: HomeChartService) { }

  ngOnInit() {
    this.currentSymbols = [];
    this.getSymbols();
  }

  getSymbols() {
    this.isLoading = true;
    this._SymbolService.getSymbols().subscribe(
      data => {
        this.isLoading = false;
        this.symbols = data;
        this.currentSymbols.push(this.symbols[0]);
        let params = this.currentSymbols.join(',');
        this._ChartService.resetChart.emit(params);
      },
      error => {
        this.isLoading = false;
      }
    )
  }

  selectSymbol(e: any) {
    let params = this.currentSymbols.join(',');
    this._ChartService.resetChart.emit(params);
  }
}
