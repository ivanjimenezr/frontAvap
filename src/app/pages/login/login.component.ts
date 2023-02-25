import { Component, OnInit } from '@angular/core';
// import { ILoginForm } from './models/IformLogin';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  public userLoginForm! : FormGroup ;

  public submitted : boolean = false;

constructor(private formBuilder: FormBuilder, public authService: AuthService, public router: Router) {
    this.buildForm();
  }


  ngOnInit(): void {
  }

  public buildForm() {
    this.userLoginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  public loginUser() {
    this.authService.signIn(this.userLoginForm.value)
  }

}
