import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export interface Item {
  id: string;
  name: string;
}
@Component({
  selector: 'app-typeheadsingle',
  templateUrl: './typeheadsingle.component.html',
  styleUrls: ['./typeheadsingle.component.scss'],
})
export class TypeheadsingleComponent  implements OnInit {

  @Input() items: Item[] = [];
  @Input() selectedItems: string[] = [];
  @Input() title = 'Select Items';

  @Output() searchInput = new EventEmitter<void>();
  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<string[]>();

  filteredItems: Item[] = [];
  workingSelectedValues: string[] = [];

  ngOnInit() {
    this.filteredItems = [...this.items];
    this.workingSelectedValues = [...this.selectedItems];
  }

  trackItems(index: number, item: Item) {
    return item.id;
  }

  cancelChanges() {
    this.selectionCancel.emit();
  }

  confirmChanges() {
    console.log('Confirm Changes');
    this.selectionChange.emit(this.workingSelectedValues);
  }

  searchbarInput(ev: any) {
    // this.filterList(ev.target.value);
    this.searchInput.emit(ev.target.value);
    console.log('this.items :', this.items);
  }

  /**
   * Update the rendered view with
   * the provided search query. If no
   * query is provided, all data
   * will be rendered.
   */
  filterList(searchQuery: string | undefined) {
    /**
     * If no search query is defined,
     * return all options.
     */
    if (searchQuery === undefined) {
      this.filteredItems = [...this.items];
    } else {
      /**
       * Otherwise, normalize the search
       * query and check to see which items
       * contain the search query as a substring.
       */
      const normalizedQuery = searchQuery.toLowerCase();
      this.filteredItems = this.items.filter((item) => {
        return item?.name?.toLowerCase().includes(normalizedQuery);
      });
    }
  }

  // isChecked(value: string) {
  //   return this.workingSelectedValues.find((item) => item === value);
  // }

  checkboxChange(selectedItem: any) {
    console.log('selectedItem : ', selectedItem);
      this.workingSelectedValues = [selectedItem.id];

    // if (checked) {
    //   this.workingSelectedValues = [...this.workingSelectedValues, value];
    // } else {
    //   this.workingSelectedValues = this.workingSelectedValues.filter((item) => item !== value);
    // }

    this.confirmChanges();
  }
}
