import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private httpClient = inject(HttpClient); 
  private baseURL = "http://localhost:8080/api/v1/tasks";

  constructor() { }

  obatinAllTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseURL);
  }

  createTask(task: Task): Observable<Object> {
    return this.httpClient.post(this.baseURL, task);
  }

  updateTask(id: number, task: Task): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, task);
  }

  getTaskById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`${this.baseURL}/${id}`);
  }

  deleteTask(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  
}
