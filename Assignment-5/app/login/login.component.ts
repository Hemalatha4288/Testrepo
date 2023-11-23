import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginAttempts: number = 3;
  loginMessage: string = '';

  login() {
    // Check username and password
    if (this.username === 'yourUsername' && this.password === 'yourPassword') {
      this.loginMessage = 'Login successful!';
    } else {
      this.loginAttempts--;

      if (this.loginAttempts === 0) {
        this.loginMessage = 'Invalid credentials. You have exceeded the maximum login attempts.';
      } else {
        this.loginMessage = `Invalid credentials. ${this.loginAttempts} attempts remaining.`;
      }
    }
  }
}


