import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  title: string = "User Details";
  user: User = new User();
  userId: number = 0;
  submitBtnTitle: string = "Submit";
  
  constructor(
    private userSvc: UserService,
    private route: ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.route.params.subscribe(parms => this.userId = parms["id"]);
    this.userSvc.get(this.userId).subscribe(
      resp => {
        this.user = resp as User;},
      err => {console.log(err)}
    );

  }

}

