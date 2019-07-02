import { LoadingService } from './_services/loading.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { StarService } from './_services/star.service';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { FindComponent } from './find/find.component';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        FindComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        LoadingService,
        StarService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
