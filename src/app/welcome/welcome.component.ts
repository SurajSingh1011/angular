import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title ="Welcome"
  name=''
  count =0;
  constructor(private route : ActivatedRoute){}
  increment() {
      this.count++;
    }
  
    decrement() {
      this.count--;
    }
    ngOnInit(){
      this.name = this.route.snapshot.params['name'];
    }
}
