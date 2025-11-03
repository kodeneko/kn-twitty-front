import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { TwitterTrendingsRes } from '../models/twitter/twitter-trendings-res.model';
import { ErrorBack } from '../models/api/error-back.model';

@Injectable({
  providedIn: 'root'
})
export class TrendingsService {
  private http = inject(HttpClient);
  
  private apiUrl = `${environment.backUrl}/trendings`;

  get(woeid: string): Observable<TwitterTrendingsRes> {
    return this.http.get<TwitterTrendingsRes>(`${this.apiUrl}/${woeid}`, { withCredentials: true })
      .pipe(
        catchError((err: HttpErrorResponse) => throwError(() => err.error as ErrorBack))
      );;
  }
}
