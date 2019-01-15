import { NgModule } from '@angular/core';

import {RouterModule, Routes, ROUTES} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';
import { CartdetailsComponent } from './cart/components/cartdetails/cartdetails.component';
import {AuthGuard} from './auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { GithubComponent } from './components/github/github.component';
const route :Routes = [{
  path:'about/:itemid',
  component:AboutComponent
},
{
  path:'home',
  component:HomeComponent,
  
},
{
  path:'list',
  data:{
    role:'admin'
  },
  canActivate:[AuthGuard],
  component:ListComponent
},
{
path:'',
component:LoginComponent,
pathMatch:'full'
},
{
  path:'cartdetails',
  data:{
role:'user'
  },
  canActivate:[AuthGuard],
  component:CartdetailsComponent
  
},
{
  path:'github',
  loadChildren:'./github/github.module#GithubModule'
},
{
  path:'userdetails/:userid',
  component:DetailsComponent
},
{
  path: 'githubdetail/:githubid',
  component: GithubComponent
},

];
@NgModule({
  imports: [
    RouterModule.forRoot(route), 
    
  ],
  exports:[
    RouterModule
  ]
 
})
export class ApprouterModule { }
