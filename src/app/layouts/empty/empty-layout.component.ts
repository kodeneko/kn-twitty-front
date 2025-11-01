import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainMenuComponent } from '../../core/components/main-menu/main-menu.component';
import { UserService } from '../../users/services/user.service';

@Component({
  selector: 'app-empty-layout',
  imports: [RouterOutlet, MainMenuComponent],
  templateUrl: './empty-layout.component.html',
  styleUrl: './empty-layout.component.less'
})
export class EmptyLayoutComponent {

  private userService = inject(UserService);
  private router = inject(Router);

  public doLogout() {
    this.userService.logout().subscribe({
      next: () => console.log('ok'),
      error: () => console.log('error'),
      complete: () => this.router.navigate(['login']),
    });
  }
}
