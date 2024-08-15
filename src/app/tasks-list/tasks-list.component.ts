import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent implements OnInit {

  tasks: Task[];
  constructor(private taskService: TaskService, private router:Router ) { }

  ngOnInit(): void {
    this.getTasks();
    
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(data => {
      console.log(data);
      this.getTasks();
    });
  }

  private getTasks() {
    this.taskService.obatinAllTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  updateTask(id: number) {
    this.router.navigate(['update-task', id]);
  }

}
