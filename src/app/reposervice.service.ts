import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,combineLatest,Subject } from 'rxjs';
import {IRepoResponse,IRepo} from './models/repo';
import {IUser} from './models/user';
@Injectable({
  providedIn: 'root'
})
export class ReposerviceService {
  
  constructor(private http:HttpClient) { }
  getUsers(txtvalue):Observable<IRepoResponse>{
    return this.http.get<IRepoResponse>('https://api.github.com/search/users?q='+txtvalue);
  }
 searchrepository(txtvalue):Observable<IRepoResponse>{
    return this.http.get<IRepoResponse>('https://api.github.com/search/repositories?q='+txtvalue);

  }
  getUserDetails(txtvalue):Observable<IUser>{
    return this.http.get<IUser>('https://api.github.com/users/'+txtvalue);
  }  
  getRepoDetails(txtvalue):Observable<IRepo>{
    return this.http.get<IRepo>('https://api.github.com/search/repositories?q='+txtvalue);
  } 
  }

