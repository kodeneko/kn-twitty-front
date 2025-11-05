import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainMenuComponent } from '../../core/components/main-menu/main-menu.component';
import { AuthService } from '../../shared/services/auth.service';
import { ButtonComponent } from '../../core/components/button/button.component';

@Component({
  selector: 'app-empty-layout',
  imports: [RouterOutlet, MainMenuComponent, ButtonComponent],
  templateUrl: './empty-layout.component.html',
  styleUrl: './empty-layout.component.less'
})
export class EmptyLayoutComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  public doLogout() {
    this.authService.logout()
      .subscribe({
        next: () => console.log('ok'),
        error: () => console.log('error'),
        complete: () => this.router.navigate(['login']),
      });
  }
}
