import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare let $:any;
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private router:Router
  ) { }


  //NAVIGATE TO URL'S

  navigate(url){
    this.router.navigate(['/'+url])
  }

  //Animated Scroll
  animatedScroll(pixel){
    $( 'html,body' ).animate({height: pixel}, 0)
  }
}
