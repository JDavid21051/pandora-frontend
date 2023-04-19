import {Component, OnInit, Input} from '@angular/core';
import {BdSidenavService} from "../../shared/service/bd-sidenav-service";
import {ProductInterface} from "../../shared/interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() shoppingCarProduct: ProductInterface[] = [];
  constructor(private readonly sidebar: BdSidenavService) {
  }

  ngOnInit(): void {
  }

  onClickSidebarToggle(): void {
    this.sidebar.toggle();
  }

}
