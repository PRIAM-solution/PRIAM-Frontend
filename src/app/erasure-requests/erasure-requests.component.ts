import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RequestsServiceService} from "../services/requests-service.service";

@Component({
  selector: 'app-erasure-requests',
  templateUrl: './erasure-requests.component.html',
  styleUrls: ['./erasure-requests.component.css']
})
export class ErasureRequestsComponent {
  ErasureRequests:any
  constructor(private router: Router,private requestsService: RequestsServiceService) {

  }

  ngOnInit():void{
    this.onGetErasureRequests();
  }

  onGetErasureRequests() {
    this.requestsService.getErasureRequests().
    subscribe(data=>{
      const ErasureRequestsArray = Object.values(data);
      this.ErasureRequests = ErasureRequestsArray.filter(item => item.response === false);
    },err=>{
      console.log(err);
    })
  }

  OnGetErasureResponse(r:any) {
    this.router.navigateByUrl("/erasure-answer/"+r.id)
    console.log(r.id);
  }


}
