import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Session } from 'src/app/models/session';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.sass']
})
export class SessionListComponent implements OnInit {

  @Input() sessions: Session[];
  @Input() deletable: boolean = false;

  @Output() deletedSession = new EventEmitter<Session>();

  constructor() { }

  ngOnInit() {
  }

  removeSession(sessionToDel: Session): void {
    console.log("askj")
    this.deletedSession.emit(sessionToDel);
  }

}
