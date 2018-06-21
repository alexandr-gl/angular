import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
// import {DialogOverviewExample, DialogOverviewExampleDialog} from './app/dialog-overview-example';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatDividerModule,
  MatTreeModule,
  MatFormFieldModule
} from '@angular/material';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogOverviewExampleDialog, ModalComponent} from './modal/modal.component';
import {ModalService} from './modal/modal.service';
import { ResultComponent } from './result/result.component';
import {TextMaskModule} from 'angular2-text-mask';
import { SendFormComponent } from './send-form/send-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    DialogOverviewExampleDialog,
    SendFormComponent
  ],
  imports: [
    // NgForm,
    FormsModule,
    TextMaskModule,
    CdkTableModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserModule,
    MatFormFieldModule
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
