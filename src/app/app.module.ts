import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CheckPasswordComponent } from './check-password/check-password.component';
import {CredentialsService} from './credentials.service';
import { KidsComponent } from './kids/kids.component';

const routes:Routes = [
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginPageComponent,
    SignUpComponent,
    CheckPasswordComponent,
    KidsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [CredentialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
