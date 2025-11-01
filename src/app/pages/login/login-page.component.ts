import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { authTwitter } from '../../shared/globals/paths.globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.less'
})
export class LoginPageComponent {

  private router = inject(Router);

  public openTwitterDialog() {
    window.open(
      `${environment.backUrl}/${authTwitter}`,
      'Twitter Login',
      'width=600,height=700'
    );
    const recievedMsg = (event: MessageEvent<unknown>) => {
      // console.log('event.origin', event.origin);
      console.log('event.data', event.data);
      if (event.origin === environment.frontUrl && event.data === 'login-ok') {
        this.router.navigate(['/']);
        window.removeEventListener('message', recievedMsg);
      }
    };
    window.addEventListener('message', recievedMsg);
  }
}
