import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccessRightComponent } from './access-right/access-right.component';
import { RectificationRequestsComponent } from './rectification-requests/rectification-requests.component';
import { NewRectificationRequestComponent } from './new-rectification-request/new-rectification-request.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { RectificationAnswerComponent } from './rectification-answer/rectification-answer.component';
import { NewErasureRequestComponent } from './new-erasure-request/new-erasure-request.component';
import { ErasureRequestsComponent } from './erasure-requests/erasure-requests.component';
import { ErasureAnswerComponent } from './erasure-answer/erasure-answer.component';
import {ProcessingComponent} from "./processing/processing.component";
import {ProcessingDetailsComponent} from "./processing-details/processing-details.component";
import {ContractComponent} from "./contract/contract.component";
import {ConsentComponent} from "./consent/consent.component";
import {DataComponent} from "./data/data.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccessRightComponent,
    RectificationRequestsComponent,
    NewRectificationRequestComponent,
    RectificationAnswerComponent,
    NewErasureRequestComponent,
    ErasureRequestsComponent,
    ErasureAnswerComponent,
    ProcessingComponent,
    ProcessingDetailsComponent,
    ContractComponent,
    ConsentComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
