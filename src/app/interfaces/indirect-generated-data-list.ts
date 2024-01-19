interface Data {
  dataId: number;
  attributeName: string;
  selected: boolean;
}

export interface IndirectGeneratedDataList {
  dataTypeName: string;
  data: Data[];
  selected: boolean;
}
