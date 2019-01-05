import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiEndPoints } from 'src/app/config';
import { Quote, MarketStatus, Quota } from './home-chart.model';
import { Observable } from 'rxjs';

@Injectable()
export class HomeChartService {
  @Output() 
  resetChart: EventEmitter<any> = new EventEmitter<any>();

  constructor(private httpClient: HttpClient) {}

  getQuotes(pairs: string): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(apiEndPoints.chart.getQuotes(pairs));
  }

  getMarketStatus(): Observable<MarketStatus> {
    return this.httpClient.get<MarketStatus>(apiEndPoints.chart.getMarketStatus);
  }

  getQuota(): Observable<Quota> {
    return this.httpClient.get<Quota>(apiEndPoints.chart.getQuota);
  }
}