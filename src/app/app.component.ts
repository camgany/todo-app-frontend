import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TasksListComponent } from "./tasks-list/tasks-list.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, TasksListComponent,MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) { }
  title = 'TODO App';
  reloadPage() {
    window.location.reload();
  }

  createTask() {
    this.router.navigate(['/new-task']);
  }

  homePage() {
    this.router.navigate(['/tasks']);
  }
}
