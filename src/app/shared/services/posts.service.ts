import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private http = inject(HttpClient);
  
  private apiUrl = `${environment.backUrl}/posts`;

  count(query: string, days: number) {
    const params = new HttpParams()
      .set('query', query)
      .set('days', days);
    return this.http.get(`${this.apiUrl}/count`, { withCredentials: true, params });
  }

  list(query: string, days: number) {
    const params = new HttpParams()
      .set('query', query)
      .set('days', days);
    return this.http.get<boolean>(`${this.apiUrl}/list`, { withCredentials: true, params });
  }
}
