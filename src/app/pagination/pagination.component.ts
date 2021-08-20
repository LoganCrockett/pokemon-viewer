import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() lastPage:number = 0;
  @Input('page') currentPage:number = 0;
  @Input('handlePagination') handlePagination: any;
  @Input() handlePerPage: any;
  @Input() perPage: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(action: string):void {
    this.handlePagination(action);
  }

  onSelect(e: Event) {
    this.handlePerPage((e.target as HTMLInputElement).value);
  }

}
