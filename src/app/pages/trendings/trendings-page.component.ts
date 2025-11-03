import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { WoeidService } from '../../shared/services/woeid.service';
import { catchError, Observable, of } from 'rxjs';
import { Woeid } from '../../shared/models/woeid.model';
import { ErrorBack } from '../../shared/models/api/error-back.model';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TwitterTrendingsRes } from '../../shared/models/twitter/twitter-trendings-res.model';
import { TrendingsService } from '../../shared/services/trendings.service';

@Component({
  selector: 'app-trendings-page',
  imports: [FormsModule, AsyncPipe, JsonPipe],
  templateUrl: './trendings-page.component.html',
  styleUrl: './trendings-page.component.less'
})
export class TrendingsPageComponent {
  private woeidService = inject(WoeidService);
  private trendingsService = inject(TrendingsService);
  public place = "";

  public woeid$!: Observable<Woeid[]>;
  public trendings$!: Observable<TwitterTrendingsRes | null>;

  findPlace(form: NgForm) {
    const { place } = form.value;

    this.woeid$ = this.woeidService.get(place)
      .pipe(
        catchError((error: ErrorBack) => {
          console.log('error woeids', error.code);
          return of([]);
        })
      );
  }

  getTrendings(woeid: string) {
    this.trendings$ = this.trendingsService.get(woeid)
      .pipe(
        catchError((error: ErrorBack) => {
          console.log('error trendings', error.code);
          return of(null);
        })
      );
  }
}
