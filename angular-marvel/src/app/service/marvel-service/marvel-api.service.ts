import { CharactersModel } from './../../models/characters-model/characters.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private readonly public_key = '03515c700ca3a1098ce6be6e4b7d1994';

  private readonly hash = '1e0c07108cc2aad165f15194ff56f592';
  
  private readonly timeStamp = '1643167202';

  private readonly env = environment;

  constructor(private http: HttpClient) { }


  getCharacters(): Observable<any> {
    return this.http.get<any>(`${this.env.apiMarvel}/v1/public/characters?ts=${this.timeStamp}&apikey=${this.public_key}&hash=${this.hash}`)
    .pipe(map((data: CharactersModel) => data.data.results))

  }
}
