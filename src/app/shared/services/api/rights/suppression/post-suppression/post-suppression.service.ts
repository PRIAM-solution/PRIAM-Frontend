import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suppression } from '../../../../../../interfaces/suppression';

@Injectable({
  providedIn: 'root'
})
export class PostSuppressionService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  postSuppression(suppression: Suppression): Observable<Suppression> {
    return this.httpClient.post<Suppression>(`${this.baseUrl}/right/postAccessRequest`, suppression);
  }
}
