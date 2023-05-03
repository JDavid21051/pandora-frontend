import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/service/auth/auth.service';
import {UlBaseComponent} from 'src/app/shared/component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgxSpinnerService} from 'ngx-spinner';
import {UserListInterface} from 'src/app/shared/interface';
import {lastValueFrom} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent extends UlBaseComponent implements OnInit {
  public userList: UserListInterface[] = [];

  constructor(
    private readonly userService: AuthService,
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
    lastValueFrom(this.userService.list({page: 1, per_page: 12})).then(
      (response) => {
        if (response && response.total > 0) {
          console.log(response);
          this.userList = response.data;
          this.userList = [...this.userList];
          this.showSuccess('Listado cargado con éxito!');
        } else {
          this.showError('Ha ocurrido un error obteniendo los usuarios !');
        }
        this.spinnerOff().then();
      }
    ).catch((errorResponse) => {
      this.showError('Ha ocurrido un error obteniendo los usuarios !');
      this.showError(errorResponse);
      console.log(errorResponse);
      this.spinnerOff().then();
    });
  }

  onClickCreateCol(): void {
    this.router.navigate(['main/admin/collection/create']).then();
  }

}
