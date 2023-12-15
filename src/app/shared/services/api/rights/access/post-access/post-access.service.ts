import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessRequest } from '../../../../../../interfaces/access-request';

@Injectable({
  providedIn: 'root'
})
export class PostAccessService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  postAccessRequest(accessRequest: AccessRequest): Observable<AccessRequest> {
    return this.httpClient.post<AccessRequest>(`${this.baseUrl}/right/postAccessRequest`, accessRequest);
  }
}
