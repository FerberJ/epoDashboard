import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Sensor = {
  id: number;
  attributes: Attributes;
};

export type Attributes = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  epoints: Epoints;
};

export type Epoints = {
  data: Daum[];
};

export type Daum = {
  id: number;
  attributes: Attributes2;
};

export type Attributes2 = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  value: number;
  date: any;
};

@Injectable({
  providedIn: 'root',
})
export class SensorDataService {
  constructor(private httpClient: HttpClient) {}

  getSensorData(): Observable<Sensor[]> {
    const config = {
      headers: {
        Authorization:
          'Bearer ' +
          '505e71f18ae72f4c18733cd1e6e3ca48e5b5eb92428a31021df669cc7621ce60693f2c5125481937e231af9b32138099d9e0bf8d7064c6b2c7579ef3585c5ee8c5fba544fc74d8e795f178c4a98c5e04392b1f8bf7f90488e4ff0663f62a46786fb72a4631b1a869a29e3a7c54f7c6ba0d407292d09103913447635d6c5a32bb',
      },
      params: {
        query: 'example query', // Add your query parameter here
      },
    };

    const headers = new HttpHeaders().set(
      'Authorization',
      'bearer f82fa6aa094f9b642244e79f27170954b456620d47b0d2bf6a2cc3de5bec80f31ee1e7d2ccb0e297771cb88bc2338994971732e1d8bb9f26ffca8a090033ba86cd51cdb566997c9fd6ee3a150a2c567a63a47d87762bb24a82e1c9456abdecd66c6a643b9d2b7dd028244e5744d1504a8ae450ff94a4266bac9d373ca0cb819d '
    );

    const params = {
      populate: '*',
      filters: 'filters[sensor][name][$eq]=Strömung'
    };
    return this.httpClient.get<Sensor[]>(
      'https://epo.pettinaro.xyz/api/epoints',
      { headers, params }
    );
  }
}
