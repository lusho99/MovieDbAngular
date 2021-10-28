import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from 'src/models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  getPopular: string = 'https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1'

  constructor(private httpClient: HttpClient) { }


  getPopularMovies(){
    return this.httpClient.get<any>(this.getPopular).toPromise();
  }

  getTopRatedMovies() {
    return this.httpClient.get<any>('https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1').toPromise()
  }
}
