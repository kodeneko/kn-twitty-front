import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from '../../core/components/main-menu/main-menu.component';

@Component({
  selector: 'app-empty-layout',
  imports: [RouterOutlet, MainMenuComponent],
  templateUrl: './empty-layout.component.html',
  styleUrl: './empty-layout.component.less'
})
export class EmptyLayoutComponent {

}
