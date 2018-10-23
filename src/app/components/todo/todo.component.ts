import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from "../../models/ToDo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() toDo: ToDo;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDel(){
    console.log('del clicked id:'+this.toDo.id);
    this.delete.emit(this.toDo);
  }

}
