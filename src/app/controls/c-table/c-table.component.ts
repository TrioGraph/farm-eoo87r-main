import { Component, Input, OnInit } from '@angular/core';
import { TableRow } from './TableRow';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'c-table',
  templateUrl: './c-table.component.html',
  styleUrls: ['./c-table.component.scss'],
})
export class CTableComponent  implements OnInit {
  
@Input() disabled: boolean = false;
@Input() _data: any[] = [];
@Input() columns: any;

@Input() showCheckBoxColumn: boolean = false;
@Input() allowPagination: boolean = false;
@Input() allowFilters: boolean = false;

// Displayed Data
filteredData: any[] = [];
paginatedData: any[] = [];

// Pagination Variables
@Input() rowsPerPage: number = 10;
@Input() currentPage: number = 1;
@Input() totalPages: number = 1;
@Input() totalRows: number = 1;
@Input() pageSizes: number[] = [5, 10, 20];
@Input() pages: number[] = [];

// Search Filter
searchTerm: string = '';

// Selection
selectAll: boolean = false;

// Sorting
sortColumn: keyof TableRow | null = null;
sortDirection: 'asc' | 'desc' = 'asc';

@Input()
  get data() {
    return this._data;
  }

  set data(value: any[]) {
    this._data = value;
    console.log('Set Data : ', this.data);
    this.loadData();
  }

ngOnInit(): void {
  this.loadData();
}

loadData() {
  this.filteredData = [...this.data];
  this.updatePagination();
}

updatePagination(): void {
  this.totalPages = Math.ceil(this.filteredData.length / this.rowsPerPage);

  let startIndex = (this.currentPage - 1) * this.rowsPerPage;
  if(!this.allowPagination) {
    startIndex = 0;
  }
  const endIndex = startIndex + this.rowsPerPage;
  this.paginatedData = this.filteredData.slice(startIndex, endIndex);

  // Generate the page numbers
  this.pages = Array(this.totalPages)
    .fill(0)
    .map((_, i) => i + 1);
}

changePage(page: number): void {
  this.currentPage = page;
  this.updatePagination();
}

prevPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.updatePagination();
  }
}

nextPage(): void {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.updatePagination();
  }
}

filterTable(): void {
  const searchTermLower = this.searchTerm.toLowerCase();
  this.filteredData = this.data.filter((row) =>
    Object.values(row).some((value: any) =>
      value.toString().toLowerCase().includes(searchTermLower)
    )
  );

  this.currentPage = 1;
  this.updatePagination();
}

sortTable(column: keyof TableRow): void {
  if (this.sortColumn === column) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortColumn = column;
    this.sortDirection = 'asc';
  }

  this.filteredData.sort((a, b) => {
    if (a[column]! < b[column]!) return this.sortDirection === 'asc' ? -1 : 1;
    if (a[column]! > b[column]!) return this.sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  this.updatePagination();
}

toggleSelectAll(): void {
  this.paginatedData.forEach((row) => (row.selected = this.selectAll));
}
  }
  
