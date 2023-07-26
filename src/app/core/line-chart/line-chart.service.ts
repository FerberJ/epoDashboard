import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SensorData } from './line-chart.component';

export type ApiResponse = [
  {
    name: string;
    series: [
      {
        value: number;
        name: Date;
      }
    ];
  }
];

@Injectable({
  providedIn: 'root'
})
export class LineChartService {
  sensorData: Object | null | undefined;

  constructor(private httpClient: HttpClient) { }

  getTemperatureData() {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.authorizationToken);
    
    return this.httpClient
    .get<ApiResponse>(environment.apiUrl + '/charts-values',{ headers})
      .pipe(
        map((response) => ([{
          name: response[0].name,
          series: response[0].series.map(item => ({
            value: item.value,
            name: new Date(item.name)
          }))
        }]))
      );
    }
}
