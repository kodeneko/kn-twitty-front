import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { UserService } from '../../shared/services/user.service';

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
