import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgxSpinnerService} from 'ngx-spinner';
import {lastValueFrom} from 'rxjs';
import {AccountsService} from 'src/app/service/accounts/accounts.service';
import {UserService} from 'src/app/service/user/user.service';
import {UlBaseComponent} from 'src/app/shared/component';
import {REGEX_CONTROL_CONST} from 'src/app/shared/const';
import {UserDataInterface} from 'src/app/shared/interface';
import {CustomValidators} from 'src/app/shared/validator';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends UlBaseComponent implements OnInit {
  authForm!: FormGroup;
  rolList: string[] = [
    'Admin',
    'Guest',
    'Super Admin',
    'Supplier'
  ];

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA)
    private dataInject: { userSelected?: UserDataInterface, isEditing: boolean } = {isEditing: false},
    private readonly authService: UserService,
    private readonly account: AccountsService,
    private readonly builder: FormBuilder,
    protected override _snackBar: MatSnackBar,
    protected override _spinner: NgxSpinnerService) {
    super(_spinner, _snackBar);
    console.log(dataInject);
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
    const nameValidator = [Validators.required, Validators.pattern(REGEX_CONTROL_CONST.naturalName), Validators.minLength(5), Validators.maxLength(199)];
    if (this.dataInject && this.dataInject.userSelected) {
      this.authForm = this.builder.group({
        name: ['', [...nameValidator]],
        job: ['', [Validators.required, Validators.pattern(REGEX_CONTROL_CONST.alphabetic)]],
        password: ['', [Validators.required]],
      });
      this.authForm = this.builder.group({
        ...this.authForm.controls,
        rePassword: ['', [Validators.required, CustomValidators.equals(this.authForm.controls['password'])]],
      });

    } else {
      this.authForm = this.builder.group({
        name: ['', [...nameValidator]],
        job: ['', [Validators.required, Validators.pattern(REGEX_CONTROL_CONST.alphabetic)]],
        password: ['', [Validators.required]],
      });
      this.authForm = this.builder.group({
        ...this.authForm.controls,
        rePassword: ['', [Validators.required, CustomValidators.equals(this.authForm.controls['password'])]],
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

  fieldHasError(key: string): boolean {
    return (this.authForm.controls[key].touched || this.authForm.controls[key].dirty) ? Boolean(this.authForm.controls[key].errors) : false;
  }
}
