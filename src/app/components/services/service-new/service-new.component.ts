import { ApiResponse } from './../../../models/response';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from './../../../services/services.service';
import { Service } from './../../../models/service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-service-new',
  templateUrl: './service-new.component.html',
  styleUrls: ['./service-new.component.sass']
})
export class ServiceNewComponent {
  
  modalOpen: boolean = false;
  service: Service = {
    name: '',
    color: "#50D0D0"
  };

  @Output() newService = new EventEmitter<Service>();

  constructor(
    private serviceService: ServicesService,
    private toast: ToastrService,
  ) { }

  submitService() {
    if (this.service.name !== '') {
      this.serviceService.submitService(this.service).subscribe((payload: ApiResponse<Service>) => {
        this.newService.emit(payload.data);
        this.modalOpen = false;
        this.toast.success("Oznaka dodana");
      });
    } else {
      this.toast.error("Neveljavni podatki");
    }
  }

  colorChange(color): void {
    this.service.color = color;
  }

}
