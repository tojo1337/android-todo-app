import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import e from 'express';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  arr: Task[] = [];

  constructor() { }

  setService(todos: Task[]): void{
    this.arr = todos;
  }

  addTask(task: Task): void{
    this.arr.push(task);
  }

  getTodos(): Task[] {
    return this.arr;
  }

  remTask(id: number): void {
    let temp = [];
    for(let i=0;i<this.arr.length;i++){
      if(i===id){
        continue;
      }else {
        temp.push(this.arr[i]);
      }
    }
    this.arr = temp;
  }
}
