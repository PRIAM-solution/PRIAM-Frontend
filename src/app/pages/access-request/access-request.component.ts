import { Component, OnInit } from '@angular/core';
import { GetAccessService } from '../../shared/services/api/rights/access/get-access/get-access.service';
import { SuccessErrorService } from '../../shared/services/success-error/success-error.service';
import { DataType } from '../../interfaces/data-list';
import { Processing } from '../../interfaces/data-list-purpose';
import { SecondaryActor } from '../../interfaces/data-list-transfer';
import { PrimaryKey } from '../../interfaces/rectification';
//import { DATA_LIST } from './exemple-tempo';
//import { DATA_LIST_PURPOSE } from './exemple-tempo';
//import { DATA_LIST_TRANSFER } from './exemple-tempo';


@Component({
  selector: 'app-access-request',
  templateUrl: './access-request.component.html',
  styleUrls: ['./access-request.component.css']
})

export class AccessRequestComponent implements OnInit {
  constructor(
    private getAccessService: GetAccessService,
    private successErrorService: SuccessErrorService,
  ) {}

  idRef: number = 0;
  dataList: DataType[] = [];
  dataListByPurpose: Processing[] = [];
  dataListTransfer : SecondaryActor[] = [];
  euCountries = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'];
  euActors: SecondaryActor[] = this.dataListTransfer.filter(actor => this.euCountries.includes(actor.country));
  nonEuActors: SecondaryActor[] = this.dataListTransfer.filter(actor => !this.euCountries.includes(actor.country));

  ngOnInit() {
    this.getPersonalDataList();
    this.getPersonalDataListByPurpose();
    this.getPersonalDataListTransfer();
  }

  getPersonalDataList() {
    this.getAccessService.getPersonalDataList(this.idRef).subscribe(
      response => {
        this.dataList = response;
        this.successErrorService.handleSuccess('getPersonalDataList', response);
      },
      error => {
        this.successErrorService.handleError('getPersonalDataList', error);
      }
    );
  }

  getPersonalDataListByPurpose() {
    this.getAccessService.getPersonalDataListByPurpose(this.idRef).subscribe(
      response => {
        this.dataListByPurpose = response;
        this.successErrorService.handleSuccess('getPersonalDataListByPurpose', response);
      },
      error => {
        this.successErrorService.handleError('getPersonalDataListByPurpose', error);
      }
    );
  }

  getPersonalDataListTransfer() {
    this.getAccessService.getPersonalDataListTransfer(this.idRef).subscribe(
      response => {
        this.dataListTransfer = response;
        this.successErrorService.handleSuccess('getPersonalDataListTransfer', response);
      },
      error => {
        this.successErrorService.handleError('getPersonalDataListTransfer', error);
      }
    );
  }

  hasActorOutsideEu(dataList: SecondaryActor[]): boolean {
    return dataList.some(actor => !this.euCountries.includes(actor.country));
  }

  getPrimaryKeys(dataType: any, rowIndex: number) {
    this.getAccessService.primaryKeys = dataType.data
      .filter((data: any) => data.isPrimaryKey)
      .map((data: any) => ({
        primaryKeyValue: data.dataValue[rowIndex],
        primaryKeyName: data.dataName
      }
    ));
  }

  getNonPrimaryKeysData(dataType: any, rowIndex: number) {
  this.getAccessService.nonPrimaryKeys = dataType.data
    .filter((data: any) => !data.isPrimaryKey)
    .map((data: any) => ({
      dataValue: data.dataValue[rowIndex],
      dataName: data.dataName,
      dataId: data.dataId,
      dataType: dataType.dataTypeName
    }));
}

}
