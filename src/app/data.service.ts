import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    DataList =([
    { id: "A", name: 'Dr. Nice' },
    { id: "B", name: 'Bombasto' },
    { id: "B", name: 'Celeritas' },
    { id: "B", name: 'Magneta' },
    { id: "B", name: 'RubberMan' },
    { id: "B", name: 'Dynama' },
    { id: "B", name: 'Dr. IQ' },
    { id: "B", name: 'Magma' },
    { id: "B", name: 'Tornado' }
  ].reverse());

 

  constructor() { }
}
