import { Component } from '@angular/core';
import {Todo} from './Todo';
import {MatCheckbox} from '@angular/material/checkbox';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [
    MatCheckbox,
    NgClass,
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
    },
    {
      id: 2,
      title: 'Fare la spesa',
      completed: false,
    },
    {
      id: 3,
      title: 'Portare fuori il cane',
      completed: false,
    }
  ];
  toggleCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
  }
  getClass(todo: Todo): string {
    return todo.completed ? 'completed' : '';
  }



}

