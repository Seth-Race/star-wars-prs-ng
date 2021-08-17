import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { Request } from '../../../model/request.class';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {

  title: string = 'Review-Approve';
  request: Request = new Request();
  requestId: number = 0;
  lineItems: LineItem[] = [];
  lineItem: LineItem = new LineItem();


  constructor(
    private requestSvc: RequestService,
    private sysSvc: SystemService,
    private lineItemSvc: LineItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    // get request from db
    this.requestSvc.get(this.requestId).subscribe(
      resp => {
        this.request = resp as Request;

        this.lineItemSvc.getLinesForRequest(this.requestId).subscribe(
          resp => {
            this.lineItems = resp as LineItem[];
          },
          err => { console.log(err); }
        );
      },
      err => { console.log(err); }
    );

  }

  approve() {
    this.requestSvc.approve(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        this.router.navigateByUrl('/request-list')
      },
      err => { console.log(err); }
    );

  }

  reject() {
    this.requestSvc.reject(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        this.router.navigateByUrl('/request-list')
      },
      err => { console.log(err); }
    );
  }

}