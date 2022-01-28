import { SeriesModel } from './../../models/series-model/series.model';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesMarvelApiService {

  private readonly public_key = '03515c700ca3a1098ce6be6e4b7d1994';

  private readonly hash = '1e0c07108cc2aad165f15194ff56f592';
  
  private readonly timeStamp = '1643167202';

  private readonly env = environment;

  constructor(private http: HttpClient) { }


  getSeries(): Observable<any> {
    return this.http.get<any>(`${this.env.apiMarvel}/v1/public/series?ts=${this.timeStamp}&apikey=${this.public_key}&hash=${this.hash}`)
    .pipe(map((data: SeriesModel) => data.data.results));

  }

  getSeriesByTitleStartsWith(title: string): Observable<any> {
    return this.http.get<any>(`${this.env.apiMarvel}/v1/public/series?ts=${this.timeStamp}&apikey=${this.public_key}&hash=${this.hash}&titleStartsWith=${title}`)
    .pipe(map((data: SeriesModel) => data.data.results));

  }

  getAddSeries(limit: number): Observable<any> {
    return this.http.get<any>(`${this.env.apiMarvel}/v1/public/series?ts=${this.timeStamp}&apikey=${this.public_key}&hash=${this.hash}&limit=${limit}`)
    .pipe(map((data: SeriesModel) => data.data.results))

  }
}
