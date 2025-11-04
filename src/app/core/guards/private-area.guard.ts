import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

export const privateAreaGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedUser()
    .pipe(
      map(() => true),
      catchError((err: Error) => {
        console.log('error', 'privateAreaGuard', err);
        return of(router.parseUrl('/public/login'));
      }));
};
