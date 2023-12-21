interface Purpose {
  purposeDescription: string;
}

interface Data {
  attributeName: string;
}

export interface Processing {
  processingName: string;
  purposes: Purpose[];
  data: Data[];
}
