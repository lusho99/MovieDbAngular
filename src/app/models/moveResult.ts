import { Movie } from "./movie.model";

export interface MovieResult 
{
    page: number;
    results: Movie [];
    total_pages : number;
    total_results: number;
}