import { TwitterUser } from '../../shared/models/twitter/twitter-user.model';
import { User } from '../../shared/models/user.model';
import { UserService } from './../../shared/services/user.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.less'
})
export class ProfilePageComponent implements OnInit {

  private userService = inject(UserService);
  private userInfo!: User;
  private userTwitterInfo!: TwitterUser;

  ngOnInit(): void {
    const userInfo$ = this.userService.getUserInfo();
    const userTwitterInfo$ = this.userService.getUserTwitterInfo();

    userInfo$.subscribe({
      next: (res) => {
        console.log('userInfo', res);
      },
      error: (err) => {
        console.log('userInfo', err);
      }
    });

    userTwitterInfo$.subscribe({
      next: (res) => {
        console.log('userInfo', res);
      },
      error: (err) => {
        console.log('userInfo', err);
      }
    });
  }

}
