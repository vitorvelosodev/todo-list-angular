import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todos: Todo[] = [];
  newTodo: string;

  saveTodo() {
    if (!this.newTodo) return;
    const todo = new Todo();
    todo.name = this.newTodo;
    todo.isCompleted = false;
    this.todos.push(todo);
    this.newTodo = '';
  }

  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id: number) {
    this.todos = this.todos.filter(todo => this.todos[id] !== todo);
  }
}
