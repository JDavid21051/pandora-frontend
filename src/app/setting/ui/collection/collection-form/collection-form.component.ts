import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/service/auth/auth.service';
import {AccountsService} from 'src/app/service/accounts/accounts.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgxSpinnerService} from 'ngx-spinner';
import {UlBaseComponent} from 'src/app/shared/component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDataInterface} from 'src/app/shared/interface';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-colection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss']
})
export class CollectionFormComponent extends UlBaseComponent implements OnInit {
  authForm!: FormGroup;

  constructor(
    private readonly collection: AuthService,
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
    lastValueFrom(this.collection.create(toCreate)).then(
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
    this.authForm = this.builder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z áéíóúÚÓÍÉÁ]+$')]],
      job: ['', [Validators.required, Validators.pattern('^[a-z0-9A-Z áéíóúÚÓÍÉÁ]+$')]],
    });
  }


  onClickSubmit(): void {
    if (this.authForm.valid) {
      const toSend: UserDataInterface = {
        name: this.authForm.controls['name'].value,
        job: this.authForm.controls['job'].value,
      };
      this.createUser(toSend).then();
    }
  }

}
