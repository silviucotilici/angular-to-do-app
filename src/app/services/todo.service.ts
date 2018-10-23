import { Injectable } from '@angular/core';
import { ToDo } from "../models/ToDo";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDos: ToDo[] = [
    {    id:1,    name:'nothing!'  },
    {    id:2,    name:'more nothing!'  },
    {    id:3,    name:'more more nothing!'  },
    {    id:4,    name:'more nothing!'  },
    {    id:5,    name:'and nothing!'  }
  ];
  constructor() { }

  getToDos(): Observable<ToDo[]> {
    return of(this.toDos);
  }

  remove(item){    
    let pos = this.toDos.indexOf(item);
    this.toDos.splice(pos,1);   
  }
}
