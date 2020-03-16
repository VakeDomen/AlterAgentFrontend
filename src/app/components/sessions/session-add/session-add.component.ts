import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';
import { ToastrService } from 'ngx-toastr';
import { ApiResponse } from 'src/app/models/response';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-session-add',
  templateUrl: './session-add.component.html',
  styleUrls: ['./session-add.component.sass']
})
export class SessionAddComponent implements OnChanges {

  @Input() clientId: string;
  @Output() newSession = new EventEmitter<Session>();

  modalOpen: boolean = false;
  allServices: Service[]; 

  selectedService: Service;
  session: Session = {
    timestamp: '',
    client_id: '',
    service_id: '',
    description: '',
  }

  constructor(
    private sessionService: SessionService,
    private toastr: ToastrService,
    private serviceService: ServicesService,
  ) { }

  ngOnChanges() {
    this.serviceService.getServices().subscribe((payload: ApiResponse<Service[]>) => {
      this.allServices = payload.data;
      this.selectedService = this.allServices[0];
    });
  }

  submitSession(): void {
    this.session.client_id = this.clientId;
    this.session.service_id = this.selectedService.id;
    console.log(this.session)
    if (this.clientId && this.clientId !== '' && this.session.service_id !== '') {
      this.sessionService.submitSession(this.session).subscribe((payload: ApiResponse<Session>) => {
        this.newSession.emit(payload.data);
        this.toastr.success('Seja dodana');
      });
    } else {
      this.toastr.error("Neveljavni podatki");
    }
  }

  selectService(service: string): void {
    console.log(service);
    for (const serv of this.allServices) {
      if (serv.name === service) {
        this.selectedService = serv;
      }
    }
  }

  selectDate(date: Date): void {
    this.session.timestamp = '' + date.getTime();
  }

}
