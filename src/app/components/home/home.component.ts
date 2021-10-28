import { MovieDBService } from './../../services/movie-db.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularMovies: Movie[] = []
  topRatedMovies: Movie[] = []
  constructor(private movieService: MovieDBService) { }

  ngOnInit(): void {
    this.getPopularMovies()
    this.getTopRatedMovies()
  }

getPopularMovies(){
  this.movieService.getPopularMovies()
      .then(async res => {
        this.popularMovies = await res.results;
        console.log(this.popularMovies)
      })
      .catch(err => {
        console.log(err)
      });
}

getTopRatedMovies() {
  this.movieService.getTopRatedMovies()
    .then(async res => {
      this.topRatedMovies = await res.results
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}
}
