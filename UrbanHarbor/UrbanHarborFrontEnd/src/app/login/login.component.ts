import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendApiService } from '../shared/backend-api.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  public loginForm!: FormGroup
  username: any;
  password: any;
  invalidLogin = false
  @Input() error: string | null | undefined;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router, private backEndApi: BackendApiService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      uname: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  
  checkLogin() { //To authenticate the user login credentials.
    (this.backEndApi.authenticate(this.user.username, this.user.password).subscribe(
      data => {
        this.router.navigate(['display']); 
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;
        this.msg = "Please enter valid emailId and Password";
      }));
  }

  registration() { //To navigate the user to registration page if they are new user.
    this.router.navigate(["registration"]);

  }
}

