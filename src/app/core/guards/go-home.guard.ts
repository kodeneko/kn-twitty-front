import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../users/services/user.service';
import { catchError, map, of } from 'rxjs';

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
