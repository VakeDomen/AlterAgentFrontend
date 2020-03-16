import { Component, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.sass']
})

export class DatepickerComponent {

  constructor(
  ) {}

  @Input() label = 'Pick a date';
  @Input() dateSelected: Date;
  @Input() mode: 'normal' | 'year' = 'normal';

  @Output() date = new EventEmitter<Date>();

  addDate(type: string, event) {
    this.dateSelected = event.value;
    this.date.emit(this.dateSelected);
  }
}
