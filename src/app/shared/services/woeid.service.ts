import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Woeid } from '../models/woeid.model';
import { ErrorBack } from '../models/api/error-back.model';

@Injectable({
  providedIn: 'root'
})
export class WoeidService {
  private http = inject(HttpClient);
  
  private apiUrl = `${environment.backUrl}/woeid`;

  get(place: string): Observable<Woeid[]> {
    const params = new HttpParams()
      .set('place', place);
    return this.http.get<Woeid[]>(`${this.apiUrl}`, { withCredentials: true, params })
      .pipe(
        catchError((err: HttpErrorResponse) => throwError(() => err.error as ErrorBack))
      );
  }
}
