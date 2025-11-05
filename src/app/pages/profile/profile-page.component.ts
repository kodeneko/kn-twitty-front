import { SectionComponent } from './../../shared/components/section/section.component';
import { catchError, map, of, startWith } from 'rxjs';
import { ObservableRes } from '../../shared/models/observable-res.model';
import { TwitterUserResponse } from '../../shared/models/twitter/twitter-user-response.model';
import { User } from '../../shared/models/user.model';
import { UserService } from './../../shared/services/user.service';
import { Component, inject, OnInit } from '@angular/core';
import { ErrorBack } from '../../shared/models/api/error-back.model';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { SubtitleComponent } from '../../shared/components/subtitle/subtitle.component';

@Component({
  selector: 'app-profile-page',
  imports: [JsonPipe, AsyncPipe, SubtitleComponent, SectionComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.less'
})
export class ProfilePageComponent implements OnInit {

  private userService = inject(UserService);

  public userInfo$!: ObservableRes<User>;
  public userTwitterInfo$!: ObservableRes<TwitterUserResponse>;
      
  ngOnInit(): void {
    this.userInfo$ = this.userService.getUserInfo()      
      .pipe(
        map(data => ({ data, loading: false, error: null })),
        startWith({ data: null, loading: true, error: null }),
        catchError((error: ErrorBack) => of({ data: null, loading: false, error }))
      );
    this.userTwitterInfo$ = this.userService.getUserTwitterInfo()      
      .pipe(
        map(data => ({ data, loading: false, error: null })),
        startWith({ data: null, loading: true, error: null }),
        catchError((error: ErrorBack) => of({ data: null, loading: false, error }))
      );
  }
}
