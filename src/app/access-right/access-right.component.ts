import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {RequestsServiceService} from "../services/requests-service.service";
import {map, Observable, pipe} from 'rxjs';

@Component({
  selector: 'app-access-right',
  templateUrl: './access-right.component.html',
  styleUrls: ['./access-right.component.css']
})
export class AccessRightComponent {
  primaryKeyValue:any;
  listData:any;
  dataSubject:any;
  data: any;
  filteredData: any;
  selectedValue: any;
  categoryId!: any;
  idRef: any;
  idDS: any;
  uniqueDataTypes: any;
  listValues: any;
  attributes: any;
  primaryKeyName: any;
  dataType: {
    dataTypeName: string;
    primaryKeyName: string;
    primaryKeyValue: string ;
  }= {
    dataTypeName: '',
    primaryKeyName: '',
    primaryKeyValue: ''
  };


  constructor(private requestsService: RequestsServiceService) {

  }

  ngOnInit():void{

    /*this.requestsService.getListDataByDSC(this.idRef).subscribe({
    next: (data)=>{
      this.data=data;
    }
    });*/


    /*this.requestsService.getListData().
    subscribe(data=>{
      this.listData=data;
    },err=>{
      console.log(err);
    });

    */
    //this.filterX();
  }
  DataSubject(idRef: string): any {
        return this.requestsService.getDataSubject(idRef);
        console.log(this.dataSubject);
    }


  DataListByDSC(): any {
    this.DataSubject(this.idRef).subscribe({
      next: (data: any) => {
        this.categoryId = data.dscId;
        console.log("liste data" + this.categoryId);
        //this.idDS= data.id;
        this.idDS= this.idRef;
        this.requestsService.getListDataByDSC(this.categoryId).subscribe({
      next: (dataa)=>{
        this.data=dataa;
        this.uniqueDataTypes = Array.from(new Set(this.data.map((item: { data_type_name: any; }) => item.data_type_name)));
        this.requestsService.setIdRef(this.idRef);
      }

        });
      }
    });
  }
  PersonalDataByDataType(): any {
    this.requestsService.getPersonalDataByDataType(this.selectedValue).subscribe({
      next: (data)=>{
        console.log(data);
        this.getPrimaryKey(this.selectedValue);
        console.log("primary key  "+this.primaryKeyName);
        this.listData=data;
        this.attributes = Array.from(new Set(this.listData.map((item: { attribute: any; }) => item.attribute))); console.log("attirubtesss  "+this.attributes);
        this.dataType.dataTypeName = this.selectedValue;
        this.dataType.primaryKeyName = this.primaryKeyName;
        this.requestsService.setAttributes(this.attributes.filter((d: any) => d !== this.primaryKeyName));
        this.requestsService.getPersonalDataValues(this.idDS, this.selectedValue,this.attributes).subscribe({
          next: (data)=>{
            this.listValues=data; console.log("values  " + this.listValues.value);
            this.initializeAttributeValuesMap();
            console.log("valuesss=" + this.listValues)
          }

        });
      }
    });
  }

/*  PersonalDataByDataType(): any {
        this.requestsService.getPersonalDataByDataType(this.selectedValue).subscribe({
          next: (data)=>{
            this.listData=data;
          }
        });
      }

  public PersonalDataValues(): any{
    this.requestsService.getPersonalDataValues(this.idDS, this.selectedValue,this.listData).subscribe({
      next: (data)=>{
        this.listValues=data;
        console.log(this.listValues);
      }
    });

  }*/


  /*filterDataBySelectedValue(selectedValue: string): Observable<any[]> {
    return this.data.pipe(
      map((data: any[]) => data.filter(item => item.data_type_name === selectedValue))
    );
  }

  onSelectChange(): void {
    this.filterDataBySelectedValue(this.selectedValue).subscribe((data: any) => {
      this.listData = data;

    });
  }*/

  DataList(): any {
    this.DataSubject(this.idRef).subscribe({
      next: (data: any) => {
        this.categoryId = data.dscId;
        this.requestsService.getListDataByDSC(this.categoryId).subscribe({
          next: (data)=>{
            this.data=data;
            this.uniqueDataTypes = Array.from(new Set(this.data.map((item: { data_type_name: any; }) => item.data_type_name)));
          }
        });
      }
    });

  }

  getPrimaryKey (selectedDataType: string) {
    const selectedData = this.data.find((item: any) => item.data_type_name == selectedDataType);
    if (selectedData) {

      this.primaryKeyName = selectedData.primary_key_name;
      console.log("primaryyyyyyyy "+ this.primaryKeyName);
    }
  }

  // Dans votre composant Angular

// Déclarez les propriétés pour attributeValues et uniqueAttributes
  attributeValues: any[] = [];
  uniqueAttributes: string[] = [];



// Méthode pour initialiser attributeValues et uniqueAttributes
  initializeAttributeValuesMap(): void {
    const attributeMap = new Map<string, any[]>();
    for (const item of this.listValues) {
      const attributeName = item.attribute;
      const attributeValue = item.value;
      if (attributeMap.has(attributeName)) {
        attributeMap.get(attributeName)?.push(attributeValue);
      } else {
        attributeMap.set(attributeName, [attributeValue]);
      }
    }

    this.attributeValues = [];
    this.uniqueAttributes = Array.from(attributeMap.keys());

    const maxValuesCount = Math.max(...this.uniqueAttributes.map(attribute => attributeMap.get(attribute)?.length || 0));
    for (let i = 0; i < maxValuesCount; i++) {
      const attributeValuesObj: Record<string, any> = {};
      for (const attribute of this.uniqueAttributes) {
        attributeValuesObj[attribute] = attributeMap.get(attribute)?.[i] || '';
      }
      this.attributeValues.push(attributeValuesObj);
    }
  }

// Ajoutez une fonction pour récupérer la valeur de la colonne "nom" de la ligne spécifique
  getColumnValue(rowIndex: number, columnName: string): string {
    const attributeValue = this.attributeValues[rowIndex];
    return attributeValue[columnName] || '';
  }

  //How to manage the click on the specific line button
  handleButtonClick(rowIndex: number): void {
    this.primaryKeyValue = this.getColumnValue(rowIndex,this.primaryKeyName );
    console.log('Valeur de la colonne', this.primaryKeyName, ':', this.primaryKeyValue);
    this.requestsService.setPrimaryKeyValue(this.primaryKeyValue);
  }

}

