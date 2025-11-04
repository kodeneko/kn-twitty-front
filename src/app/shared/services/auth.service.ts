import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { RegBackRes } from '../models/reg-back-res.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  
  private apiUrl = `${environment.backUrl}/auth`;

  isLoggedUser(): Observable<RegBackRes> {
    return this.http.get<RegBackRes>(`${this.apiUrl}/islogged`, { withCredentials: true });
  }

  logout(): Observable<RegBackRes> {
    return this.http.get<RegBackRes>(`${this.apiUrl}/logout`, { withCredentials: true });
  }
}
