import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';



@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatLabel,
    MatOption
  ],
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  id!: number;
  task: Task = new Task();

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.taskService.getTaskById(this.id).subscribe(data => {
      this.task = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.taskService.updateTask(this.id, this.task).subscribe(data => {
      console.log(data);
      this.goToTaskList();
    }, error => console.log(error));
  }

  goToTaskList() {
    this.router.navigate(['/tasks']);
  }
}
