import { Component, EventEmitter, forwardRef, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Item } from '../Item';
import { IonModal } from '@ionic/angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'c-dropdown',
  templateUrl: './c-dropdown.component.html',
  styleUrls: ['./c-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CDropdownComponent),
      multi: true
    }
  ]
})
export class CDropdownComponent  implements OnInit, OnChanges, ControlValueAccessor {
  
  private touched = false;

  @Input() selectedText: any;
  @Input() _items: Item[] = [];
  @Input() _selectedItem!: string;
  @Input() title = 'Select Items';
  @Input() elementId = '';
  
  @Output() searchInput = new EventEmitter<string>();

  @ViewChild('modal', { static: true }) modal!: IonModal;

  // Allow the input to be disabled, and when it is make it somewhat transparent.
  @Input() disabled = false;
  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  constructor() { }

  ngOnInit() {
    console.log('c-dropdown :: elementId: ', this.elementId);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('c-dropdown :: ngOnChanges : ', changes);
  }

  @Input()
  get items() {
    return this._items;
  }

  set items(value: Item[]) {
    console.log('Setter items Called');
    this._items = value;
    if(this.selectedItem != null) {
      this.selectedText = this.formatData(this.selectedItem);
    }
  }

  @Input()
  get selectedItem() {
    return this._selectedItem;
  }

  set selectedItem(value: string) {
    this._selectedItem = value;
    this.markAsTouched();
  }

  selectionItemChanged(tempSelectedItems: any) {
    this.selectedItem = tempSelectedItems;
    console.log('selectedItem : ', this.selectedItem);
    this.selectedText = String(this.formatData(this.selectedItem));
    console.log('this.selectedVillagesText : ', this.selectedText);
    this.onChange(tempSelectedItems);
    this.markAsTouched();
    this.modal.dismiss();
  }

  private formatData(data: string) {
    if (this.items != null) {
      const village = this.items.find((v: any) => v.id === data);
      return village?.name;
    }
    return `${data?.length} items`;
  }

  searchInputChanged(event: any) {
    this.searchInput.emit(event);
  }

   // Function to call when the rating changes.
   onChange = (value: string) => {};

   // Function to call when the input is touched (when a star is clicked).
   onTouched = () => {};

  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(value: string): void {
    this.selectedItem = value;
    this.selectedText = this.formatData(value);
    this.onChange(this.selectedItem);
  }

  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private markAsTouched(): void{
    if(!this.touched){
      this.touched = true;
      this.onTouched();
    }
   }
}
