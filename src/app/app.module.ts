import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes, ROUTES} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ListComponent } from './components/list/list.component';
import { ApprouterModule } from './approuter.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// const route :Routes = [{
//   path:'about',
//   component:AboutComponent
// },
// {
//   path:'',
//   component:HomeComponent,
//   pathMatch:'full'
// },
// {
//   path:'list',
//   component:ListComponent
// }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(route),
    ApprouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
