import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register-model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  constructor(
    private _router: Router,
    private _userService: UserService) {

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null),
      email: new FormControl(null, Validators.required),
      confirmEmail: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required)
    });

  }

  ngOnInit(): void {
  }

  register() {

    if (this.form.validForm()) {
      let registerModel = this.createModel(this.form.controls);
      this._userService.register(registerModel).subscribe();
    }
  }

  private createModel(controls) {
    let name = controls.name.value
    let password = controls.password.value
    let phoneNumber = controls.phoneNumber.value
    let email = controls.email.value;
    let registerModel = new Register();
    registerModel.setProperties(name, password, phoneNumber, email);

    return registerModel;
  }

  validEqual(firstControlName: string, secondControlName: string) {
    let firstControl = this.form.controls[firstControlName];
    let secondControl = this.form.controls[secondControlName];

    if (!this.isEqual(firstControl.value, secondControl.value)) {
      secondControl.setErrors({});
    }
  }

  isEqual(fistValue: string, secondValue: string): boolean {
    return (!fistValue || !secondValue)
      || (fistValue && secondValue && fistValue.includes(secondValue))
  }

  back() {
    this._router.navigateByUrl('/'); ''
  }
}
