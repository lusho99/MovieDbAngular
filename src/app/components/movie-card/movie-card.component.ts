import { MovieDBService } from './../../services/movie-db.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie = {} as Movie;

  constructor() { }

  ngOnInit(): void {

  }

}
