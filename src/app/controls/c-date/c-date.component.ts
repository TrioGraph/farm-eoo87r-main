import { formatDate } from '@angular/common';
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { isDate } from 'lodash-es';
import { combineLatest } from 'rxjs';

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
  
  @Input()
  dateValue: any;

  public dateControl = new FormControl(new Date());
  public readonly dateInputID = "";

  public ngOnInit(): void {
    combineLatest([
      this.dateControl.valueChanges,
    ]).subscribe(([date]) => {
      // const value = this._getValue();
      // const value = this._getValue();
      this._onChange(date);
    console.log('this.dateControl.valueChanges :: this.dateValue :: ', this.dateValue);

    });
    console.log('this.dateValue :: ', this.dateValue);
    // this.dateValue = '2024-12-24'
  }
/** Return a Date if the fields are ready or null otherwise */
private _getValue(): Date | null {
  return this.dateValue;
  // try {
  //   console.log('_getValue :: this.dateControl.value : ', this.dateControl.value);
  //   if (this.dateControl.invalid) {
  //     return null;
  //   }
  //     return this.dateControl.value;
  // } catch {
  //   // Return null if something throws
  //   return null;
  // }
}

public writeValue(value: Date | any | null): void {
  // console.log('writeValue :: value : ', value);
  // this.dateControl.setValue(this.dateValue);
  console.log('writeValue :: this.dateControl.value : ', this.dateControl.value);
  // if (isDate(value)) {
  //   this.dateValue = value;
  //   this.dateControl.setValue(value);
  // } else {
  //   this.dateValue = null;
  //   this.dateControl.setValue(null);
  // }
  // console.log('this.dateValue :: ', this.dateValue);

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
}
