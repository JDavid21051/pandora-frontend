import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BdSidenavService} from "../shared/service/bd-sidenav-service";
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

  constructor(private readonly sidebar: BdSidenavService) {
  }

  ngAfterViewInit() {
    this.sidebar.setSidenav(this.sidebarInstance);
  }

}
