import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  title: string = "Vendor-Create";
  vendor: Vendor = new Vendor();
  submitBtnTitle: string = "Create";
  http: any;

  constructor(
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  create(){
    this.vendorSvc.create(this.vendor).subscribe(
      resp => { this.vendor = resp as Vendor;
                this.router.navigateByUrl("/vendor-list")},
      err => { console.log(err) }
    );
  }

}
