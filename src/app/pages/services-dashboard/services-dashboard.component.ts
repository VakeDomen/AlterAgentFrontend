import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';
import { ApiResponse } from 'src/app/models/response';

@Component({
  selector: 'app-services-dashboard',
  templateUrl: './services-dashboard.component.html',
  styleUrls: ['./services-dashboard.component.sass']
})
export class ServicesDashboardComponent implements OnInit {

  services: Service[];

  constructor(
    private serviceService: ServicesService,
  ) { }

  ngOnInit() {
    this.serviceService.getServices().subscribe((payload: ApiResponse<Service[]>) => {
      this.services = payload.data;
    });
  }

  removeService(serviceToRemove: Service): void {
    console.log(this.services);
    this.services = this.services.filter((service: Service) => service.id !== serviceToRemove.id);
    console.log(this.services);
  }
}
