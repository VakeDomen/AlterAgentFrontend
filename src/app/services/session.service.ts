import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';
import { Session } from '../models/session';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private apiUrl = environment.apiUrl + '/sessions';

  constructor(
    private http: HttpService,
  ) { }

  getClientSessions(clientId): Observable<ApiResponse<Session[]>> {
    return this.http.get<ApiResponse<Session[]>>(this.apiUrl + '/' + clientId);
  }

  submitSession(session: Session): Observable<ApiResponse<Session>> {
    return this.http.post<ApiResponse<Session>>(this.apiUrl, session);
  }

  deleteSession(id: string): Observable<ApiResponse<Session>> {
    return this.http.delete<ApiResponse<Session>>(this.apiUrl + '/' + id);
  }
}
