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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  type: string = 'password';
  typePass: string = 'password';
  typeText: string = 'text';
  isLoad: boolean = false;
  errMasge: string = '';
  register: FormGroup = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]+(?:s[A-Za-z]+)*$'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
        ),
      ]),
      password_confirmation: new FormControl(''),
    },
    { validators: this.confirmPassword } as FormControlOptions
  );

  handleForm(): void {
    if (this.register.valid) {
      this.isLoad = true;

      this._AuthService.register(this.register.value).subscribe({
        next: (res) => {
          if (res.status === 'Request was successful.') {
            this._Router.navigate(['/login']);
            console.log('deal');
            this.isLoad = false;
          }
        },
        error: (err) => {
          this.errMasge = err.error.message;
          this.isLoad = true;
        },
      });
    }
  }
  confirmPassword(group: FormGroup): void {
    const password = group.get('password');
    const rePassword = group.get('password_confirmation');

    if (rePassword?.value == '') {
      rePassword?.setErrors({ required: true });
    } else if (password?.value !== rePassword?.value) {
      rePassword?.setErrors({ misMatch: true });
    }
  }
  showPass(): void {
    this.type == 'password' ? (this.type = 'text') : (this.type = 'password');
  }
}
