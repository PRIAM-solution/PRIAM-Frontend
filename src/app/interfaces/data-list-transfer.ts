interface Data {
  dataName: string;
}

interface SecondaryActorCategory {
  secondaryActorCategoryId: number;
  secondaryActorCategoryName: string;
}

export interface SecondaryActor {
  name: string;
  secondaryActorCategory: SecondaryActorCategory;
  country: string;
  data: Data[];
  safeguard?: any; // A MODIFIER POUR GERER PDF
  safeguardType?: string;
}
