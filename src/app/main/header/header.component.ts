import {Component, Input, OnChanges} from '@angular/core';
import {BdSidenavService} from '../../shared/service';
import {ProductInterface} from '../../shared/interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnChanges {
  @Input() shoppingCarProduct: ProductInterface[] = [];

  constructor(private readonly sidebar: BdSidenavService, private readonly router: Router) {
  }

  ngOnChanges(): void {
    this.shoppingCarProduct = [...this.shoppingCarProduct];
  }

  onClickSidebarToggle(): void {
    this.sidebar.toggle();
  }

  onClickHome(): void {
    this.router.navigate(['./main']).then();
  }

}
