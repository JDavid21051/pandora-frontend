import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {BdSidenavService, ShoppingCarService} from "../shared/service";
import {MatDrawer} from "@angular/material/sidenav";
import {ProductInterface} from "../shared/interface";
import {MediaMatcher} from "@angular/cdk/layout";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UlBaseComponent} from "../shared/component";
import {NgxSpinnerService} from "ngx-spinner";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends UlBaseComponent implements OnInit, AfterViewInit {
  @ViewChild('drawerLeft') sidebarInstance!: MatDrawer;
  // data
  shoppingCarProduct: ProductInterface[] = [];
  filterForm: FormGroup;
  // control
  showFiller = false;
  mobileQuery!: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor(private readonly sidebar: BdSidenavService,
              private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly builder: FormBuilder,
              private readonly media: MediaMatcher,
              private readonly shoppingCarService: ShoppingCarService,
              protected override _snackBar: MatSnackBar,
              protected override _spinner: NgxSpinnerService) {
    super(_spinner, _snackBar);
    this.spinnerOn().then();
    this.filterForm = builder.group({
      filterType: [0, [Validators.required]],
      category: [0, [Validators.required]]
    });
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.shoppingCarService.onListChange.subscribe({
      next: (response) => {
        this.shoppingCarProduct = response;
        this.shoppingCarProduct = [...this.shoppingCarProduct];
      },
      error: (errorResponse) => {
        console.log(errorResponse)
      },
    });
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.spinnerOff().then();
  }

  ngAfterViewInit() {
    this.sidebar.setSidenav(this.sidebarInstance);
  }


}
