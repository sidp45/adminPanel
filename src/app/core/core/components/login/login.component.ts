import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // [x: string]: any;
  loginFormData:FormGroup;
  submitted = false;
  rememberme:boolean=false;
  constructor(private _formbuilder: FormBuilder,
    private _loginservice:LoginService,
    
    private _router: Router) { }

  ngOnInit() {
    this.initializeData();
  }



  //Initialize data
initializeData(){
  this.buildForm();
}

//Build the form
  buildForm(){
    this.loginFormData= this._formbuilder.group({
      loginId:['',[Validators.required]],
      loginPassword:['',[Validators.required]],
      rememberme:[''],
    })
  }
  

  onSubmit(){
    this.submitted = true;
    console.log(this.loginFormData.value);
    this._loginservice.saveLoginData(this.loginFormData.value).subscribe(result => {
    console.log('Create Result', result);
    localStorage.setItem('loginFormData',JSON.stringify(result))
 
     this._router.navigate(['dashboard']);
  }
  )}


  get f() { return this.loginFormData.controls; }

}

  
 

 
