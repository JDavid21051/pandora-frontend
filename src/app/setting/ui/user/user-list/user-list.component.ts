import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgxSpinnerService} from 'ngx-spinner';
import {lastValueFrom, switchMap} from 'rxjs';
import {AuthService} from 'src/app/service';
import {UserService} from 'src/app/service/user/user.service';
import {UlBaseComponent} from 'src/app/shared/component';
import {UserListInterface} from 'src/app/shared/interface';

import {UserFormComponent} from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends UlBaseComponent implements OnInit {
  public userList: UserListInterface[] = [];

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
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
    this.onLogin();
  }

  private async getUserList(): Promise<void> {
    this.spinnerOn().then();
    setTimeout(() => {
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
      data: {
        userSelected: null,
        isEditing: false
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  onClickUpdate(userSelected: string): void {
    if (userSelected && userSelected !== '') {
      this.userService.getById(userSelected)
        .pipe(
          switchMap((response) => {
            return this.dialog.open(UserFormComponent, {
              data: {
                userSelected: response,
                isEditing: false
              },
            }).afterClosed();
            /*dialogRef.afterClosed()
              .subscribe({
                next: (response) => {
                  console.log('The dialog was closed');
                  console.log(response);
                }
              });*/
          })
        )
        .subscribe({
          next: (response) => {
            console.log(response);
          }
        });
      // a la vez
      /*zip(
        this.userService.getById(userSelected),
        this.dialog.open(UserFormComponent, {
          data: null,
        }).afterClosed()
      ).subscribe((response) => {
        console.log(response[0]);
        console.log(response[1]);
      });*/
    }
  }

  onLogin(): void {
    this.authService.getById('').subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }

}
