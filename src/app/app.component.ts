import { Component } from '@angular/core';

class ToDo {
  title: string;
  completed: boolean;
}

const todos: ToDo[] = [
   {
    title: 'Сдать ТФЯ на ХОРОШО или выше',
    completed: true
  },
  {
    title: 'Защитить курсовой проект',
    completed: false
  },
  {
    title:  'Подготовиться к физике',
    completed: true
  },
  {
    title: 'подготовиться к ТРПО',
    completed: false
  }

];

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  // `<h1>Start {{name}}</h1>`,
  styleUrls: ['app.component.css']
})


export class AppComponent  { 

  name: string = 'DayOrganizer';
  title: string = 'DayOrganizer';

  todos: ToDo[] = todos;

  toggle(todo: ToDo){
    
    todo.completed=!todo.completed;
  }

  delete (todo: ToDo){
    let index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }

  }
}
