import { Component } from '@angular/core';
import {HttpClientModule, HttpHeaders} from "@angular/common/http";
import {RequestsServiceService} from "../services/requests-service.service";

@Component({
  selector: 'app-new-erasure-request',
  templateUrl: './new-erasure-request.component.html',
  styleUrls: ['./new-erasure-request.component.css']
})
export class NewErasureRequestComponent {
  rectifData: any = {};
  data: any;
  idRef: any;
  attributes: any;
  primaryKeyValue:any;
  constructor(private http: HttpClientModule, private requestsService: RequestsServiceService) {

  }

  ngOnInit(): void {
    this.idRef = this.requestsService.getIdRef();
    this.attributes = this.requestsService.getAttributes();
    this.primaryKeyValue = this.requestsService.getPrimaryKeyValue();
  }

  onSaveErasureRequest(data: any) {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });

    let options = {
      headers: httpHeaders
    };

    this.rectifData.idRef = this.idRef;
    //this.rectifData.attribute = this.selectOption;
    console.log(this.rectifData.attribute);
    console.log(this.rectifData.claim);
    console.log("yes yes yes ye s ye sys sys"+this.primaryKeyValue)
    data.primaryKeyValue = this.primaryKeyValue;
    this.requestsService.saveRectificationRequest("http://localhost:8083/api/erasureParams", data).
    subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err)
    })
  }
}
