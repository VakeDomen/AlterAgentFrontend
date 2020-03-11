import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private apiUrl = environment.apiUrl + '/tags';
  
  constructor(
    private http: HttpService,
  ) { }

  getTags(): Observable<ApiResponse<Tag[]>> {
    return this.http.get<ApiResponse<Tag[]>>(this.apiUrl);
  }

  submitTag(tag: Tag): Observable<ApiResponse<Tag>> {
    return this.http.post<ApiResponse<Tag>>(this.apiUrl, tag);
  }

  getClientTags(clientId: string): Observable<ApiResponse<Tag[]>> {
    return this.http.get<ApiResponse<Tag[]>>(this.apiUrl + '/client/' + clientId);
  }

  bindTag(clientId: string, tagId: string): Observable<ApiResponse<any>> {
    const payload = {
      client_id: clientId,
      tag_id: tagId
    }
    return this.http.post(this.apiUrl + '/bind', payload);
  }

  unbindTag(clientId: string, tagId: string): Observable<ApiResponse<any>> {
    const payload = {
      client_id: clientId,
      tag_id: tagId
    }
    return this.http.post(this.apiUrl + '/unbind', payload);
  }

  deleteTag(tagId: string): Observable<ApiResponse<any>> {
    return this.http.delete(this.apiUrl + '/' + tagId);
  }

}
