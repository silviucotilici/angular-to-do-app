import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TodoService } from './services/todo.service';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    NavBarComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
