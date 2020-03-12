import { ApiResponse } from './../../../models/response';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from './../../../models/service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.sass']
})
export class ServiceComponent implements OnInit {

  @Input() service: Service;
  @Input() deletable: boolean = false;

  @Output() deleted = new EventEmitter<Service>();

  deletePromptModalOpen: boolean = false;

  constructor(
    private servicesService: ServicesService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  deleteService(): void {
    this.servicesService.deleteService(this.service.id).subscribe((payload: ApiResponse<any>) => {
      this.toastr.success('Izbrisano');
      this.deleted.emit(this.service);
      this.deletePromptModalOpen = false;
    }, err => {
      this.toastr.error('Prišlo je do napake pri brisanju');
    });
  }
}
