import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  count = 0;
  username = '';

  constructor(private router: Router){}

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
  handleLogin(){
    this.router.navigateByUrl("/login")
    console.log(this.username+"bsnb");
  }
}
