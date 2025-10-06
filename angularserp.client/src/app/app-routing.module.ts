import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'not-found', component: NotFoundComponent},
  {path:'register', component: RegisterComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
