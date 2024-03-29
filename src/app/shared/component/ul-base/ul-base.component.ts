import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {AbstractControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-ul-base',
  templateUrl: './ul-base.component.html',
  styleUrls: ['./ul-base.component.scss']
})
export class UlBaseComponent implements OnInit {
  textAlt = '';

  constructor(protected readonly _spinner: NgxSpinnerService,
              protected readonly _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.textAlt = 'Mensaje default'
  }

  public showSuccess(message: string): void {
    this._snackBar.open(message || this.textAlt, '', {
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  public getControls(_baseForm: FormGroup): { [key: string]: AbstractControl } {
    return _baseForm.controls
  }

  public async spinnerOff(): Promise<any> {
    this._spinner.hide().then((response) => {
      return response
    });
  }

  public async spinnerOn(): Promise<any> {
    this._spinner.show().then((response) => {
      return response
    });
  }

}
