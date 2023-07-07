import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SensorData } from './line-chart.component';

export type ApiResponse = {
  data: {
    id: number;
    attributes: {
      value: number;
      date: string;
    };
  }[];
  meta: {
    pagination: {
      start: number;
      limit: number;
      total: number;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class LineChartService {
  sensorData: Object | null | undefined;

  constructor(private httpClient: HttpClient) { }

  getTemperatureData(sensorName: string) {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.authorizationToken);
    const params = {
      "filters[sensor][name][$eq]": "Strömung",
      "fields[0]": "value",
      "fields[1]": "date",
      "sort": "date:desc",
      //"pagination[limit]": 30,
    }
    return this.httpClient
    .get<ApiResponse>(environment.apiUrl + '/sensorvalues',{ headers, params })
      .pipe(
        map((response) => ([{
          name: 'Strömung',
          series: response.data.map(item => ({
            value: item.attributes.value,
            name: new Date(item.attributes.date)
          }))
        }]))
      );
    }
}
