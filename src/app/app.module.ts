import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, NgForm, ControlContainer, FormGroup} from '@angular/forms';
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
import {TextMaskModule} from 'angular2-text-mask';
import {SendDialogComponent, SendFormComponent} from './send-form/send-form.component';
import {MainTableComponent} from './main-table/main-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    DialogOverviewExampleDialog,
    SendFormComponent,
    SendDialogComponent,
    MainTableComponent,
  ],
  imports: [
    // NgForm,
    ReactiveFormsModule,
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
    MatFormFieldModule,
  ],
  entryComponents: [DialogOverviewExampleDialog, SendDialogComponent],
  providers: [ModalComponent, SendFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
