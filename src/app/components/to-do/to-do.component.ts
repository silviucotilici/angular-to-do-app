import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../../models/ToDo';
import { TodoService } from "../../services/todo.service";


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  @Input() Title: string;

  toDos: ToDo[];

  
  constructor(private toDoService: TodoService) { 
    
  }

  ngOnInit() {
    console.log(this.Title);
    
   this.getToDos();
  }

  getToDos(): void{
    this.toDoService.getToDos()
        .subscribe(todos => this.toDos = todos);
  }

}
