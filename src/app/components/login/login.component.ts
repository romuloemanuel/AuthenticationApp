import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login-model';
import { UserService } from 'src/app/services/user/user.service';
import '../../shared/extensions/form-goup.extensions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _router: Router,
    private _userService: UserService) {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  logIn() {
    if (this.form.validForm()) {
      let login = this.createLogin();

      this._userService.login(login).subscribe(t => {

      });
    }
  }

  private createLogin(): Login {
    let email = this.form.controls.email.value;
    let password = this.form.controls.password.value;

    let loginModel = new Login();
    loginModel.setProperties(email, password);

    return loginModel;
  }

  register() {
  }

  forgotPassword() {
  }

  create() {
    this._router.navigateByUrl('/create-account')
  }

  change() {
    this._router.navigateByUrl('/change-password')
  }
}
