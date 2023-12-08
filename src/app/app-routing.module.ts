import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccessRightComponent} from "./access-right/access-right.component";
import {RectificationRequestsComponent} from "./rectification-requests/rectification-requests.component";
import {NewRectificationRequestComponent} from "./new-rectification-request/new-rectification-request.component";
import {RectificationAnswerComponent} from "./rectification-answer/rectification-answer.component";
import {NewErasureRequestComponent} from "./new-erasure-request/new-erasure-request.component";
import {ErasureRequestsComponent} from "./erasure-requests/erasure-requests.component";
import {ErasureAnswerComponent} from "./erasure-answer/erasure-answer.component";
import {ProcessingComponent} from "./processing/processing.component";
import {ProcessingDetailsComponent} from "./processing-details/processing-details.component";
import {ContractComponent} from "./contract/contract.component";
import {ConsentComponent} from "./consent/consent.component";
import {DataComponent} from "./data/data.component";

const routes: Routes = [
  {
    path: "access-right", component:AccessRightComponent
  },
  {
    path: "rectification-requests", component:RectificationRequestsComponent
  },
  {
    path: "new-rectification-request", component:NewRectificationRequestComponent
  },
  {
    path: "rectification-answer/:id", component:RectificationAnswerComponent
  },
  {
    path: "new-erasure-request", component:NewErasureRequestComponent
  },
  {
    path: "erasure-requests", component:ErasureRequestsComponent
  }
  ,
  {
    path: "erasure-answer/:id", component:ErasureAnswerComponent
  },
  { path: 'processing/:id', component: ProcessingDetailsComponent },
  { path: 'consent', component: ConsentComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'data', component: DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
