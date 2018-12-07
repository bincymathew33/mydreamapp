import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,combineLatest,Subject } from 'rxjs';
import {IRepoResponse} from './models/repo';
@Injectable({
  providedIn: 'root'
})
export class ReposerviceService {
  
  constructor(private http:HttpClient) { }
  getRepository():Observable<IRepoResponse>{
    return this.http.get<IRepoResponse>('https://api.github.com/search/repositories?q=javascript');
  }
}
