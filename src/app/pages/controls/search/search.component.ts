import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  public identificationsList: any;
  public searchText: any;
  @Output() search: EventEmitter<any> = new EventEmitter();
  
  title = 'Filters';
 
  filtersForm!: FormGroup;
 
 
  constructor(private fb:FormBuilder) {
 
    this.filtersForm=this.fb.group({
      filters: this.fb.array([]) ,
    })
  }

  ngOnInit() {
    console.log();
  }

  searchClick(event: any) {
    console.log('search : ', event);
    this.search.emit(this.searchText);
  }
  filters(): FormArray {
    return this.filtersForm.get("filters") as FormArray
  }
 
 
  newFilter(): FormGroup {
    return this.fb.group({
      ColumnName: '',
      ColumnDataType: '',
      Operator: '',
      Value1: '',
      Value2: '',
    })
  }
 
  addFilter() {
    console.log("Adding a employee");
    this.filters().push(this.newFilter());
  }
 
  removeFilter(filterIndex:number) {
    this.filters().removeAt(filterIndex);
  }
 
  onSubmit() {
    console.log(this.filtersForm.value);
  }
 
}
