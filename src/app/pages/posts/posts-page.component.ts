import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts-page',
  imports: [CommonModule],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.less'
})
export class PostsPageComponent implements OnInit {

  private postService = inject(PostsService);
  public countList: any;
  public postsList: any;

  ngOnInit(): void {
    this.postService.count('cat', 3).subscribe({
      next: (res) => this.countList = res,
      error: () => console.log('error posts count')
    })
    this.postService.list('cat', 3).subscribe({
      next: (res) => this.postsList = res,
      error: () => console.log('error posts list')
    })
  }
}
