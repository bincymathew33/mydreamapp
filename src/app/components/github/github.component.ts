import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ReposerviceService } from '../../reposervice.service';
import {IRepoResponse,IRepo} from '../../models/repo';
import {IUser} from '../../models/user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit 
{

  repository:IRepo;
  userdetail:IUser;
  constructor(private route:ActivatedRoute ,private service:ReposerviceService) { }
 
 
  ngOnInit() {
   const userid= this.route.snapshot.paramMap.get('githubid');
   this.service.getRepoDetails(userid).subscribe((reporead:IRepo)=>
  {
  
   
 this.repository=reporead;
 
   
  });
}
}
