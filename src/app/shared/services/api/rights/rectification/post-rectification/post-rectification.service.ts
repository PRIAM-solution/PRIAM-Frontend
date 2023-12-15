import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rectification } from '../../../../../../interfaces/rectification';

@Injectable({
  providedIn: 'root'
})
export class PostRectificationService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  postRectification(rectification: Rectification): Observable<Rectification> {
    return this.httpClient.post<Rectification>(`${this.baseUrl}/right/postAccessRequest`, rectification);
  }
}
