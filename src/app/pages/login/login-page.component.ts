import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { authTwitter } from '../../shared/globals/paths.globals';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-login-page',
  imports: [FontAwesomeModule, ButtonComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.less'
})
export class LoginPageComponent {

  public faTwitter = faTwitter;
  private router = inject(Router);

  public openTwitterDialog() {
    window.open(
      `${environment.backUrl}/${authTwitter}`,
      'Twitter Login',
      'width=600,height=700'
    );
    const recievedMsg = (event: MessageEvent<unknown>) => {
      if (event.origin === environment.frontUrl && event.data === 'login-ok') {
        this.router.navigate(['/']);
        window.removeEventListener('message', recievedMsg);
      }
    };
    window.addEventListener('message', recievedMsg);
  }
}
