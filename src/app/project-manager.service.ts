import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getMoviesList(): Observable<any> {
    return this.http.get(`${this.url}/movies`, httpOptions);
  }

  getMoviesListItem(id: number): Observable<any> {
    return this.http.get(`${this.url}/movies/${id}`, httpOptions);
  }
}
