import { Service } from './../models/service';
import { ApiResponse } from './../models/response';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = environment.apiUrl + '/services';

  constructor(
    private http: HttpService,
  ) { }

  getServices(): Observable<ApiResponse<Service[]>> {
    return this.http.get<ApiResponse<Service[]>>(this.apiUrl);
  }

  getService(id: string): Observable<ApiResponse<Service[]>> {
    return this.http.get<ApiResponse<Service[]>>(this.apiUrl + '/' + id);
  }

  submitService(service: Service): Observable<ApiResponse<Service>> {
    return this.http.post<ApiResponse<Service>>(this.apiUrl, service);
  }

  getClientServices(clientId: string): Observable<ApiResponse<Service[]>> {
    return this.http.get<ApiResponse<Service[]>>(this.apiUrl + '/client/' + clientId);
  }

  bindService(clientId: string, serviceId: string): Observable<ApiResponse<any>> {
    const payload = {
      client_id: clientId,
      service_id: serviceId
    };
    return this.http.post(this.apiUrl + '/bind', payload);
  }

  unbindService(clientId: string, serviceId: string): Observable<ApiResponse<any>> {
    const payload = {
      client_id: clientId,
      service_id: serviceId
    };
    return this.http.post(this.apiUrl + '/unbind', payload);
  }

  deleteService(serviceId: string): Observable<ApiResponse<any>> {
    return this.http.delete(this.apiUrl + '/' + serviceId);
  }
}
