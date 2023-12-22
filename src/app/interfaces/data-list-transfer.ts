interface Data {
  dataName: string;
}

export interface SecondaryActor {
  secondaryActorName: string;
  secondaryActorCategory: string;
  country: string;
  data: Data[];
  safeguard?: any; // A MODIFIER POUR GERER PDF
  safeguardType?: string;
}
