import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  {
//accepting todo from todos component
  @Input() todo: Todo;
  @Output() todoDelete:EventEmitter<Todo> =new EventEmitter();
  @Output() todoCheckBox:EventEmitter<Todo> =new EventEmitter(); 
  constructor() {
    this.todo = {} as Todo; // Initialize todo as an empty object or with appropriate default values
  }
    onClick(todo:Todo){
        console.log(todo);
        this.todoDelete.emit(todo);//passing as output to todos component
       
      }
       onCheckboxClick(todo:Todo){
        this.todoCheckBox.emit(todo);
      }
}
