import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';
import { Request } from '../../../model/request.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  title: string= 'Request Review';
  request: Request= new Request();
  requests: Request[]= [];
  requestId: number= 0;
  user: User= new User();
  userId: number= 0;

  constructor(
    private requestSvc: RequestService,
    private sysSvc: SystemService,
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.request.user=this.sysSvc.loggedInUser;



    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    this.requestSvc.reviewRequests(this.sysSvc.loggedInUser.id).subscribe(
      resp => { 
        this.requests = resp as Request[];
      },
      err=> {console.log(err);}
    );

  }

}