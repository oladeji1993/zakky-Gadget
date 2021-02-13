import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: "", 
    pathMatch: "full",
    redirectTo: "home"
  
  },

  { 
    path: 'home', component: LoginPageComponent 
  },

  { 
    path: 'dashboard', component: DashboardComponent 
  },

 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
