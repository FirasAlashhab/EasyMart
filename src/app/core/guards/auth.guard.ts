import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  let token = cookieService.get('Authorization');
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.getUser();

  if (token && user) {
    token = token.replace('Bearer ', '').trim();

    try {
      const decodedToken: any = jwtDecode(token);

      const expirationDate = decodedToken.exp * 1000;
      const currentTime = new Date().getTime();

      if (expirationDate < currentTime) {
        authService.logout();
        return router.createUrlTree(['/login'], {
          queryParams: { returnUrl: state.url },
        });
      } else {
        if (state.url.startsWith('/admin') && user.roles.includes('Writer')) {
          return true;
        } else if (state.url.startsWith('/checkout')) {
          return true;
        } else if (state.url.startsWith('/orders')) {
          return true;
        } else {
          alert('Unauthorized');
          return router.createUrlTree(['/login'], {
            queryParams: { returnUrl: state.url },
          });
        }
      }
    } catch (error) {
      authService.logout();
      return router.createUrlTree(['/login'], {
        queryParams: { returnUrl: state.url },
      });
    }
  } else {
    authService.logout();
    return router.createUrlTree(['/login'], {
      queryParams: { returnUrl: state.url },
    });
  }
};
