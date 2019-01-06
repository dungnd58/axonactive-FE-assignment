import { Component, OnInit } from '@angular/core';
import { HomeChartService } from './home-chart.service';
import { Quote, Quota, MarketStatus } from './home-chart.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-chart',
  templateUrl: './home-chart.component.html',
  styleUrls: ['./home-chart.component.scss']
})
export class HomeChartComponent implements OnInit {
  quota: Quota;
  marketStatus: MarketStatus;
  quotes: Quote[];

  isQuotaLoading: boolean;
  isMarketLoading: boolean;
  isQuotesLoading: boolean;
  isConvertLoading: boolean;

  currentSymbols: string;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private _ChartService: HomeChartService) {
    _ChartService.resetChart.pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      this.currentSymbols = data;
      this.getMarketStatus();
      this.getQuotes();
      this.getQuota();
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getMarketStatus() {
    this.isMarketLoading = true;
    this._ChartService.getMarketStatus().subscribe(
      data => {
        this.marketStatus = data;
        this.isMarketLoading = false;
      },
      error => {
        this.isMarketLoading = false;
      }
    )
  }

  getQuotes() {
    this.isQuotesLoading = true;
    let pairs = this.currentSymbols;
    this._ChartService.getQuotes(pairs).subscribe(
      data => {
        this.quotes = data;
        this.isQuotesLoading = false;
      },
      error => {
        this.isQuotesLoading = false;
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
        this.isQuotaLoading = false;
      }
    )
  }
}
