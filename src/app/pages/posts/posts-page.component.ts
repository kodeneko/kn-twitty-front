import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { ErrorBack } from '../../shared/models/api/error-back.model';


@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.less'
})
export class PostsPageComponent implements OnInit {

  private postService = inject(PostsService);

  countList$ = this.postService.count('cat', 3).pipe(
    map(data => ({data, loading: false, error: null})),
    startWith({data: null, loading: true, error: null}),
    catchError((error: ErrorBack) => of({data: null, loading: false, error}))
  )

  ngOnInit(): void {

  }
}
