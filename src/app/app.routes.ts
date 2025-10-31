import { Routes } from '@angular/router';
import { EmptyLayoutComponent } from './layouts/empty/empty-layout.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PublicLayoutComponent } from './layouts/public/public-layout.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';

export const routes: Routes = [
  {
    path: 'public',
    component: EmptyLayoutComponent,
    children: [
      {
        path: 'login', component: LoginPageComponent
      }
    ]
  },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '', component: HomePageComponent
      },
      {
        path: '**', component: NotFoundPageComponent
      }
    ]
  }
];
