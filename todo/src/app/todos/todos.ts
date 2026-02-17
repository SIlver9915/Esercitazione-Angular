import { Component } from '@angular/core';
import {Todo} from './Todo';
import {MatCheckbox} from '@angular/material/checkbox';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [
    MatCheckbox,
    NgClass,
    FormsModule,
  ],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Studiare Angular',
      completed: false,
      isEditing: false
    },
    {
      id: 2,
      title: 'Fare la spesa',
      completed: false,
      isEditing: false
    },
    {
      id: 3,
      title: 'Portare fuori il cane',
      completed: false,
      isEditing: false
    }
  ];
  toggleCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
  }
  getClass(todo: Todo): string {
    return todo.completed ? 'completed' : '';
  }
  deleteItem(todo: Todo): void {
    this.todos = this.todos.filter(
      (objetItem: Todo): boolean => objetItem !== todo
    );
  }
  toggleEdit(todo: any) {
    todo.isEditing = !todo.isEditing;
  }
  updateTitle(todo: any, newTitle: string) {
    todo.title = newTitle;
    todo.isEditing = false; // esci dalla modalità modifica
  }

}

