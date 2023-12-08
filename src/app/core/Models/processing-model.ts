import {DatasourceEnum} from "../Enum/datasource-enum";


export class Processing{
  id?: number;
  name!: string;
  address!: string;
  isChecked!: boolean;
  isObligatory!: boolean;
  purpose!: purpose[];
  dataUsages!: dataUsage[];
 /* isDeleted!: boolean;
  isModifiable!: boolean;
  isReadable !: boolean ;
  isCreatable!: boolean;*/
}

class purpose {
  id!: number;
  description!: string;
  type?: string;
}

class dataUsage {
  id!: number;
  personalStatus?: true;
  c!: boolean;
  r!: boolean;
  u!: boolean;
  d!: boolean;
  dataId!: number;
  data!: Data;
}

export class Data{
  dataId!: number;
  dataConservation?: number;
  dataSource?: DatasourceEnum;
  isPersonal?: boolean;
  isPortable!: boolean;
  attribute!: string;
}
