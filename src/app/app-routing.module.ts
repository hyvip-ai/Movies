import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'Search'
  },
  {
    path:'Search',component:SearchComponent
  },
  {
    path:'SearchResults',component:SearchresultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
