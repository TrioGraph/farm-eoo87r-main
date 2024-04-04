import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {

  public identificationsList: any;
  public searchText: any;
  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log();
  }

  searchClick(event: any) {
    console.log('search : ', event);
    this.search.emit(this.searchText);
  }

}
