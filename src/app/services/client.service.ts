import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';
import { Client } from '../models/client';

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

  submitClient(client: Client): Observable<ApiResponse<Client>> {
    return this.http.post(this.apiUrl, client);
  }
}
