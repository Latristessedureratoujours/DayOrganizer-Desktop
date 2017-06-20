import { Component } from '@angular/core';
import { ToDo } from '../shared/todo';
import { todos } from '../shared/data';

@Component({
    moduleId: module.id,
     selector: 'todo-list',
     templateUrl: 'todo-list.component.html',
     styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
    todos: ToDo[] = todos;

    toggle(todo: ToDo){
    
    todo.completed = !todo.completed;
  }

  delete (todo: ToDo){
    let index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }

  }
}