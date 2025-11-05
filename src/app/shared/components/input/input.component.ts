/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }],
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.less'
})
export class InputComponent {
  label = input<string>('');
  name = input<string>('');

  value = '';
  onChange = (value: any) => {};
  onTouched = () => {};

  onInput(value: string) {
    this.value = value;
    this.onChange(value);
  }

  // Método del ControlValueAccessor
  writeValue(value: any): void {
    this.value = value || '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // Maneja el estado deshabilitado si lo necesitas
  }
}
