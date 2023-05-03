import {Component, Inject, OnInit} from '@angular/core';
import {UlBaseComponent} from 'src/app/shared/component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/service/auth/auth.service';
import {AccountsService} from 'src/app/service/accounts/accounts.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgxSpinnerService} from 'ngx-spinner';
import {UserDataInterface} from 'src/app/shared/interface';
import {lastValueFrom} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends UlBaseComponent implements OnInit {
  authForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) private userSelected: UserDataInterface,
    private readonly authService: AuthService,
    private readonly account: AccountsService,
    private readonly builder: FormBuilder,
    protected override _snackBar: MatSnackBar,
    protected override _spinner: NgxSpinnerService) {
    super(_spinner, _snackBar);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.initForm();
  }

  private async createUser(toCreate: UserDataInterface): Promise<void> {
    lastValueFrom(this.authService.create(toCreate)).then(
      (response) => {
        console.log(response);
        if (response) {
          this.showSuccess('Usuario creado con éxito');
        }
      }
    ).catch((errorResponse) => {
      this.showSuccess(errorResponse);
      console.log(errorResponse);
    });
  }

  private initForm(): void {
    if (this.userSelected) {
      this.authForm = this.builder.group({
        name: ['', [Validators.required, Validators.pattern('^[a-zA-Z áéíóúÚÓÍÉÁ]+$')]],
        job: ['', [Validators.required, Validators.pattern('^[a-z0-9A-Z áéíóúÚÓÍÉÁ]+$')]],
      });
    } else {
      this.authForm = this.builder.group({
        name: ['', [Validators.required, Validators.pattern('^[a-zA-Z áéíóúÚÓÍÉÁ]+$')]],
        job: ['', [Validators.required, Validators.pattern('^[a-z0-9A-Z áéíóúÚÓÍÉÁ]+$')]],
      });
    }

  }

  public onClickSubmit(): void {
    if (this.authForm.valid) {
      const toSend: UserDataInterface = {
        name: this.authForm.controls['name'].value,
        job: this.authForm.controls['job'].value,
      };
      this.createUser(toSend).then();
    }
  }

  public onClickBack(): void {
    this.dialogRef.close({response: null});
  }
}
