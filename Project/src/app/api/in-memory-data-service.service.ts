
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {
  createDb(){
    const users =  [
      {id:0, firstName: 'name0', lastName: 'surname0', dateBirth: 81, phoneNumber:654322, adressInfo:'Poznan, Dluga2', changeInfo:'Edit', deleteInfo:'Delete'},
      {id:1, firstName: 'name1', lastName: 'surname1', dateBirth: 81, phoneNumber:654322, adressInfo:'Warsaw, Wloska', changeInfo:'Edit', deleteInfo:'Delete'},
      {id:2, firstName: 'name2', lastName: 'surname2', dateBirth: 81, phoneNumber:654322, adressInfo:'Warsaw, Wloska22', changeInfo:'Edit', deleteInfo:'Delete'},
      {id:3, firstName: 'name3', lastName: 'surname3', dateBirth: 81, phoneNumber:654322, adressInfo:'Minsk, Dluga2', changeInfo:'Edit', deleteInfo:'Delete'},
      {id:4, firstName: 'name4', lastName: 'surname4', dateBirth: 81, phoneNumber:654322, adressInfo:'Torun, Dluga2', changeInfo:'Edit', deleteInfo:'Delete'},
      {id:5, firstName: 'name5', lastName: 'surname5', dateBirth: 81, phoneNumber:654322, adressInfo:'Warsaw, Dluga2', changeInfo:'Edit', deleteInfo:'Delete'},
      {id:6, firstName: 'name6', lastName: 'surname6', dateBirth: 81, phoneNumber:654322, adressInfo:'Lublin, Dluga2', changeInfo:'Edit', deleteInfo:'Delete'},
      {id:7, firstName: 'name7', lastName: 'surname7', dateBirth: 81, phoneNumber:654322, adressInfo:'Krakow, Dluga2', changeInfo:'Edit', deleteInfo:'Delete'},

    ];

    return{users};
  }

  constructor() { }
}
