import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {RequestsServiceService} from "../services/requests-service.service";

@Component({
  selector: 'app-rectification-requests',
  templateUrl: './rectification-requests.component.html',
  styleUrls: ['./rectification-requests.component.css']
})
export class RectificationRequestsComponent {
  requests:any
  constructor(private router: Router,private requestsService: RequestsServiceService) {

  }

  ngOnInit():void{
    this.onGetRectificationRequests();
  }

  onGetRectificationRequests() {

    this.requestsService.getRectificationRequests().
    subscribe(data=>{
      const requestsArray = Object.values(data);
      this.requests = requestsArray.filter(item => item.response === false);
    },err=>{
      console.log(err);
    })
  }

  OnGetRectificationResponse(r:any) {
    this.router.navigateByUrl("/rectification-answer/"+r.id)
    console.log(r.id);
  }

}
