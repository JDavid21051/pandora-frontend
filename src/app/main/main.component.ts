import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {BdSidenavService} from '../shared/service';
import {MatDrawer} from '@angular/material/sidenav';
import {ProductInterface} from '../shared/interface';
import {MediaMatcher} from '@angular/cdk/layout';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UlBaseComponent} from '../shared/component';
import {NgxSpinnerService} from 'ngx-spinner';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonToggleChange} from '@angular/material/button-toggle';
import {CATEGORY_LIST_CONST} from '../shared/const';
import {TAG_LIST_CONST} from '../shared/const/tag-list.const';
import {Router} from '@angular/router';
import {FilterTypeInterface} from '../shared/interface/filter-type.interface';

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
  mobileQuery!: MediaQueryList;
  categoryList: any[] = [];
  tagList: any[] = [];
  promoList: any[] = [];
  // control
  showFiller = false;
  filteredCategory = false;
  filteredTag = false;
  filteredPromo = false;
  private readonly _mobileQueryListener: () => void;

  constructor(private readonly sidebar: BdSidenavService,
              private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly builder: FormBuilder,
              private readonly router: Router,
              private readonly media: MediaMatcher,
              protected override _snackBar: MatSnackBar,
              protected override _spinner: NgxSpinnerService) {
    super(_spinner, _snackBar);
    this.spinnerOn().then();
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.filterForm = builder.group({
      filterType: [0, [Validators.required]],
      category: [null, [Validators.required]],
      tag: [null, [Validators.required]]
    });
    this.categoryList = CATEGORY_LIST_CONST;
    this.tagList = TAG_LIST_CONST;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.spinnerOff().then();
  }

  ngAfterViewInit(): void {
    this.sidebar.setSidenav(this.sidebarInstance);
  }

  onChangeFilter(filterType: MatButtonToggleChange): void {
    this.filteredCategory = (filterType.value === 1);
    this.filteredTag = (filterType.value === 2);
    this.filteredPromo = (filterType.value === 3);
    const filterKey: FilterTypeInterface = {
      filter: (filterType.value === 1 ? 'category' : (filterType.value === 2 ? 'tag' : (filterType.value === 3 ? 'promo' : 'all')))
    };
    if (filterType.value !== 1 && filterType.value !== 2) {
      this.router.navigate(['product/list'], {queryParams: filterKey}).then();
    }
  }


}
