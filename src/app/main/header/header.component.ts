import {Component} from '@angular/core';
import {BdSidenavService, ShoppingCarService} from '../../shared/service';
import {ProductInterface} from '../../shared/interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  shoppingCarProduct: ProductInterface[] = [];

  constructor(private readonly sidebar: BdSidenavService, private readonly router: Router, private readonly shoppingCarService: ShoppingCarService) {
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
    this.sidebar.toggle();
  }

  onClickHome(): void {
    this.router.navigate(['./main']).then();
  }

}
