import { Component } from '@angular/core';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  task : Task = new Task();

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.task);
  }

  saveTask() {
    this.taskService.createTask(this.task).subscribe(data => {
      console.log(data);
      this.goToTaskList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.saveTask();
  }

  goToTaskList() {
    this.router.navigate(['/tasks']);
  }

}
