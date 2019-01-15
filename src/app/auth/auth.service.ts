import { Injectable } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLogedIn:boolean=false;
Isnormaluser:boolean=false;
IsAdminuser:boolean=false;
userdetails=null;
  constructor() { }
  users=[{
    username:'Bincy',
    password:'123',
    role:'user'

  },
  {
    username:'Merin',
    password:'123',
    role:'admin'
  }
  
]
login(username,password){
 
    const userFound = this.users.find(u => {
      return u.username === username && u.password === password
     });
     
     if(userFound){
      this.isLogedIn = true; 
      this.userdetails=userFound;
    
      return this.isLogedIn;
     } 
     else
     {
      this.isLogedIn = false; 
      return this.isLogedIn;
     } 
     if(userFound.username==='Bincy'){
  this.Isnormaluser=true;
     }
     if(userFound.username==='Merin'){
      this.IsAdminuser=true;
         }
}
}