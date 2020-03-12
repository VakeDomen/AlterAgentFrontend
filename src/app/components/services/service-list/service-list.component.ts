import { Service } from './../../../models/service';
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.sass']
})
export class ServiceListComponent implements OnChanges {

  @Input() services: Service[];
  @Input() deletable: boolean = false;

  @Output() deletedService = new EventEmitter<Service>();

  constructor() { }

  ngOnChanges() {
  }

  removeService(serviceToDel: Service): void {
    console.log("askj")
    this.deletedService.emit(serviceToDel);
  }
}
