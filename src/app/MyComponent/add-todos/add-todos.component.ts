import { Component, EventEmitter, Output } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent {
title:string=""
desc:string=""
@Output() todoAdd:EventEmitter<Todo> =new EventEmitter();

onSubmit(){
  const todo={
    sno: 8,
    title:this.title,
    desc:this.desc,
    active:true
  }

this.todoAdd.emit(todo);
}
}
