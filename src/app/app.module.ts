import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, NgForm, ControlContainer, FormGroup} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
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

import { AppComponent } from './app.component';SendFormComponent
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogOverviewExampleDialog} from './edit-dialog/edit-dialog.component';
import {TextMaskModule} from 'angular2-text-mask';
import {SendDialogComponent, SendFormComponent} from './send-form/send-form.component';
import {MainTableComponent} from './main-table/main-table.component';
import {HttpService, RequestService} from './request.service';
import { EditFormComponent } from './edit-form/edit-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog,
    SendFormComponent,
    SendDialogComponent,
    MainTableComponent,
    EditFormComponent,
  ],
  imports: [
    // NgForm,
    HttpClientModule,
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
  providers: [SendFormComponent, RequestService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
