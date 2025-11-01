import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WoeidService {
  private http = inject(HttpClient);
  
  private apiUrl = `${environment.backUrl}/woeid`;

  get(place: string) {
    const params = new HttpParams().set('place', place)
    return this.http.get(`${this.apiUrl}`, { withCredentials: true, params });
  }
}
