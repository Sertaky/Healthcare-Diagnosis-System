import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { OurDoctorsComponent } from './components/our-doctors/our-doctors.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { LiverComponent } from './components/liver/liver.component';
import { KidneyComponent } from './components/kidney/kidney.component';
import { HeartComponent } from './components/heart/heart.component';
import { DiabetesComponent } from './components/diabetes/diabetes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PneumoniaComponent } from './components/pneumonia/pneumonia.component';
import { MalariaComponent } from './components/malaria/malaria.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { BlankLayoutComponent } from './layers/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layers/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OurDoctorsComponent,
    OurServicesComponent,
    FeedbacksComponent,
    AboutComponent,
    FooterComponent,
    LiverComponent,
    KidneyComponent,
    HeartComponent,
    DiabetesComponent,
    NotFoundComponent,
    PneumoniaComponent,
    MalariaComponent,
    RegisterComponent,
    LogoutComponent,
    NavbarAuthComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
