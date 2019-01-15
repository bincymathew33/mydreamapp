import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ReposerviceService } from '../../reposervice.service';
import {IRepoResponse,IRepo} from '../../models/repo';
import {IUser} from '../../models/user';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit 
{
  repository:IRepo[];
  userdetail:IUser;
  
  constructor(private route:ActivatedRoute ,private service:ReposerviceService) { }
 
 
  ngOnInit() {
   const userid= this.route.snapshot.paramMap.get('userid');
   this.service.getUserDetails(userid).subscribe((userread:IUser)=>
  {
  
   
 this.userdetail=userread;
 
   
  });
  }

}
