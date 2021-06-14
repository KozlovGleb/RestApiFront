import {Component, OnInit} from '@angular/core';
import {UserLogin} from "../../models/userLogin";
import {LoginserviceService} from '../../services/loginservice.service'
import {Router} from '@angular/router';
import {UserLogResult} from "../../models/loginResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userLogin: UserLogin;

  constructor(private logService: LoginserviceService, private router: Router) {
    this.userLogin = new UserLogin("123123", "Simple123");
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.logService.login(this.userLogin).subscribe((loginResult: UserLogResult) => {
        if (loginResult.isSuccess) {
          this.router.navigateByUrl("tasks")
        }
      }
    );

  }
}
