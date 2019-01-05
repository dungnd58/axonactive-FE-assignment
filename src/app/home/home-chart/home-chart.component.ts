import { Component, OnInit } from '@angular/core';
import { HomeChartService } from './home-chart.service';
import { Quote, Quota, MarketStatus, ConversionResult } from './home-chart.model';

@Component({
  selector: 'app-home-chart',
  templateUrl: './home-chart.component.html',
  styleUrls: ['./home-chart.component.scss']
})
export class HomeChartComponent implements OnInit {
  quota: Quota;
  marketStatus: MarketStatus;
  quote: Quote[];
  conversionResult: ConversionResult;

  isQuotaLoading: boolean;
  isMarketLoading: boolean;
  isQuoteLoading: boolean;
  isConvertLoading: boolean;

  currentSymbol: string;

  constructor(private _ChartService: HomeChartService) {
    this._ChartService.resetChart.subscribe(data => {
      this.currentSymbol = data;
    })
  }

  ngOnInit() {
    //this.getMarketStatus();
    // this.getQuotes();
    // this.getConvert();
    //this.getQuota();
  }

  getMarketStatus() {
    this.isMarketLoading = true;
    this._ChartService.getMarketStatus().subscribe(
      data => {
        this.marketStatus = data;
        this.isMarketLoading = false;
      },
      error => {
        console.log('Something wrong');
        this.isMarketLoading = false;
      }
    )
  }

  getQuotes() {
    let pairs = "EURUSD,GBPJPY,AUDUSD";
    this._ChartService.getQuotes(pairs).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log('Something wrong');
      }
    )
  }

  getConvert() {
    let params = {
      from: "USD",
      to: "EUR",
      quantity: 100
    }
    this._ChartService.getConvert(params).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log('Something wrong');
      }
    )
  }

  getQuota() {
    this.isQuotaLoading = true;
    this._ChartService.getQuota().subscribe(
      data => {
        this.quota = data;
        this.isQuotaLoading = false;
      },
      error => {
        console.log('Something wrong');
        this.isQuotaLoading = false;
      }
    )
  }
}
