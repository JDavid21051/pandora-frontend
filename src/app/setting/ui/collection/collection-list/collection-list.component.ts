import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {UserService} from 'src/app/service/user/user.service';
import {UlBaseComponent} from 'src/app/shared/component';
import {UserListInterface} from 'src/app/shared/interface';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent extends UlBaseComponent implements OnInit {
  public userList: UserListInterface[] = [];

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    protected override _snackBar: MatSnackBar,
    protected override _spinner: NgxSpinnerService) {
    super(_spinner, _snackBar);
    this.spinnerOn().then();
    this.userService.create({name: 'david', job: 'develop'}).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getUserList().then();
  }

  private async getUserList(): Promise<void> {
    this.userService.list({page: 1, per_page: 12}).subscribe({
      next: (response) => {
        if (!response) this.showError('Ha ocurrido un error obteniendo los usuarios !');
        this.userList = response.data;
        this.userList = [...this.userList];
        this.showSuccess('Listado cargado con éxito!');
        this.spinnerOff().then();
      },
      error: (errorResponse) => {
        this.showError('Ha ocurrido un error obteniendo los usuarios !');
        this.showError(errorResponse);
        this.spinnerOff().then();
      }
    });
  }

  onClickCreateCol(): void {
    this.router.navigate(['main/admin/collection/create']).then();
  }

}
