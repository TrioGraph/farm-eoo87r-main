import { Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomInputComponent),
    },
  ]
})
export class CustomInputComponent   implements OnInit, OnChanges,  ControlValueAccessor{
  @Input() costPrice: string = '0';
  value!: string;
  private touched = false;

  disabled!: boolean;
  constructor() {}

  ngOnInit() {
    console.log('Custom Input');
  }

  valueChanged(val: string) {
    this.onChange(val);

    this.markAsTouched();
  }
  onChange = (value: string) => {};

   onTouched: any = () => {};

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }

  writeValue(value: string): void {
     this.value = value;
   }
   registerOnChange(fn: any): void {
     this.onChange = fn;
   }
   registerOnTouched(fn: any): void {
     this.onTouched = fn;
   }
   setDisabledState?(isDisabled: boolean): void {
     this.disabled = isDisabled;
   }

   private markAsTouched(): void{
    if(!this.touched){
      this.touched = true;
      this.onTouched();
    }
   }
}
