interface Data {
  attributeName: string;
}

export interface SecondaryActor {
  name: string;
  secondaryActorCategoryName: string;
  country: string;
  data: Data[];
  safeguard?: any; // A MODIFIER POUR GERER PDF
  safeguardType?: string;
}
