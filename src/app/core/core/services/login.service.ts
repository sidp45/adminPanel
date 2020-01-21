import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }



  //Check log in
  isLogin():boolean{
    return true;
}

//Save login Data
saveLoginData(data:any){
     return this._http.post(environment.url+'login/login',data).pipe(
       map((res:any)=>{
         return res;
       })
     )
}
}
