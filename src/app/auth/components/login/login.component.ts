import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LogedIn:boolean;
Loggedinsucces:string;

  constructor(private service:AuthService, private router:Router) { }

  ngOnInit() {

  }
  myformsubmit(myform){
    this.LogedIn=this.service .login (myform.value.Username,myform.value.Password);
    if(this.LogedIn===true && this.service.userdetails.role=='user'){
      this.Loggedinsucces='success';
      this.router.navigateByUrl('/cartdetails');
    }
   else  if(this.LogedIn===true && this.service.userdetails.role=='admin'){
      this.Loggedinsucces='success';
      this.router.navigateByUrl('/list');
    }
else{
  this.Loggedinsucces='failed';
}
  }
}
