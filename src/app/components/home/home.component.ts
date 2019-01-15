import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ReposerviceService } from '../../reposervice.service';
import {IRepoResponse,IRepo} from '../../models/repo';
import {IUser} from '../../models/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
inputvalue:string;
repository:IRepo[];
users:IRepo[];
activeindex:'users';


  constructor(private service:ReposerviceService) {

   }

  ngOnInit() {
    
  }
@Input()
resvalue:any;

@Output()
output:EventEmitter<string>=new EventEmitter<string>();
userclick(txtvalue,users){
  this.activeindex=users;
  this.service.getUsers(txtvalue).subscribe((userread:IRepoResponse)=>
  {
   
 
  this.users=userread.items;
 
   
  });
}
repoclick(txtvalue,repo){
  this.activeindex=repo;
  this.service.searchrepository(txtvalue).subscribe((repositoryread:IRepoResponse)=>
  {
   
 
  this.repository=repositoryread.items;
 
   
  });
}

}
