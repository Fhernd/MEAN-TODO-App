import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

/**
 * Models
 */
import {
  Todo
} from './models/todo';

/**
 * Services
 */
import {
  TodoService
} from './services/todo.service';

@Component({
  selector: 'iz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[];
  
  constructor(){}


}
