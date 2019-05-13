import { Component, OnInit } from '@angular/core';
import { ProjectManagerService } from '../project-manager.service';
import { GenreType } from 'src/data/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public moviesList: any;
  public filteredMoviesList: any;
  public searchValue: string;
  public genreTypes: GenreType[] = Object.values(GenreType);
  public selectedGenreType: GenreType = GenreType.All;

  constructor(private projectManager: ProjectManagerService) { }

  public getMoviesList(): void {
    this.projectManager.getMoviesList().subscribe(value => {
      this.moviesList = value;
      this.filteredMoviesList = this.moviesList;
    });
  }

  public getFilteredMoviesList(): void {
    let filteredMoviesList = this.moviesList;

    filteredMoviesList = this.handleTextSearch(filteredMoviesList);
    filteredMoviesList = this.handleGenreSearch(filteredMoviesList);

    return filteredMoviesList;
  }

  public handleTextSearch(list) {
    return list.filter(el => {
      if (!this.searchValue) {
        return true;
      }

      return el.name.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }

  public handleGenreSearch(list) {
    return list.filter(el => {
      if (
        !this.selectedGenreType
        || this.selectedGenreType === GenreType.All
      ) {
        return true;
      }

      return el.genres.includes(this.selectedGenreType);
    });
  }

  public handleFieldChange(e) {
    this.filteredMoviesList = this.getFilteredMoviesList();
  }

  ngOnInit() {
    this.getMoviesList();

  }

}
