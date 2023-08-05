import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private loginService = inject(LoginService);
  private fb = inject(FormBuilder);

  loginForm!: FormGroup<{ username: FormControl; password: FormControl; }>;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initLoginForm();
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    const { username, password } = this.loginForm.value;
    const body = { username, password };

    this.loginService.login(body);
    this.loginForm.reset();
  }
}
