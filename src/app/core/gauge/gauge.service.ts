import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

export type ApiResponse = [
  {
    name: string;
    value: number;
    date: Date;
  }
];

@Injectable({
  providedIn: 'root'
})
export class GaugeService {

  constructor(private httpClient: HttpClient) { }

  getCurrentData() {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.authorizationToken);

    return this.httpClient
    .get<ApiResponse>(environment.apiUrl + '/gauge-value',{ headers})
    .pipe(
      map((response)=> ([{
        name: response[0].name,
        value: response[0].value,
        date: new Date(response[0].date),
      }]))
    );
  }
}
