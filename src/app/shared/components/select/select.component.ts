import { Component } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-select',
  imports: [FontAwesomeModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.less'
})
export class SelectComponent {
  public faCaretDown = faCaretDown;
}
