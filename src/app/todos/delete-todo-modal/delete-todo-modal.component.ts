import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from '../../shared/todo.model';
import { TodoDataService } from '../../shared/todo-data.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-todo-modal',
  templateUrl: './delete-todo-modal.component.html',
  styleUrls: ['./delete-todo-modal.component.scss']
})
export class DeleteTodoModalComponent implements OnInit {

  todos: Todo[];
  @Input() public todo1: any[];
  confirmPopUp: FormGroup
  todoDeleted: any;
  data: any;
  id: number;

  constructor(public activeModal: NgbActiveModal, private dataService: TodoDataService) { }

  ngOnInit(): void {
    console.log("todo data", this.todo1);
  }

  // deleteTodo(id: Number) {
  //   this.dataService.deletedTodo(id);
  //   this.cancelModal();
  // }

  cancelModal() {
    this.activeModal.dismiss();
  }

}
