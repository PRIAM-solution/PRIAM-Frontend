import {Injectable} from '@angular/core';
import {Processing} from "../Models/processing-model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProcessingService {
  constructor(private httpClient: HttpClient) {

  }

  processings: Processing [] = [];
  data: any[] = [];
  purposes: any[] = [];
  ngOnInit(){

  }
  /*processings: Processing[] = [
    {
      id: 0,
      name: 'Order management',
      age: 30,
      address: 'New York',
      isChecked: false,
      isObligatory: true,
      purpose: ['Proposal of new products', 'Management of deliveries'],
      isModifiable: false,
      isReadable: true,
      isDeleted: false,
      isCreatable: false
    },
    {
      id: 1,
      name: 'Profiling',
      age: 25,
      address: 'London',
      isChecked: false,
      isObligatory: false,
      purpose: ['Proposal of new products', 'Management of deliveries'],
      isModifiable: false,
      isReadable: true,
      isDeleted: false,
      isCreatable: false
    },
    {
      id: 2,
      name: 'Advertising Management',
      age: 35,
      address: 'Paris',
      isChecked: false,
      isObligatory: false,
      purpose: ['Proposal of new products', 'Management of deliveries'],
      isModifiable: false,
      isReadable: true,
      isDeleted: false,
      isCreatable: false
    }
  ];


*/
  getFullInformationOfProcessingsByDsc(dscId: number): any {
    const url = `http://localhost:8084/processing/listProcessings/${dscId}`;
    return this.httpClient.get(url);
  }

  remplirAttributProcessings(dscId: number):Processing[]{
    const processings: Processing[] = [];

    {
      this.getFullInformationOfProcessingsByDsc(dscId).subscribe(
        (data: any[]) => {
          this.data = data;

          for (const p of this.data) {

           /* p.purposes.subscribe(
              (purp: any[]) => { this.purposes = purp});*/

            const processing: Processing = {
              id: p.id,
              name: p.name,
              address: 'London',
              isChecked: false,
              isObligatory: false,
              dataUsages: p.dataUsages,
              purpose: p.purposes,
            };
            processings.push(processing);
          }
        },
        (error:any) => {
          console.error('Erreur lors de la récupération des données :', error);
        }
      );
    } return processings;
  }

  public getAttributeNameById(dataId: number):Observable<string> {
    const url = `http://localhost:8081/api/getAttribute/${dataId}`;
    // Utilisez la méthode `get()` du HttpClient et transformez la réponse en une chaîne de caractères avec l'opérateur `map()`.
    return this.httpClient.get(url).pipe(
      map((response: any) => {
        return response.toString();
      })
    );
  }

  getAllProcessings(): Processing[] {
    return this.processings;
  }

  getProcessingById(processingId: number): Processing {
    const processing = this.processings.find(processing => processing.id === processingId);
    if (!processing) {
      throw new Error('Details not found!');
    } else {
      return processing;
    }
  }

  getProcessings(): any {
    return this.processings;
  }

  setProcessings(processings: Processing[]): void {
    this.processings = processings;
  }

}
