import { Component,OnInit } from '@angular/core';
import { ReposerviceService } from './reposervice.service';
import {IRepoResponse,IRepo} from './models/repo';
import { AppserviceService } from './appservice.service';
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
  retrivevalue:string;
  constructor(private resposiveservice:ReposerviceService,private service:AppserviceService  )
  {

  }
  ngOnInit()
 {
 
//  this.resposiveservice.getRepository().subscribe((repositoryread:IRepoResponse)=>
//  {
  

//  this.repository=repositoryread.items;

  
//  });
}
logedIn(){
  this.service.logedIn();
}
selectedvalue(txtvalue){
 alert(txtvalue);
}
}
