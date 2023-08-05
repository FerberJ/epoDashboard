import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { GaugeService } from './gauge.service';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent {
  public data: any[] = [];
  public isRunning: boolean = false;

  private dataSubscription: Subscription | undefined;

  constructor(private gaugeService: GaugeService,) { }

  ngOnInit(): void {
    this.dataSubscription = this.gaugeService
    .getCurrentData()
    .subscribe((data: any) => {
      this.data = data;
      this.isRunning = (new Date().getTime() - data[0].date.getTime()) <= 60000;
    });

     
    interval(5000).subscribe(() => {
      this.dataSubscription = this.gaugeService
        .getCurrentData()
        .subscribe((data: any) => {
          this.data = data;
          this.isRunning = (new Date().getTime() - data[0].date.getTime()) <= 60000;
        });
      });
    
      
  }
}
