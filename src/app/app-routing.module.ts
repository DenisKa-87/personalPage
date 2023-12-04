import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PathFindingComponent } from './path-finding/path-finding.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { environment } from 'src/environments/environment.development';


const routes: Routes = [
  {path: environment.baseUrl, component: HomepageComponent},
  {path: environment.baseUrl+"pathFinding", component: PathFindingComponent},
  { path: environment.baseUrl+'sorting', component:InprogressComponent},
  { path: '**', component:HomepageComponent, pathMatch: 'full' }
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   
}
