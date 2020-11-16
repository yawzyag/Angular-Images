import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() total: number = 0;
  @Input() totalHits: number = 0;
  @Input() currentPage: number = 1;
  @Output() changePage: EventEmitter<any> = new EventEmitter();
  counterArray: any[] = [];
  sizePage: number = 12;

  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth >= 1200) {
      this.sizePage = 18;
    }
  }

  counter() {
    let range = 0;
    if (this.total) {
      range = Math.ceil(this.totalHits / this.sizePage);
    }
    return new Array(range);
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if (window.innerWidth >= 1200) {
      this.sizePage = 18;
    }
    this.counterArray = this.counter();
  }

  changePageHandler(i: number) {
    if (i > 0 && i < this.counterArray.length + 1) {
      this.changePage.emit(i);
    }
  }
}
