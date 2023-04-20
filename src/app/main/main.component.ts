import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BdSidenavService, ShoppingCarService} from "../shared/service";
import {MatDrawer} from "@angular/material/sidenav";
import {ProductInterface} from "../shared/interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('drawerLeft') sidebarInstance!: MatDrawer;
  // data
  shoppingCarProduct: ProductInterface[] = [];
  // control
  showFiller = false;

  constructor(private readonly sidebar: BdSidenavService,
              private readonly shoppingCarService : ShoppingCarService) {
    this.shoppingCarService.onListChange.subscribe({
      next: (response) => {
        this.shoppingCarProduct = response;
        this.shoppingCarProduct = [...this.shoppingCarProduct];
        console.log(this.shoppingCarProduct)
      },
      error: (errorResponse) => {
        console.log(errorResponse)
      },
    });
  }

  ngAfterViewInit() {
    this.sidebar.setSidenav(this.sidebarInstance);
  }

}
