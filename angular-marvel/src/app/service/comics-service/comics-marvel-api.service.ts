import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComicsModel } from 'src/app/models/comics-model/comics-model';

@Injectable({
  providedIn: 'root'
})
export class ComicsMarvelApiService {

  private readonly public_key = '03515c700ca3a1098ce6be6e4b7d1994';

  private readonly hash = '1e0c07108cc2aad165f15194ff56f592';
  
  private readonly timeStamp = '1643167202';

  private readonly env = environment;

  constructor(private http: HttpClient) { }


  getComics(): Observable<any> {
    return this.http.get<any>(`${this.env.apiMarvel}/v1/public/comics?ts=${this.timeStamp}&apikey=${this.public_key}&hash=${this.hash}`)
    .pipe(map((data: ComicsModel) => data.data.results));

  }

  getComicsByTitleStartsWith(title: string): Observable<any> {
    return this.http.get<any>(`${this.env.apiMarvel}/v1/public/comics?ts=${this.timeStamp}&apikey=${this.public_key}&hash=${this.hash}&titleStartsWith=${title}`)
    .pipe(map((data: ComicsModel) => data.data.results));

  }

  AddComics(limit: number): Observable<any> {
    return this.http.get<any>(`${this.env.apiMarvel}/v1/public/comics?ts=${this.timeStamp}&apikey=${this.public_key}&hash=${this.hash}&limit=${limit}`)
    .pipe(map((data: ComicsModel) => data.data.results))

  }
}
