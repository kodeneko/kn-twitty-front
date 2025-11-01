import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-redirect-twitter.component',
  imports: [],
  templateUrl: './redirect-twitter.component.html',
  styleUrl: './redirect-twitter.component.less'
})
export class RedirectTwitterComponent implements OnInit {

  ngOnInit(): void {
    window.opener.postMessage('login-ok', environment.frontUrl);
    window.close();
  }

}
