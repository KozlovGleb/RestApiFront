import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "../models/task";
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TaskserviceService {
  UrlGet: string = 'https://localhost:44340/api/Entities';

  constructor(private http: HttpClient) {
  }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.UrlGet);
  }

  public postTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.UrlGet, task, httpOptions);
  }

  public deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`https://localhost:44340/api/Entities/${task.id}`)
  }
}
