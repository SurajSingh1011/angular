import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id:number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
  todos=[
    new Todo(1,'Trekking',false,new Date()),
    new Todo(2,'Swimming',true,new Date()),
    new Todo(3,'Water Sports',false,new Date()),
    new Todo(4,'Playing',true,new Date())
  ]
}
