/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, forwardRef, input } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [FontAwesomeModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }],
  templateUrl: './select.component.html',
  styleUrl: './select.component.less'
})
export class SelectComponent {
  public faCaretDown = faCaretDown;
  label = input<string>('');
  name = input<string>('');
  options = input<{ value: any, label: string }[]>([]);

  value: any;
  onChange = (value: any) => {};
  onTouched = () => {};

  onSelect(event: any) {
    const value = event.target.value;
    this.value = value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }
}
