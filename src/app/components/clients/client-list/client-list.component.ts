import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.sass']
})
export class ClientListComponent implements OnInit {

  @Input() clients: Client[];

  constructor() { }

  ngOnInit() {
  }

}
