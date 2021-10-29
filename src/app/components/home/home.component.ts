import { MovieDBService } from './../../services/movie-db.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieFilter } from 'src/app/models/movieFilter';
import { MovieResult } from 'src/app/models/moveResult';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularMoviesResult : MovieResult = <MovieResult>{};
  topRatedMoviesResults: MovieResult = <MovieResult>{};

  popularMoviesFilter: MovieFilter = {};
  topRatedMoviesFilter: MovieFilter = {};

  constructor(private movieService: MovieDBService) { }

  ngOnInit(): void 
  {
    this.getPopularMovies();
    this.getTopRatedMovies();
  }

private async getPopularMovies()
{
  try
  {
    this.popularMoviesResult = await this.movieService.getPopularMovies(this.popularMoviesFilter);
  }
  catch(err)
  {
    const msg = `Error loading popular movies , Code : ${err}`;
    console.error(msg);
  }
}

  private async getTopRatedMovies() 
  {
    try
    {
      this.topRatedMoviesResults = await this.movieService.getTopRatedMovies(this.topRatedMoviesFilter);
    }
    catch(err)
    {
      const msg = `Error loading top rated movies , Code : ${err}`;
      console.log(msg)
    }
    
  }
}
