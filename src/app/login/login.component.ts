import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
title= 'Login';
constructor(private router : Router){
  console.log('inside login constructor');
  
}
    isDisabled = true;
    username = '';
    password = '';
    //showLogin = false;
    isValidCred=false;
    isSubmitted=false;
    errorMessage='Invalid Credential';

    handleLogin(){
      // this.router.navigateByUrl("/login")
     // this.showLogin = true;
      console.log(this.username);
      if(this.username === 'admin' && this.password === 'admin123'){
          this.isValidCred=true;
          this.isSubmitted=true;
          this.router.navigate(['welcome',this.username]);
      }
      else{
        this.isValidCred=false;
        this.isSubmitted=true;
      }
    }
}
