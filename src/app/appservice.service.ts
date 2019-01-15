import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
logedin:boolean=false;
  constructor() { }
  logedIn()
  {
this.logedin=true;
  }
  IsLogedIn()
  {
return this.logedin;
  }
}
