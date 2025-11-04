import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorBack } from '../models/api/error-back.model';
import { TwitterUserResponse } from '../models/twitter/twitter-user-response.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  
  private apiUrl = `${environment.backUrl}/users`;

  getUserInfo(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/info`, { withCredentials: true })
      .pipe(
        catchError((err: HttpErrorResponse) => throwError(() => err.error as ErrorBack))
      );;
  }

  getUserTwitterInfo(): Observable<TwitterUserResponse> {
    return this.http.get<TwitterUserResponse>(`${this.apiUrl}/twitter`, { withCredentials: true })
      .pipe(
        catchError((err: HttpErrorResponse) => throwError(() => err.error as ErrorBack))
      );;
  }
}
