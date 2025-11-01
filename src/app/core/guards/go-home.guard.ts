import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { UserService } from '../../shared/services/user.service';

export const goHomeGuard: CanActivateFn = () => {

  const userService = inject(UserService);
  const router = inject(Router);

  return userService.isLoggedUser().pipe(
    map(() => router.parseUrl('/')),
    catchError((err: Error) => {
      console.log('error', 'goHomeGuard', err);
      return of(true);
    }));
};
