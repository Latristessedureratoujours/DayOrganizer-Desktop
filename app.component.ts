import { Component } from '@angular/core';

class ToDo {
  constructor(public title:string,
              public completed: boolean = false){}
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

  newToDoTitle: string = '';  // очистка формы ввода
  title: string = 'DayOrganizer';

  todos: ToDo[] = todos;

  create(){

    let todo: ToDo = new ToDo(this.newToDoTitle)
    // let todo: ToDo = new ToDo(input.value);

    this.todos.push(todo);
    this.newToDoTitle='';

    // input.value = '';
  }
// закомментированный способ очистки формыввода плох, т.к. подразумевает манипулирование DOM-элементом в классе
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
