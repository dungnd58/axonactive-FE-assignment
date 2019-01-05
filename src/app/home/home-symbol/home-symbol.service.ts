import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiEndPoints } from 'src/app/config';
import { Observable } from 'rxjs';

@Injectable()
export class HomeSymbolService {
  constructor(private httpClient: HttpClient) {}

  getSymbols() : Observable<string[]> {
    return this.httpClient.get<string[]>(apiEndPoints.symbol.getSymbols);
  }
}