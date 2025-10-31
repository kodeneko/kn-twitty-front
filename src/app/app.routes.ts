import { Routes } from '@angular/router';
import { EmptyLayoutComponent } from './layouts/empty/empty-layout.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { PublicLayoutComponent } from './layouts/public/public-layout.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';
import { postsPath, profilePath, trendingsPath } from './shared/globals/paths.globals';
import { PostsPageComponent } from './pages/posts/posts-page.component';
import { TrendingsPageComponent } from './pages/trendings/trendings-page.component';
import { ProfilePageComponent } from './pages/profile/profile-page.component';

export const routes: Routes = [
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'login', component: LoginPageComponent
      }
    ]
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: postsPath,
        component: PostsPageComponent
      },
      {
        path: trendingsPath,
        component: TrendingsPageComponent
      },
      {
        path: profilePath,
        component: ProfilePageComponent
      },
      {
        path: '**', component: NotFoundPageComponent
      }
    ]
  }
];
