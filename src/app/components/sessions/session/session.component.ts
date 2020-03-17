import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Session } from 'src/app/models/session';
import { ServicesService } from 'src/app/services/services.service';
import { ApiResponse } from 'src/app/models/response';
import { Service } from 'src/app/models/service';
import { SessionService } from 'src/app/services/session.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.sass']
})
export class SessionComponent implements OnChanges {


  @Input() session: Session;
  @Input() deletable: boolean = false;

  @Output() deletedSession = new EventEmitter<Session>();

  service: Service;
  deletePromptModalOpen: boolean = false;


  constructor(
    private serviceService: ServicesService,
    private sessionService: SessionService,
    private toastr: ToastrService,
  ) { }

  ngOnChanges() {
    if (this.session) {
      this.serviceService.getService(this.session.service_id).subscribe((payload: ApiResponse<Service[]>) => {
        console.log(payload)
        this.service = payload.data.pop();
      });
    }
  }

  deleteSession() {
    this.sessionService.deleteSession(this.session.id).subscribe((payload: ApiResponse<Session>) => {
      this.toastr.success('Izbrisano');
      this.deletePromptModalOpen = false;
      this.deletedSession.emit(payload.data);
    }, err => {
      this.toastr.error('Napaka pri izbrisu');
    });
  }
}
