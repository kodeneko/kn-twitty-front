import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';


export const goHomeGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedUser()
    .pipe(
      map(() => router.parseUrl('/')),
      catchError((err: Error) => {
        console.log('error', 'goHomeGuard', err);
        return of(true);
      }));
};
