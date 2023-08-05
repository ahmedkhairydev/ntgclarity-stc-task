import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TranslationService } from 'core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private loginService = inject(LoginService);
  private fb = inject(FormBuilder);
  private title = inject(Title);
  private translateService = inject(TranslationService);

  isEnglish = false;
  loginForm!: FormGroup<{ username: FormControl; password: FormControl; }>;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initLoginForm();
    this.title.setTitle(`STC E-Commerce | Login`);
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  
  changeLanguage() {
    this.translateService.changeLanguage();
  }

  login() {
    const { username, password } = this.loginForm.value;
    const body = { username, password };

    this.loginService.login(body);
    this.loginForm.reset();
  }
}
