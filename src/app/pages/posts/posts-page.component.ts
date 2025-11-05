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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { InputComponent } from '../../shared/components/input/input.component';
import { SelectComponent } from '../../shared/components/select/select.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [ButtonComponent, FormsModule, AsyncPipe, SectionComponent, SubtitleComponent, FontAwesomeModule, InputComponent, SelectComponent, ButtonComponent],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.less'
})
export class PostsPageComponent {

  public faCaretDown = faCaretDown;
  private postService = inject(PostsService);
  public optsDays = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
  ];

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

  public user = { 
    query: 'patata', 
    days: 1 
  };
  
  onSubmit(form: NgForm) { 
    console.log('Form:', form.value);
    console.log('Form:', this.user);
  }
}
