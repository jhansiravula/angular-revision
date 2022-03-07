import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteTodoModalComponent } from './delete-todo-modal/delete-todo-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [
    AddTodoComponent,
    TodoListComponent,
    TodoComponent,
    DeleteTodoModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    ReactiveFormsModule,
    NgbTooltipModule
  ],
  entryComponents: [
    DeleteTodoModalComponent
  ],
})
export class TodosModule { }
