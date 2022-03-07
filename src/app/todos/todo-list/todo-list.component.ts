import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../shared/todo.model';
import { TodoDataService } from '../../shared/todo-data.service';
import { DeleteTodoModalComponent } from '../delete-todo-modal/delete-todo-modal.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todo: Todo;
  @Output() todochecked: EventEmitter<void> = new EventEmitter()
  @Output() todoEdit: EventEmitter<void> = new EventEmitter();
  @Output() todoDelete: EventEmitter<void> = new EventEmitter();
  constructor(private dataService: TodoDataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log("todos", this.todo)
    // this.todos = [
    //   {
    //     'id': 1,
    //     'title': 'Todo1',
    //     'completed': true,
    //     'editing': true
    //   },
    //   {
    //     'id': 2,
    //     'title': 'Todo2',
    //     'completed': true,
    //     'editing': false
    //   },
    //   {
    //     'id': 3,
    //     'title': 'Todo3',
    //     'completed': false,
    //     'editing': true
    //   },
    //   {
    //     'id': 4,
    //     'title': 'Todo4',
    //     'completed': false,
    //     'editing': false
    //   },
    // ]
  }
  onTodoClick() {
    this.todochecked.emit();
    console.log("todo is clicked & completed status: ", this.todo.text, this.todo.completed);
  }

  editTodo() {
    this.todoEdit.emit();
  }
  deleteTodo() {
    this.todoDelete.emit();
    //   let options: NgbModalOptions = {
    //     size: "md",
    //     backdrop: 'static',
    //     centered: true,
    //     keyboard: false,
    //   };
    //   const modalRef = this.modalService.open(DeleteTodoModalComponent, options);
    //   console.log("modalRef", modalRef)
  }
}
