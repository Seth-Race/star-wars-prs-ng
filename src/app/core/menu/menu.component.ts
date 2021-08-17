import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  loggedInUser: User = new User();
  
  

  constructor(
    private systemSvc: SystemService
  ) { }

  ngOnInit(): void {
    this.loggedInUser = this.systemSvc.loggedInUser;
    //logout display assumes checkLogin() function in all component.
    this.menuItems = [
      new MenuItem("Logout", "/login", "Logout"),
      new MenuItem("User", "/user-list", "Users"),
      new MenuItem("Vendor", "/vendor-list", "Vendors"),
      new MenuItem("Product", "/product-list", "Products"),
      new MenuItem("Request", "/request-list", "Requests")
    ]


    let reviewer = this.systemSvc.loggedInUser.reviewer;
    if (reviewer == true)
    this.menuItems.push(new MenuItem("Review", "/request-review", "Review"));
  }
  
  // reviewer?
  // let displayStr: string = (this.systemSvc.loggedInUser.id == 0) ? "Login" : "Logout";
  // new MenuItem("Review", "/request-review", "Review")   

    
}
