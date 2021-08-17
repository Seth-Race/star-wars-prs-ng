import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];

  constructor(
    private vendorSvc: VendorService
  ) { }

  ngOnInit(): void {
    this.vendorSvc.list().subscribe(
      resp => {
        this.vendors= resp as Vendor[];
      },
      err => {
        console.log(err);
      } 
    );
  }

}
