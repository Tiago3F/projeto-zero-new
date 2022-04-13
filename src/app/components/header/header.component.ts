import { Component, OnInit } from '@angular/core';
import {SocialAuthService} from 'angularx-social-login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    public socialAuthServive: SocialAuthService) {
}

logout(): void {
this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
}

  ngOnInit(): void {
  }

}
