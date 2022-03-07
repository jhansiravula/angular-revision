import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from 'src/app/shared/todo.model';
import { TodoDataService } from '../../shared/todo-data.service';
import { DeleteTodoModalComponent } from '../delete-todo-modal/delete-todo-modal.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  addTodoForm: FormGroup;
  submitted: boolean;
  todos: Todo[]
  delTodo: any;
  newTodoId: any;

  constructor(public fb: FormBuilder, private dataService: TodoDataService, private modalService: NgbModal) {
    this.addTodoForm = this.fb.group({
      id: new FormControl(1),
      todoName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      completed: new FormControl(),
      editing: new FormControl()
    })
  }

  ngOnInit(): void {
    //this.todos = this.dataService.getAllTodos()
  }

  get tf() {
    return this.addTodoForm.controls;
  }

  onsubmit() {
    this.submitted = true;
    if (this.addTodoForm.invalid) {
      return;
    }
    let data = {
      id: this.tf.id.value + this.newTodoId,
      text: this.tf.todoName.value,
      completed: false,
      editing: false
    }
    this.newTodoId++
    console.log("data", JSON.stringify(data))
    this.dataService.postItemsToLclStrg();
    this.submitted = false;
    this.addTodoForm.reset();
  }

  togglecompleteTodo(todo: Todo) {
    //completing the todo.
    todo.completed = !todo.completed;
  }
  editTodo(todo: Todo) {
    //index of the todo
    const index = this.todos.indexOf(todo);
    console.log("index", index);
  }
  // deleteTodo(todo: Todo) {
  //   let options: NgbModalOptions = {
  //     size: "md",
  //     backdrop: 'static',
  //     centered: true,
  //     keyboard: false,
  //   };
  //   const modalRef = this.modalService.open(DeleteTodoModalComponent, options);
  //   modalRef.componentInstance.todo1 = this.todos; //To send data to Modal
  //   modalRef.result.then((result) => {
  //     const index = this.todos.indexOf(todo);
  //     result = this.dataService.deletedTodo(index);
  //     console.log("index", result)
  //   })
  // }
}
