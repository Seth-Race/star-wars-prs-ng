import { Injectable } from '@angular/core';
import { User } from '../model/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
    loggedInUser: User = new User();

  constructor(private router: Router) { }

  isAdmin(): boolean {
    return (this.loggedInUser == null) ? false : this.loggedInUser.admin;
  }

  checkLogin(): void {
      if (this.loggedInUser.id == 0) {
          this.router.navigateByUrl("/user-login");
      }
  }

}