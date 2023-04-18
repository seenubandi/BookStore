import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CheckPasswordComponent } from './check-password/check-password.component';
import { KidsComponent } from './kids/kids.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:"login",component:LoginPageComponent
  },
  {
    path:"header",component:HeaderComponent
  },
  {
    path:"signup",component:SignUpComponent
  },
  {
    path:"checkPassword",component:CheckPasswordComponent
  },
  {
    path:"kids",component:KidsComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
