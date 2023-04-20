import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UiConfirmDataInterface} from "../../interface/ui-confirm-data.interface";

@Component({
  selector: 'app-ul-confirm',
  templateUrl: './ul-confirm.component.html',
  styleUrls: ['./ul-confirm.component.scss']
})
export class UlConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<UlConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public context: UiConfirmDataInterface) {
  }

  onClickClose(accepted: boolean): void {
    this.dialogRef.close(accepted);
  }

}
