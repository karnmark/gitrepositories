import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';
import { FavouriteItem } from '../store/models/favourite-item.model';

const API_URL = 'https://api.github.com/repositories';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor(private http: HttpClient) { }

  /* To fetch the public git repositories */
  public getGitRepositores(): Observable<FavouriteItem[]> {
    let repositories = this.http.get<FavouriteItem[]>(API_URL, {});
    return repositories;
  }

 /* To fetch the particular repository information */
  public getRepositoryInfo(data): Observable<any>{
    return this.http.get(data, {});
  }

  /* To fetch the contributors of a repository */
  public getContributors(data): Observable<any>{
    return this.http.get(data[0].contributors_url, {})
  }

}
