import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todoList: Todo[];
  // todos: Todo[] = [
  //   {
  //     id: 1,
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     completed: false,
  //     editing: false,
  //   },
  //   {
  //     id: 2,
  //     text: 'Lorem ipsum dolor',
  //     completed: false,
  //     editing: false,
  //   }
  // ]
  // delTodo: any;

  constructor() { }


  // getAllTodos() {
  //   return this.todos;
  // }

  // addTodo(todo: Todo) {
  //   this.todos.push(todo)
  // }

  // updateTodo(index: number, updatedTodo: Todo) {
  //   this.todos[index] = updatedTodo
  // }

  // deletedTodo(id: Number) {
  //   this.delTodo = this.todos.find(o => o.id === id);
  //   let index = this.todos.indexOf(this.delTodo, 0)
  //   this.todos.splice(index, 1)
  // }


  // local storage
  postItemsToLclStrg() {
    return localStorage.setItem('todo', JSON.stringify('Todos'));
  }
  updateItem(item: Todo, changes: any): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.postItemsToLclStrg();
  }

  deleteItem(item: Todo): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.postItemsToLclStrg();
  }
}


