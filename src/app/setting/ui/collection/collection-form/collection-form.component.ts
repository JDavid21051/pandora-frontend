import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgxSpinnerService} from 'ngx-spinner';
import {lastValueFrom} from 'rxjs';
import {AccountsService} from 'src/app/service/accounts/accounts.service';
import {UserService} from 'src/app/service/user/user.service';
import {UlBaseComponent} from 'src/app/shared/component';
import {UserDataInterface} from 'src/app/shared/interface';

@Component({
  selector: 'app-colection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.scss']
})
export class CollectionFormComponent extends UlBaseComponent implements OnInit {
  authForm!: FormGroup;

  constructor(
    private readonly collection: UserService,
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
