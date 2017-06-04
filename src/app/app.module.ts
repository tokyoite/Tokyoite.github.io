import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ConfirmationService, DataTableModule, SharedModule, ConfirmDialogModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { CommonModule, LocationStrategy } from '@angular/common';
import { RaceCalculatorComponent } from './features/Calculator/calculator.component';

@NgModule({
    declarations: [
        AppComponent,
        RaceCalculatorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule.forChild([
            { path: '/', component: RaceCalculatorComponent },
        ]),
        NoopAnimationsModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
