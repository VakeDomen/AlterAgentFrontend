import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  @Input() minimumQueryLength: number = 3;
  @Input() label: string = 'Search';
  // to identify the page loading the component
  // used for saving search history
  @Input() parentLabel: string;

  query: string;
  @Output() searchQuery = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.emitHistory();
  }

  emitHistory(): void {
    if (this.parentLabel) {
      const history = localStorage.getItem(this.parentLabel);
      if (history) {
        this.query = history;
        this.searchQuery.emit(history);
      }
    }
  }

  saveHistory(query: string): void {
    if (this.parentLabel) {
      localStorage.setItem(this.parentLabel, query);
    }
  }

  emitQuery(event): void {
    if (this.query.length >= this.minimumQueryLength || this.query.length === 0) {
      this.saveHistory(this.query);
      this.searchQuery.emit(this.query);
    }
  }

}
