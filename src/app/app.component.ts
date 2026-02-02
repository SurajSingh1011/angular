import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  count = 0;
  username = '';

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
  handleLogin(){
    console.log(this.username)
   LoginComponent
  }
}
