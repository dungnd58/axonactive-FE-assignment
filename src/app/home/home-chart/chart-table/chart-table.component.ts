import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../home-chart.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.scss'],
  providers: [DatePipe]
})
export class ChartTableComponent implements OnInit {
  @Input() quotes: Quote[];
  lineChartData:Array<any> = [
    {data: [], label: 'Price'},
    {data: [], label: 'Ask'},
    {data: [], label: 'Bid'}
  ];
  lineChartLabels:Array<any> = [];
  lineChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false
  };
  lineChartColors:Array<any> = [
    { // blue info
      borderColor: '#5bc0de',
      pointBorderColor: '#fff',
      pointHoverBorderColor: '#5bc0de',
      fill: false
    },
    { // green success
      borderColor: '#5cb85c',
      pointBorderColor: '#fff',
      pointHoverBorderColor: '#5cb85c',
      fill: false
    },
    { // red danger
      borderColor: '#d9534f',
      pointBorderColor: '#fff',
      pointHoverBorderColor: '#d9534f',
      fill: false
    }
  ];
  lineChartLegend:boolean = true;
  lineChartType:string = 'line';

  constructor(private _DatePipe: DatePipe) { }

  ngOnInit() {
    this.prepareData();
  }

  formatDateTime(date: Date) {
    return this._DatePipe.transform(date, ' hh:mm dd-MM-yy');
  }

  prepareData() {
    //get data in only 1 hour until now
    // let now = new Date();
    // let beforeOneHour = new Date();
    // beforeOneHour.setHours(now.getHours() - 1);

    // let currentQuotes = this.quotes.filter(quote => {
    //   let quoteDate = new Date(quote.timestamp);
    //   return quoteDate >= beforeOneHour && quoteDate <= now;
    // });

    // console.log(currentQuotes);
    let currentQuotes = this.quotes;

    this.lineChartData[0].data = currentQuotes.map(quote => quote.price);
    this.lineChartData[1].data = currentQuotes.map(quote => quote.ask);
    this.lineChartData[2].data = currentQuotes.map(quote => quote.bid);
    this.lineChartLabels = currentQuotes.map(quote => this.formatDateTime(new Date(quote.timestamp)));
  }
}
