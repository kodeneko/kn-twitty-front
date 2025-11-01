import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendingsService {
  private http = inject(HttpClient);
  
  private apiUrl = `${environment.backUrl}/trendings`;

  get(woeid: string) {
    const params = new HttpParams().set('woeid', woeid)
    return this.http.get(`${this.apiUrl}`, { withCredentials: true, params });
  }
}
