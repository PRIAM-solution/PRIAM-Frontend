import {Component, Input, OnInit} from '@angular/core';
import {Processing} from "../core/Models/processing-model";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProcessingService} from "../core/services/processing-service";
import {DataService} from "../core/services/data-service";

@Component({
  selector: 'app-processing-details',
  templateUrl: './processing-details.component.html',
  styleUrls: ['./processing-details.component.scss']
})
export class ProcessingDetailsComponent implements OnInit {
  @Input() processing!: Processing;
  attributeName!: string;
  headers = ['Create', 'Read', 'Update', 'Delete'];

  /*rows = [
    {
      title: 'Last Name'
    },
    {
      title: 'First Name'
    },
    {
      title: 'Age'
    },
    {
      title: 'Address'
    }
  ];*/
  constructor(private route: ActivatedRoute, private processingService: ProcessingService, private dataService: DataService) {
  }

  ngOnInit() {
    const processingId = +this.route.snapshot.params['id'];
    console.log("iddd" + processingId);
    this.processing = this.processingService.getProcessingById(processingId);
  }

  // @ts-ignore
  public getAttributeNameById(dataId: number):string {
    this.processingService.getAttributeNameById(dataId).
    subscribe(data=>{
      return data;
    },err=>{
      console.log(err);
    });
  }
}
