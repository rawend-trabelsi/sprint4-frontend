import { SmartphoneService } from './../services/smartphone.service';
import { Smartphone } from './../model/smartphone.model';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {

     Smartphones! : Smartphone[]; //un tableau de Produit
     
     constructor(private SmartphoneService: SmartphoneService ) {
      
      }
   

      ngOnInit(): void {

        this.chargerSmartphones();
      }
    
      chargerSmartphones(){
        this.SmartphoneService.listeSmartphone().subscribe(smars => {
          console.log(smars);
          this.Smartphones = smars;
          });
      }
   

 
  

}
