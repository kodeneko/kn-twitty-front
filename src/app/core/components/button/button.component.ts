import { Component, output } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  imports: [FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.less',
  host: {
    '(click)': 'onHostClick()'
  }
})
export class ButtonComponent {
  clickCompo = output<void>();

  public onHostClick() {
    this.clickCompo.emit();
  }
}
