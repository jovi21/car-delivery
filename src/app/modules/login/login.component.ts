import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@core/services/login.service';
import { debounceTime, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule]
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginSend$: Subject<boolean> = new Subject<boolean>()

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) {

    this.buildForm();
    this.loginSend$
      .pipe(
        debounceTime(500),
        switchMap(() => this.getLogin()))
      .subscribe({
        next: (res) => {
          if (res.status)
            this.router.navigate(['/dashboard'])
          else
            alert('Ha ocurrido un error!, vuelve a intentarlo')
        }
      })
  }
  buildForm() {
    this.loginForm = this.fb.group({
      // phoneNumber: [null, [Validators.required, Validators.minLength(10), Validators.pattern(/^(09|\+593)[1-9]\d{7}$/)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s).{8,}$/)]]

    });
  }
  getLogin() {
    const formValue = this.loginForm.getRawValue();
    console.log(formValue, 'form')
    return this.loginService.login(formValue)
  }
  sendLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      return;
    }
    this.loginSend$.next(true)

  }


}
