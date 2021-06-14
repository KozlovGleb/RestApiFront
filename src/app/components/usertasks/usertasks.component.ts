import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {LoginserviceService} from "../../services/loginservice.service";
import {Task} from "../../models/task";
import {TaskserviceService} from "../../services/taskservice.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-usertasks',
  templateUrl: './usertasks.component.html',
  styleUrls: ['./usertasks.component.css']
})
export class UsertasksComponent implements OnInit {
  constructor(private router:Router,private loginService: LoginserviceService,private taskService:TaskserviceService) { }
  faTimes = faTimes;
  tasks:Task[] = []
  ngOnInit(): void {
   this.refresh();
  }
  logout():void {
  this.loginService.logOut();
  this.router.navigateByUrl("login")

}
  refresh():void{
    this.taskService.getTasks().subscribe((tasks:Task[])=>this.tasks = tasks);

  }
  deleteTask(task:Task):void{
    this.taskService.deleteTask(task).subscribe();
    this.tasks = this.tasks.filter(item => item.id != task.id)

  }
}
