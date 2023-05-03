import { Component, OnInit } from '@angular/core';
import {UlBaseComponent} from '../../../../shared/component';
import {UserListInterface} from '../../../../shared/interface';
import {AuthService} from '../../../../service/auth/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgxSpinnerService} from 'ngx-spinner';
import {lastValueFrom} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {UserFormComponent} from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends UlBaseComponent implements OnInit {
  public userList: UserListInterface[] = [];

  constructor(
    private readonly userService: AuthService,
    private readonly router: Router,
    private readonly dialog: MatDialog,
    protected override _snackBar: MatSnackBar,
    protected override _spinner: NgxSpinnerService) {
    super(_spinner, _snackBar);
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
    this.spinnerOn().then();
    setTimeout(()=> {
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
        this.spinnerOff().then();
      });
    }, 1000);
  }

  onClickCreateCol(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  onClickUpdate(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
