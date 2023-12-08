import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestsServiceService {
  private idRef: any;
  private attributes: any;
  private primaryKeyValue: any;
  constructor(private httpClient: HttpClient) {

  }


  public getRectificationRequests(){
    return this.httpClient.get("http://localhost:8083/api/requestsRectification");
  }

  public getErasureRequests(){
    return this.httpClient.get("http://localhost:8083/api/requestsErasure");
  }
  public saveRectificationRequest(url:any, data:any):Observable<any>{
    return this.httpClient.post(url, data);
  }

  public saveRectificationResponse(url:any, data:any/*, options:any*/):Observable<any>{
    return this.httpClient.post(url, data/*, options*/);
  }

  public getListData(){
    return this.httpClient.get("http://localhost:8081/api/dataList");
  }

  public getListDataByDSC(dscategory: number) {
    const url = `http://localhost:8081/api/data/${dscategory}`;
    return this.httpClient.get(url);
  }

  public getDataSubject(idRef: any) {
    const url = `http://localhost:8082/api/DataSubject/ref:${idRef}`;
    return this.httpClient.get(url);
  }

  public getPersonalDataByDataType(dataTypeName: any) {
    const url = `http://localhost:8081/api/data/dataType:${dataTypeName}`;
    return this.httpClient.get(url);
  }

  /*public getPersonalDataValues(idDS: number, dataTypeName: String , attributes: any) {
    const url = `http://localhost:8083/api/personalDataValues/${idDS}/${dataTypeName}/${attributes}`;
    return this.httpClient.get(url);
  }*/

  public getPersonalDataValues(idDS: number, dataTypeName: string, attributes: any) {
    const url = `http://localhost:8083/api/personalDataValues/accessRight`;
    let params = new HttpParams();
    params = params.set('idDS', idDS);
    params = params.set('dataTypeName', dataTypeName);
    params = params.set('attributes', attributes);
    return this.httpClient.get(url, {params});
  }


  filterData(x: any[], selectedValue: string): any[] {
    if (selectedValue) {
      const filteredData = x.filter((item: any) => item.property === selectedValue);
      return filteredData;
    }
    return x;
  }


  getIdRef(): any {
    return this.idRef;
  }

  setIdRef(idRef: any): void {
    this.idRef = idRef;
  }

  getAttributes(): any {
    return this.attributes;
  }

  setAttributes(attributes: any): void {
    this.attributes = attributes;
  }

  getPrimaryKeyValue(): any {
    return this.primaryKeyValue;
  }

  setPrimaryKeyValue(primaryKeyValue: any): void {
    this.primaryKeyValue = primaryKeyValue;
  }
}
