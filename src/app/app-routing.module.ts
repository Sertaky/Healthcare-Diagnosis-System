import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurDoctorsComponent } from './components/our-doctors/our-doctors.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LiverComponent } from './components/liver/liver.component';
import { KidneyComponent } from './components/kidney/kidney.component';
import { DiabetesComponent } from './components/diabetes/diabetes.component';
import { HeartComponent } from './components/heart/heart.component';
import { PneumoniaComponent } from './components/pneumonia/pneumonia.component';
import { MalariaComponent } from './components/malaria/malaria.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { BlankLayoutComponent } from './layers/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layers/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'home',
        canActivate: [authGuard],
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'about',
        canActivate: [authGuard],
      },
      {
        path: 'services',
        component: OurServicesComponent,
        title: 'services',
        canActivate: [authGuard],
      },
      {
        path: 'doctors',
        component: OurDoctorsComponent,
        title: 'doctors',
        canActivate: [authGuard],
      },
      {
        path: 'feedbacks',
        component: FeedbacksComponent,
        title: 'feedbacks',
        canActivate: [authGuard],
      },
      {
        path: 'logout',
        component: LogoutComponent,
        title: '',
        canActivate: [authGuard],
      },
      {
        path: 'liver',
        component: LiverComponent,
        title: 'liver',
        canActivate: [authGuard],
      },
      {
        path: 'kidney',
        component: KidneyComponent,
        title: 'kidney',
        canActivate: [authGuard],
      },
      {
        path: 'diabetes',
        component: DiabetesComponent,
        title: 'diabetes',
        canActivate: [authGuard],
      },
      {
        path: 'heart',
        component: HeartComponent,
        title: 'heart',
        canActivate: [authGuard],
      },
      {
        path: 'Pneumonia',
        component: PneumoniaComponent,
        title: 'Pneumonia',
        canActivate: [authGuard],
      },
      {
        path: 'Malaria',
        component: MalariaComponent,
        title: 'Malaria',
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent, title: 'Register' },
      { path: 'login', component: LoginComponent, title: 'Login' },
    ],
  },

  { path: '**', component: NotFoundComponent, title: 'notfound' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
