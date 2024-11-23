import { Smartphone } from './../model/smartphone.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  apiURL: string = 'http://localhost:8083/smartphones/api/all';


  produits! : Smartphone[]; //un tableau de produits
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    
  }

  listeSmartphone(): Observable<Smartphone[]>{
    return this.http.get<Smartphone[]>(this.apiURL);
    }

  

     
       
}