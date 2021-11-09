import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AddTodoComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
