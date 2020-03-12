import { Client } from './../models/client';
import { ApiResponse } from './../models/response';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = environment.apiUrl + '/clients';
  
  constructor(
    private http: HttpService,
  ) { }

  getClients(): Observable<ApiResponse<Client[]>> {
    return this.http.get<ApiResponse<Client[]>>(this.apiUrl);
  }

  getClient(id: string): Observable<ApiResponse<Client[]>> {
    return this.http.get<ApiResponse<Client[]>>(this.apiUrl + '/' + id);
  }

  updateClient(client: Client): Observable<ApiResponse<Client>> {
    return this.http.patch<ApiResponse<Client>>(this.apiUrl, client);
  }

  submitClient(client: Client): Observable<ApiResponse<Client>> {
    return this.http.post(this.apiUrl, client);
  }
}
