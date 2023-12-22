import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataType } from '../../../../../../interfaces/data-list';
import { Processing } from '../../../../../../interfaces/data-list-purpose';
import { SecondaryActor } from '../../../../../../interfaces/data-list-transfer';
import { IndirectGeneratedDataList } from '../../../../../../interfaces/indirect-generated-data-list';
import { PrimaryKey } from '../../../../../../interfaces/rectification';
import { NonPrimaryKey } from '../../../../../../interfaces/rectification';

@Injectable({
  providedIn: 'root'
})
export class GetAccessService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080';
  primaryKeys!: PrimaryKey[];
  nonPrimaryKeys!: NonPrimaryKey[];

  getPersonalDataList(referenceId: number): Observable<DataType[]> {
    return this.httpClient.get<DataType[]>(`${this.baseUrl}/data/getPersonalDataList/${referenceId}`);
  }

  getPersonalDataListByPurpose(referenceId: number): Observable<Processing[]> {
    return this.httpClient.get<Processing[]>(`${this.baseUrl}/data/getPersonalDataListByPurpose/${referenceId}`);
  }

  getPersonalDataListTransfer(referenceId: number): Observable<SecondaryActor[]> {
    return this.httpClient.get<SecondaryActor[]>(`${this.baseUrl}/data/getPersonalDataListTransfer/${referenceId}`);
  }

  getIndirectAndGeneratedDataList(referenceId: number): Observable<IndirectGeneratedDataList[]> {
    return this.httpClient.get<IndirectGeneratedDataList[]>(`${this.baseUrl}/data/getIndirectAndGeneratedDataList/${referenceId}`);
  }
}
