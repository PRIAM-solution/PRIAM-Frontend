interface DataTransfer {
  data: Data[]
}

interface Data {
  attributeName: string;
}

interface SecondaryActorCategory {
  secondaryActorCategoryId: number;
  secondaryActorCategoryName: string;
}

export interface SecondaryActor {
  name: string;
  secondaryActorCategory: SecondaryActorCategory;
  country: string;
  dataTransfers: DataTransfer;
  safeguard?: any; // A MODIFIER POUR GERER PDF
  safeguardType?: string;
}
