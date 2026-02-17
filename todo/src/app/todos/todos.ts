import { Component } from '@angular/core';
import {Todo} from './Todo';

@Component({
  selector: 'app-todos',
  imports: [],
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
}
