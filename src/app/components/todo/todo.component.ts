import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  arr: Task[] = [];

  todoForm = new FormGroup({
    task: new FormControl("")
  });

  constructor(
    private service: TodoService
  ) { }

  ngOnInit(){
    this.arr = this.service.getTodos();
  }

  onSubmit(): void {
    let data = this.todoForm.value.task??"";
    this.service.addTask({task: data});
    this.arr = this.service.getTodos();
  }

  onDelete(id: number){
    this.service.remTask(id);
    this.arr = this.service.getTodos();
  }

}
