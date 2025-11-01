import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../users/services/user.service';
import { map } from 'rxjs';

export const goHomeGuard: CanActivateFn = () => {

  const userService = inject(UserService);
  const router = inject(Router);

  return userService.isLoggedUser().pipe(
    map((isLogged: boolean) => isLogged ? router.parseUrl('/') : true)
  );
};
