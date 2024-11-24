import { Component } from '@angular/core';
import {
  FormControl,
  FormControlOptions,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  type: string = 'password';
  typePass: string = 'password';
  typeText: string = 'text';
  isLoad: boolean = false;
  errMasge: string = '';
  login: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'),
    ]),
  });

  handleForm(): void {
    if (this.login.valid) {
      this.isLoad = true;

      this._AuthService.login(this.login.value).subscribe({
        next: (res) => {
          if (res.status === 'Request was successful.') {
            console.log(res);
            console.log(res.data.token);
            localStorage.setItem('_Token', res.data.token);
            this._Router.navigate(['/home']);
            console.log('deal');
            this.isLoad = false;
          }
        },
        error: (err) => {
          this.errMasge = err.error.message;
          console.log(err);
          this.isLoad = false;
        },
      });
    }
  }

  showPass(): void {
    this.type == 'password' ? (this.type = 'text') : (this.type = 'password');
  }
}
