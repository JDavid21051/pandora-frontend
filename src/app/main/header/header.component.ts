import {Component} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';

import {ProductInterface} from '../../shared/interface';
import {BdSidenavService, ShoppingCarService} from '../../shared/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  shoppingCarProduct: ProductInterface[] = [];

  constructor(
    private readonly sidebar: BdSidenavService,
    private readonly router: Router,
    private readonly matSidebar: MatSidenav,
    private readonly shoppingCarService: ShoppingCarService) {
    this.shoppingCarService.onListChange.subscribe({
      next: (response: ProductInterface[]) => {
        this.shoppingCarProduct = response;
        this.shoppingCarProduct = [...this.shoppingCarProduct];
      },
      error: (errorResponse) => {
        console.log(errorResponse);
      },
    });
  }

  onClickSidebarToggle(): void {
    this.matSidebar.toggle().then();
  }

  onClickHome(): void {
    this.router.navigate(['./main']).then();
  }

}
