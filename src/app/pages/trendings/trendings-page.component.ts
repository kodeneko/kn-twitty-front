import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { WoeidService } from '../../shared/services/woeid.service';
import { catchError, map, of, startWith } from 'rxjs';
import { Woeid } from '../../shared/models/woeid.model';
import { ErrorBack } from '../../shared/models/api/error-back.model';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TwitterTrendingsRes } from '../../shared/models/twitter/twitter-trendings-res.model';
import { TrendingsService } from '../../shared/services/trendings.service';
import { ObservableRes, ObservableResList } from '../../shared/models/observable-res.model';

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

  public woeid$!: ObservableResList<Woeid>;
  public trendings$!: ObservableRes<TwitterTrendingsRes>;

  findPlace(form: NgForm) {
    const { place } = form.value;

    this.woeid$ = this.woeidService.get(place)
      .pipe(
        map(data => ({ data, loading: false, error: null })),
        startWith({ data: null, loading: true, error: null }),
        catchError((error: ErrorBack) => of({ data: null, loading: false, error }))
      );

  }

  getTrendings(woeid: string) {
    this.trendings$ = this.trendingsService.get(woeid)
      .pipe(
        map(data => ({ data, loading: false, error: null })),
        startWith({ data: null, loading: true, error: null }),
        catchError((error: ErrorBack) => of({ data: null, loading: false, error }))
      );
  }
}
