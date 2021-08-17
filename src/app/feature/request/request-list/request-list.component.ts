import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Request } from '../../../model/request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  title: string= 'Request List';
  requests: Request[]= [];

  constructor(
    private requestSvc: RequestService
  ) { }

  ngOnInit(): void {
    this.requestSvc.list()
    .subscribe(
      resp => {
        this.requests = resp as Request[];
        console.log("list of requests: ", this.requests);
      },
      err => {
        console.log(err);
      }
    );
  }

}