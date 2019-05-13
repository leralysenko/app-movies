import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProjectManagerService } from '../project-manager.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  id: number;
  movie: any = {};
  constructor(
      private activateRoute: ActivatedRoute,
      private projectManager: ProjectManagerService
    ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    console.log(this.id);
    this.projectManager.getMoviesListItem(this.id).subscribe(value => {
      this.movie = value;
    });
  }

}
