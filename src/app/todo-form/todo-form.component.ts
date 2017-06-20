import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent {

    newToDoTitle: string = '';  // очистка формы ввода
    

    create() {

        let todo: ToDo = new ToDo(this.newToDoTitle)
        // let todo: ToDo = new ToDo(input.value);

        this.todos.push(todo);
        this.newToDoTitle = '';

        // input.value = '';
    }
    // закомментированный способ очистки формыввода плох, т.к. подразумевает манипулирование DOM-элементом в классе
}