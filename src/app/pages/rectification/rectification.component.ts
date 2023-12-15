import { Component } from '@angular/core';
import { GetAccessService } from '../../shared/services/api/rights/access/get-access/get-access.service';
import { PostRectificationService } from '../../shared/services/api/rights/rectification/post-rectification/post-rectification.service';
import { SuccessErrorService } from '../../shared/services/success-error/success-error.service';
import { PrimaryKey } from '../../interfaces/rectification';
import { Rectification } from '../../interfaces/rectification';
import { Data } from '../../interfaces/rectification';

@Component({
  selector: 'app-rectification',
  templateUrl: './rectification.component.html',
  styleUrls: ['./rectification.component.css']
})
export class RectificationComponent {
  constructor(
    private getAccessService: GetAccessService,
    private postRectificationService: PostRectificationService,
    private successErrorService: SuccessErrorService,
  ) {}

  ngOnInit() {
  }

  postRectification() {
    const rectification: Rectification = {
      dataSubjectId: 0,
      dataTypeName: '',
      data: {dataId: 0},
      newValue: '',
      claim: '',
      primaryKeys: this.getAccessService.primaryKeys,
    };

    this.postRectificationService.postRectification(rectification).subscribe(
      response => this.successErrorService.handleSuccess('postRectification', response),
      error => this.successErrorService.handleError('postRectification', error),
    );
  }
}
