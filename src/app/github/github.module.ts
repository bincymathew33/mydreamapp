import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, ROUTES} from '@angular/router';

import { ListComponent } from '../components/list/list.component';
 import { GithubcomponentComponent } from './githubcomponent/githubcomponent.component';
const route :Routes = [{
  path:'',
  component:GithubcomponentComponent
}];
@NgModule({
  imports: [
    RouterModule.forChild(route), 
    
  ],
  exports:[
    RouterModule
  ]
})
export class GithubModule { }
