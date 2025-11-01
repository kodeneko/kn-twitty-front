import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../users/services/user.service';
import { catchError, map, of } from 'rxjs';

export const privateAreaGuard: CanActivateFn = () => {

  const userService = inject(UserService);
  const router = inject(Router);

  return userService.isLoggedUser().pipe(
    map(() => true),
    catchError((err: Error) => {
      console.log('error', 'privateAreaGuard', err);
      return of(router.parseUrl('/public/login'));
    }));
};
