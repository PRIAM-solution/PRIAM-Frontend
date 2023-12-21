interface Data {
  dataId: number;
  attributeName: string;
  dataValue: any;
  dataConservationDuration?: string;
  personalDataCategory?: string;
  source?: string;
  sourceDetails?: string;
  isPrimaryKey: boolean;
}

export interface DataType {
  dataTypeName: string;
  data: Data[];
}
