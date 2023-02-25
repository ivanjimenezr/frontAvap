import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service'


@Component({
  selector: 'app-login-successful',
  templateUrl: './login-successful.component.html',
  styleUrls: ['./login-successful.component.scss']
})
export class LoginSuccessfulComponent {

  constructor( private _api : ApiService, private _auth: AuthService, ) { }

  ngOnInit(): void {
    this.test_jwt()
  }

  test_jwt(){
    this._api.getTypeRequest('test-jwt').subscribe((res: any) => {
      console.log(res)

    }, err => {
      console.log(err)
    });
  }

}
