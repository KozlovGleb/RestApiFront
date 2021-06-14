import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Task} from "../../models/task";
import {TaskserviceService} from "../../services/taskservice.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = new Task();

  constructor(private taskService: TaskserviceService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.task.time = new Date();
    this.taskService.postTask(this.task).subscribe();

  }

}
