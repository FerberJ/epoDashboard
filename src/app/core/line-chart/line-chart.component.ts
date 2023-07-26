import { Component, OnInit } from '@angular/core';
import {
  Subscription,
  interval,
  merge,
} from 'rxjs';
import { LineChartService } from './line-chart.service';


export type SensorData = Root2[]

export interface Root2 {
  name: string
  series: Series[]
}

export interface Series {
  name: number
  value: Date
}



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  // Chart data
  public data: any[] = [];// | undefined;


  private dataSubscription: Subscription | undefined;
  

  constructor(
    private lineChartService: LineChartService,
  ) {}

  ngOnInit(): void {

    interval(10000).subscribe(() => {
    this.dataSubscription = this.lineChartService
      .getTemperatureData()
      .subscribe((data: any) => {
        this.data = data;
        

        console.log(data);
      });
    });
    

  }

}
