import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from '../shared/backend-api.service';
import { User } from '../shared/user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  implements OnInit {
  user = new User();
  msg = '';
  constructor(private backEndApi: BackendApiService, private router: Router) { }

  ngOnInit(): void {}
  registerUser() {
    this.backEndApi.registerNewUser(this.user).subscribe(
      data => {
        this.msg = "Registration Successfull";
        this.router.navigate(["login"]);
      },
      error => {
        console.log("Error occured while adding new user");
        this.msg = error.error;
      }
    )
  }
}
