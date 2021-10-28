import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieResult } from '../models/moveResult';
import { Movie } from '../models/movie.model';
import { MovieFilter } from '../models/movieFilter';


const baseUrl = 'http://image.tmdb.org/t/p/w500';
@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  getPopular: string = 'https://api.themoviedb.org/3/movie/popular'
  topRated: string = 'https://api.themoviedb.org/3/movie/top_rated';
  constructor(private httpClient: HttpClient) { }


  async getPopularMovies(movieFilter: MovieFilter) : Promise<MovieResult>
  {
    let params =  new HttpParams();
    params.append('language' , movieFilter.language ? movieFilter.language : 'en-EN');
    params.append('page', movieFilter.page && movieFilter.page !== 0 ? movieFilter.page : 1);
    const movies = await this.httpClient.get<MovieResult>(this.getPopular, { params : params}).toPromise();
    this.setupPosterMovieImageUrl(movies.results);
    return movies;
  }

  async getTopRatedMovies(movieFilter: MovieFilter) : Promise<MovieResult>
  {
    let params =  new HttpParams();
    params.append('language' , movieFilter.language ? movieFilter.language : 'en-EN');
    params.append('page', movieFilter.page && movieFilter.page !== 0 ? movieFilter.page : 1);
    const movies  = await this.httpClient.get<MovieResult>(this.topRated, { params : params}).toPromise();
    this.setupPosterMovieImageUrl(movies.results);
    return movies
  }

  
  private setupPosterMovieImageUrl(movies: Movie [])
  {
    if(movies.length > 0)
    {
      movies.forEach( m => m.imageUrl = `${baseUrl}${m.poster_path}`);
    }
  }
}
