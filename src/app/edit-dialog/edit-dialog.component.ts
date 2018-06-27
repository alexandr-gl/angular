import { Component, OnInit, OnDestroy, ElementRef, Input, Inject, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {RequestService} from '../request.service';
import {NgForm, FormBuilder, FormGroup, Validators, FormsModule, ValidatorFn, AbstractControl, FormControl} from '@angular/forms';
import {EditFormComponent} from '../edit-form/edit-form.component';


@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: '<app-edit-form [id]="this.data.id" [close]="this.dialogRef"></app-edit-form>',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
