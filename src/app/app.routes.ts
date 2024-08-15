import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

export const routes: Routes = [
    {path: 'tasks', component: TasksListComponent},
    {path: 'new-task', component: NewTaskComponent},
    {path: 'update-task/:id', component: UpdateTaskComponent},
    {path : '', redirectTo: 'tasks', pathMatch: 'full'}
];
