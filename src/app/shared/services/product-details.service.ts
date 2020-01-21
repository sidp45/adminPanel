import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private _http: HttpClient) {
   }
  //  getProductById = function (product){
  //   var httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJyd0Y1Y3BobU1veWFrdU1Tb25mcGwxaGdZSXdXUFM2WiIsImlhdCI6MTU3OTU4NjE3MCwiZXhwIjoxNTc5NjcyNTcwfQ.TzuLqoqFZLnANelJ_v8tI8I_Qo-s6fYiCNmV7E5uo_M"
  //      })

  //   };
  //   this._http.post('http://139.59.13.212:8080/admindash/updateProduct', product,httpOptions)
  //  }
    
 
  

  //GET PRODUCT BY THIER ID
  getProductById(id){
    return this._http.get(environment.url+'/admindash/getProductData',id);
  }
  

  //SAVE THE PRODUCT
  saveProductDetails(product,token){
    console.log("Token is:",token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this._http.post(environment.url+'admindash/updateProduct', product, httpOptions)
  

  }
  

  updateProductDetails(product, id){
    return this._http.put(environment.url+'admindash/updateProduct', product,id);
  }

}
 