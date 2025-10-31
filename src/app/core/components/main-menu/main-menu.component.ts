import { Component } from '@angular/core';
import { mainOptMenuList } from '../../../shared/globals/menu.globals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  imports: [RouterLink],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.less'
})
export class MainMenuComponent {
  public mainOptMenuList = mainOptMenuList;
}
