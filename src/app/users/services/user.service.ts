import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  
  apiUrl = 'http://localhost:3013';

  isLoggedUser() {
    return this.http.get<boolean>(`${this.apiUrl}/auth/islogged`, { withCredentials: true }).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
