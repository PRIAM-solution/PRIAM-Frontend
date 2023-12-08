import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {Processing} from "../core/Models/processing-model";
import {ProcessingService} from "../core/services/processing-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RequestsServiceService} from "../services/requests-service.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})

export class ConsentComponent implements OnInit{
 processings!: Processing[];
 categoryId!: any;
 idRef!: string;
 consent: any = {}
  constructor(private processingService: ProcessingService, private requestsService: RequestsServiceService, private router: Router){}
  ngOnInit(): void {
    //this.processings = this.processingService.remplirAttributProcessings(1);
    this.processingService.setProcessings(this.processings);

  }
  onSubmitForm() {
   console.log(getProcessingIdByName.bind(this)("Order"))
    this.router.navigateByUrl(`contract`);
  }

  DataSubject(idRef: string): any {
    return this.requestsService.getDataSubject(idRef);
  }

  getDscIdRef(idRef:string): any {
    this.DataSubject(idRef).subscribe({
      next: (data: any) => {
        this.categoryId = data.dscId;
        this.processings = this.processingService.remplirAttributProcessings(this.categoryId);
        this.processingService.setProcessings(this.processings);
        }});
      }
}

function onSaveConsent(data: any) {
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
  });

  let options = {
    headers: httpHeaders
  };

}

function getProcessingIdByName(this: any, nomRecherche: string): any {
  const processingTrouve = this.processings.find((processing: { name: string; }) => processing.name === nomRecherche);

  // Si processingTrouve est défini, renvoyer son ID, sinon renvoyer undefined
  return processingTrouve ? processingTrouve.id : undefined;
}
