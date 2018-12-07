import { NgModule } from '@angular/core';

import {RouterModule, Routes, ROUTES} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ListComponent } from './components/list/list.component';
const route :Routes = [{
  path:'about/:itemid',
  component:AboutComponent
},
{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:'list',
  component:ListComponent
}
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
