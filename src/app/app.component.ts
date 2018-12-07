import { Component,OnInit } from '@angular/core';
import { ReposerviceService } from './reposervice.service';
import {IRepoResponse,IRepo} from './models/repo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  repository:IRepo[];
  myprop:string;
  newprop:string;
  constructor(private resposiveservice:ReposerviceService  )
  {

  }
  ngOnInit()
 {
 
 this.resposiveservice.getRepository().subscribe((repositoryread:IRepoResponse)=>
 {
  

 this.repository=repositoryread.items;

  
 });
}
}
