import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PathFindingComponent } from './path-finding/path-finding.component';
import { InprogressComponent } from './inprogress/inprogress.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "personalPage/pathFinding", component: PathFindingComponent},
  { path: 'personalPage/', component:InprogressComponent},
  { path: '**', component:HomepageComponent, pathMatch: 'full' }
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   
}
