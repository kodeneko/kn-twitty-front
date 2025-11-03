import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { TwitterCountsResponse } from '../models/twitter/twitter-count-response.model';
import { ErrorBack } from '../models/api/error-back.model';
import { TwitterSearchResponse } from '../models/twitter/twitter-search-response.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private http = inject(HttpClient);
  
  private apiUrl = `${environment.backUrl}/posts`;

  count(query: string, days: number): Observable<TwitterCountsResponse> {
    const params = new HttpParams()
      .set('query', query)
      .set('days', days);
    return this.http.get(`${this.apiUrl}/count`, { withCredentials: true, params })
      .pipe(
        catchError((err: HttpErrorResponse) => throwError(() => err.error as ErrorBack))
      );
  }

  list(days: number): Observable<TwitterSearchResponse> {
    const params = new HttpParams()
      .set('days', days);
    return this.http.get(`${this.apiUrl}/list`, { withCredentials: true, params })
      .pipe(
        catchError((err: HttpErrorResponse) => throwError(() => err.error as ErrorBack))
      );
  }
}
