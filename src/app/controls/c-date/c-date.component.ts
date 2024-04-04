import { formatDate } from '@angular/common';
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { isDate } from 'lodash-es';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'c-date',
  templateUrl: './c-date.component.html',
  styleUrls: ['./c-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CDateComponent),
      multi: true,
    },
  ],
})
export class CDateComponent  implements OnInit, ControlValueAccessor {
  
  @Input()
  formLabel: any;
  
  public readonly dateControl = new FormControl(null, [
    Validators.required,
    Validators.min(1),
    Validators.max(31),
  ]);
  
  constructor() { }

  ngOnInit() {
    this.dateControl.valueChanges.subscribe(() => {
      const value = this._getValue();
      this._onChange(value);
    })

  }

  /** Return a Date if the fields are ready or null otherwise */
  private _getValue(): Date | null {
    try {
      if (this.dateControl.invalid)
        return null;
      // const day = Number(this.dayControl.value);
      // const month = Number(this.monthControl.value);
      // const year = Number(this.yearControl.value);
      // const date = new Date(year, month - 1, day);
    this._onChange(this.dateControl.value)
    return this.dateControl.value;
    } catch {
      // Return null if something throws
      return null;
    }
  }

  public writeValue(value: Date | null): void {
    if (isDate(value)) {
      const date = value as any;
      // const date = "12/12/2024" as any;
      const day = JSON.parse(value.getDate() as any);
      const month = JSON.parse(value.getMonth() + 1 as any);
      const year = JSON.parse(value.getFullYear() as any);
      this.dateControl.setValue(formatDate(date, 'yyyy-MM-dd', 'en') as any);
    } else {
      this.dateControl.setValue(null);
    }
  }

  private _onChange = (_value: Date | null): void => undefined;
  public registerOnChange(fn: (value: Date | null) => void): void {
    this._onChange = fn;
  }

  /** It's called in the component template when we have a "blur" or "input" event */
  public onTouched = (): void => undefined;
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.dateControl.disable();
    } else {
      this.dateControl.enable();
    }
  }

  onDateChange(event: any) {
    console.log('onDateChange :: event : ', event);
    this.dateControl.setValue(event.target.value)
    this._onChange(this.dateControl.getRawValue())
  }


}
