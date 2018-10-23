import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from "../../models/ToDo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() toDo: ToDo;

  constructor() { }

  ngOnInit() {
  }

}
