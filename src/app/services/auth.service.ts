import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/response';
import { LocalCredentials } from '../models/local.credentials';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl + '/auth/';
  private token = 'JWTtoken';
  

  constructor(
    private http: HttpClient,
  ) { }

  isLoggedIn(): boolean {
    if (!localStorage.getItem(this.token)) {
      return false;
    }
    return true;
  }

  getJWTtoken(): string {
    return localStorage.getItem(this.token);
  }  

  logout(): void {
    localStorage.removeItem(this.token);
  }

  async loginLocal(credentials: LocalCredentials): Promise<boolean> {
    try {
      const response: ApiResponse<string> = await this.http.post<ApiResponse<string>>(this.apiUrl + 'local/login', credentials).toPromise();
      localStorage.setItem(this.token, response.data);
    } catch(error) {
      return false;
    }
    return true;
  }

  async registerLocal(user: User): Promise<boolean> {
    try{
      const response: ApiResponse<null> = await this.http.post<ApiResponse<null>>(this.apiUrl + 'local/register', user).toPromise();
    } catch (err) {
      return false;
    }
    return false;
  }

}