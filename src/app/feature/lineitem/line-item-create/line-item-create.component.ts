import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/line-item.class';
import { Product } from 'src/app/model/product.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { ProductService } from 'src/app/service/product.service';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { Request } from '../../../model/request.class';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {

  title: string= 'Line-Item-Create';
  lineItem: LineItem= new LineItem();
  lineItems: LineItem[]= [];
  request: Request= new Request();
  products: Product[]= [];
  requestId: number= 0;

  constructor(
    private lineItemSvc: LineItemService,
    private requestSvc: RequestService,
    private productSvc: ProductService,
    private sysSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.request.user=this.sysSvc.loggedInUser;
    
    this.route.params.subscribe(parms => this.requestId = parms["id"]);
    this.requestSvc.get(this.requestId).subscribe(
      resp => { this.lineItem.request = resp as Request;},
            err=> {console.log(err);}
    );
        
    this.productSvc.list()
    .subscribe(
      resp => { 
        this.products = resp as Product[];
      },                
      err => {
        console.log(err);}
    );
 
  }

  save() {
    this.lineItemSvc.create(this.lineItem).subscribe(
      resp => {this.lineItem= resp as LineItem;
              this.router.navigateByUrl('/request-lines/'+this.requestId)},
      err => {console.log(err);}
    );

  }

  compProduct(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }

}