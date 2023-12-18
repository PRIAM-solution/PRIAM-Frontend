import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataType } from '../../../../../../interfaces/data-list';
import { Processing } from '../../../../../../interfaces/data-list-purpose';
import { SecondaryActor } from '../../../../../../interfaces/data-list-transfer';
import { IndirectGeneratedDataList } from '../../../../../../interfaces/indirect-generated-data-list';
import { PrimaryKey } from '../../../../../../interfaces/rectification';
import { NonPrimaryKey } from '../../../../../../interfaces/rectification';
import {environment} from "../../../../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class GetAccessService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl = environment.api_data;
  primaryKeys!: PrimaryKey[];
  nonPrimaryKeys!: NonPrimaryKey[];

  getPersonalDataList(referenceId: number): Observable<DataType[]> {
    return this.httpClient.get<DataType[]>(`${this.baseUrl}/data/processedPersonalDataList/${referenceId}`);
  }

  getPersonalDataListByPurpose(referenceId: number): Observable<Processing[]> {
    return this.httpClient.get<Processing[]>(`${this.baseUrl}/data/processedPersonalDataList/purposes/${referenceId}`);
  }

  getPersonalDataListTransfer(referenceId: number): Observable<SecondaryActor[]> {
    return this.httpClient.get<SecondaryActor[]>(`${this.baseUrl}/data/processedPersonalDataList/transfer/${referenceId}`);
  }

  getIndirectAndGeneratedDataList(referenceId: number): Observable<IndirectGeneratedDataList[]> {
    return this.httpClient.get<IndirectGeneratedDataList[]>(`${this.baseUrl}/data/processedIndirectAndProducedPersonalDataList/${referenceId}`);
  }
}
