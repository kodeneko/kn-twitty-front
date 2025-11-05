import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.less',
  host: {
    '(click)': 'onHostClick()'
  }
})
export class ButtonComponent {
  style = input<'solid' | 'line'>('solid');
  clickCompo = output<void>();

  public onHostClick() {
    this.clickCompo.emit();
  }
}
