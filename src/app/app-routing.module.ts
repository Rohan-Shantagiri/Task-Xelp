import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoogedComponent } from './looged/looged.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { 
    path : '', component : LoginComponent
  },
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'register', component : RegisterComponent
  },
  {
    path : 'looged', component : LoogedComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
