import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Hector {
        
  constructor(private http: HttpClient){}
           
    getApi(){
      return this.http.get('https://www.gov.uk/bank-holidays.json');
}

}
