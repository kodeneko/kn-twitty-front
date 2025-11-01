import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  
  private apiUrl = `${environment.backUrl}/auth`;

  isLoggedUser() {
    return this.http.get(`${this.apiUrl}/islogged`, { withCredentials: true });
  }

  logout() {
      return this.http.get<boolean>(`${this.apiUrl}/logout`, { withCredentials: true });
  }
}
