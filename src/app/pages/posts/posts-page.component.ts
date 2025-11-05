import { Component, inject } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { AsyncPipe } from '@angular/common';
import { catchError, map, of, startWith } from 'rxjs';
import { ErrorBack } from '../../shared/models/api/error-back.model';
import { ObservableRes } from '../../shared/models/observable-res.model';
import { TwitterCountsResponse } from '../../shared/models/twitter/twitter-count-response.model';
import { TwitterSearchResponse } from '../../shared/models/twitter/twitter-search-response.model';
import { SectionComponent } from '../../shared/components/section/section.component';
import { SubtitleComponent } from '../../shared/components/subtitle/subtitle.component';

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [AsyncPipe, SectionComponent, SubtitleComponent],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.less'
})
export class PostsPageComponent {

  private postService = inject(PostsService);

  countList$: ObservableRes<TwitterCountsResponse> = this.postService.count('cat', 3)
    .pipe(
      map(data => {
        console.log('countList', data);
        return { data, loading: false, error: null };
      }),
      startWith({ data: null, loading: true, error: null }),
      catchError((error: ErrorBack) => of({ data: null, loading: false, error }))
    );
  
  postList$: ObservableRes<TwitterSearchResponse> = this.postService.list(3)
    .pipe(
      map(data => {
        console.log('postList', data);
        return { data, loading: false, error: null };
      }),
      startWith({ data: null, loading: true, error: null }),
      catchError((error: ErrorBack) => of({ data: null, loading: false, error }))
    );

}
