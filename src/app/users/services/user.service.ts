import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  
  apiUrl = 'http://localhost:3013';

  isLoggedUser() {
    return this.http.get(`${this.apiUrl}/auth/islogged`, { withCredentials: true });
  }

  logout() {
      return this.http.get<boolean>(`${this.apiUrl}/auth/logout`, { withCredentials: true });
  }
}
