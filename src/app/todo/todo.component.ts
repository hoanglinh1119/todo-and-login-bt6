import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


interface Itodo {
  id: number;
  content: string;
  complete: boolean;
}
let idc = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
   userInput = new FormControl();
   itodos: Array<Itodo> = [];
  constructor() { }

  ngOnInit(): void {
  }
  onChanges(){
    const {value} = this.userInput;
    if (value){
       const todo: Itodo = {
         id: idc++,
         content: value,
         complete: true
       };
       this.itodos.push(todo);
       this.userInput.setValue('');
     }
  }
  toggleTodo(i){
    this.itodos[i].complete = !this.itodos[i].complete;
  }

}
