import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RequestsServiceService} from "../services/requests-service.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-rectification-answer',
  templateUrl: './rectification-answer.component.html',
  styleUrls: ['./rectification-answer.component.css']
})
export class RectificationAnswerComponent {
  requests: any;
  public id: any;
  answer: any = {};
  primaryKeyValue: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private requestsService: RequestsServiceService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);
    this.primaryKeyValue = this.requestsService.getPrimaryKeyValue();
  }

  onGetRectificationRequests() {

    this.requestsService.getRectificationRequests().subscribe(data => {
      this.requests = data;
    }, err => {
      console.log(err);
    })
  }

  OnGetRectificationResponse(r: any) {
    this.router.navigateByUrl("/rectification-answer/" + r.id)
  }

  onSaveRecResponse(data: any) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    let options = {
      headers: httpHeaders
    };
    this.answer.idDataRequest = this.id;
    console.log(this.answer.answer);
    console.log(this.answer.claimAnswer);
    console.log(this.answer.idDataRequest);


    this.requestsService.saveRectificationResponse("http://localhost:8083/api/answerRectification", data).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err)
    })
  }
}
