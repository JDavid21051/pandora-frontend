import {AfterViewInit, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {BdSidenavService, ShoppingCarService} from "../shared/service";
import {MatDrawer} from "@angular/material/sidenav";
import {ProductInterface} from "../shared/interface";
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('drawerLeft') sidebarInstance!: MatDrawer;
  // data
  shoppingCarProduct: ProductInterface[] = [];
  // control
  showFiller = false;
  mobileQuery!: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private readonly sidebar: BdSidenavService,
              private readonly changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              private readonly shoppingCarService : ShoppingCarService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
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
