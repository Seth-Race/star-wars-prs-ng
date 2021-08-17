import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

 
  title: string = "Request Details";
  request: Request = new Request();
  requestId: number = 0;
  submitBtnTitle: string = "Submit";

  constructor(
    private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    this.requestSvc.get(this.requestId).subscribe(
      resp => {
        this.request = resp as Request;},
        err => {console.log(err)}
    );
  }

}
